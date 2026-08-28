# `workspaceswebPortal` Submodule <a name="`workspaceswebPortal` Submodule" id="@cdktn/provider-awscc.workspaceswebPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebPortal <a name="WorkspaceswebPortal" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal awscc_workspacesweb_portal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_portal

workspaceswebPortal.WorkspaceswebPortal(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  additional_encryption_context: typing.Mapping[str] = None,
  authentication_type: str = None,
  browser_settings_arn: str = None,
  customer_managed_key: str = None,
  data_protection_settings_arn: str = None,
  display_name: str = None,
  instance_type: str = None,
  ip_access_settings_arn: str = None,
  max_concurrent_sessions: typing.Union[int, float] = None,
  network_settings_arn: str = None,
  portal_custom_domain: str = None,
  session_logger_arn: str = None,
  tags: IResolvable | typing.List[WorkspaceswebPortalTags] = None,
  trust_store_arn: str = None,
  user_access_logging_settings_arn: str = None,
  user_settings_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#additional_encryption_context WorkspaceswebPortal#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#authentication_type WorkspaceswebPortal#authentication_type}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.browserSettingsArn">browser_settings_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#browser_settings_arn WorkspaceswebPortal#browser_settings_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#customer_managed_key WorkspaceswebPortal#customer_managed_key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.dataProtectionSettingsArn">data_protection_settings_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#data_protection_settings_arn WorkspaceswebPortal#data_protection_settings_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#display_name WorkspaceswebPortal#display_name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#instance_type WorkspaceswebPortal#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.ipAccessSettingsArn">ip_access_settings_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#ip_access_settings_arn WorkspaceswebPortal#ip_access_settings_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.maxConcurrentSessions">max_concurrent_sessions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#max_concurrent_sessions WorkspaceswebPortal#max_concurrent_sessions}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.networkSettingsArn">network_settings_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#network_settings_arn WorkspaceswebPortal#network_settings_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.portalCustomDomain">portal_custom_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#portal_custom_domain WorkspaceswebPortal#portal_custom_domain}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.sessionLoggerArn">session_logger_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#session_logger_arn WorkspaceswebPortal#session_logger_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#tags WorkspaceswebPortal#tags}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.trustStoreArn">trust_store_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#trust_store_arn WorkspaceswebPortal#trust_store_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.userAccessLoggingSettingsArn">user_access_logging_settings_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#user_access_logging_settings_arn WorkspaceswebPortal#user_access_logging_settings_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.userSettingsArn">user_settings_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#user_settings_arn WorkspaceswebPortal#user_settings_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_encryption_context`<sup>Optional</sup> <a name="additional_encryption_context" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.additionalEncryptionContext"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#additional_encryption_context WorkspaceswebPortal#additional_encryption_context}.

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.authenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#authentication_type WorkspaceswebPortal#authentication_type}.

---

##### `browser_settings_arn`<sup>Optional</sup> <a name="browser_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.browserSettingsArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#browser_settings_arn WorkspaceswebPortal#browser_settings_arn}.

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.customerManagedKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#customer_managed_key WorkspaceswebPortal#customer_managed_key}.

---

##### `data_protection_settings_arn`<sup>Optional</sup> <a name="data_protection_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.dataProtectionSettingsArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#data_protection_settings_arn WorkspaceswebPortal#data_protection_settings_arn}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#display_name WorkspaceswebPortal#display_name}.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#instance_type WorkspaceswebPortal#instance_type}.

---

##### `ip_access_settings_arn`<sup>Optional</sup> <a name="ip_access_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.ipAccessSettingsArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#ip_access_settings_arn WorkspaceswebPortal#ip_access_settings_arn}.

---

##### `max_concurrent_sessions`<sup>Optional</sup> <a name="max_concurrent_sessions" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.maxConcurrentSessions"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#max_concurrent_sessions WorkspaceswebPortal#max_concurrent_sessions}.

---

##### `network_settings_arn`<sup>Optional</sup> <a name="network_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.networkSettingsArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#network_settings_arn WorkspaceswebPortal#network_settings_arn}.

---

##### `portal_custom_domain`<sup>Optional</sup> <a name="portal_custom_domain" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.portalCustomDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#portal_custom_domain WorkspaceswebPortal#portal_custom_domain}.

---

##### `session_logger_arn`<sup>Optional</sup> <a name="session_logger_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.sessionLoggerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#session_logger_arn WorkspaceswebPortal#session_logger_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#tags WorkspaceswebPortal#tags}.

---

##### `trust_store_arn`<sup>Optional</sup> <a name="trust_store_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.trustStoreArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#trust_store_arn WorkspaceswebPortal#trust_store_arn}.

---

##### `user_access_logging_settings_arn`<sup>Optional</sup> <a name="user_access_logging_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.userAccessLoggingSettingsArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#user_access_logging_settings_arn WorkspaceswebPortal#user_access_logging_settings_arn}.

---

##### `user_settings_arn`<sup>Optional</sup> <a name="user_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.userSettingsArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#user_settings_arn WorkspaceswebPortal#user_settings_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetAdditionalEncryptionContext">reset_additional_encryption_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetAuthenticationType">reset_authentication_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetBrowserSettingsArn">reset_browser_settings_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetCustomerManagedKey">reset_customer_managed_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetDataProtectionSettingsArn">reset_data_protection_settings_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetIpAccessSettingsArn">reset_ip_access_settings_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetMaxConcurrentSessions">reset_max_concurrent_sessions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetNetworkSettingsArn">reset_network_settings_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetPortalCustomDomain">reset_portal_custom_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetSessionLoggerArn">reset_session_logger_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetTrustStoreArn">reset_trust_store_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetUserAccessLoggingSettingsArn">reset_user_access_logging_settings_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetUserSettingsArn">reset_user_settings_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[WorkspaceswebPortalTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a>]

---

##### `reset_additional_encryption_context` <a name="reset_additional_encryption_context" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetAdditionalEncryptionContext"></a>

```python
def reset_additional_encryption_context() -> None
```

##### `reset_authentication_type` <a name="reset_authentication_type" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetAuthenticationType"></a>

```python
def reset_authentication_type() -> None
```

##### `reset_browser_settings_arn` <a name="reset_browser_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetBrowserSettingsArn"></a>

```python
def reset_browser_settings_arn() -> None
```

##### `reset_customer_managed_key` <a name="reset_customer_managed_key" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetCustomerManagedKey"></a>

```python
def reset_customer_managed_key() -> None
```

##### `reset_data_protection_settings_arn` <a name="reset_data_protection_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetDataProtectionSettingsArn"></a>

```python
def reset_data_protection_settings_arn() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_ip_access_settings_arn` <a name="reset_ip_access_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetIpAccessSettingsArn"></a>

```python
def reset_ip_access_settings_arn() -> None
```

##### `reset_max_concurrent_sessions` <a name="reset_max_concurrent_sessions" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetMaxConcurrentSessions"></a>

```python
def reset_max_concurrent_sessions() -> None
```

##### `reset_network_settings_arn` <a name="reset_network_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetNetworkSettingsArn"></a>

```python
def reset_network_settings_arn() -> None
```

##### `reset_portal_custom_domain` <a name="reset_portal_custom_domain" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetPortalCustomDomain"></a>

```python
def reset_portal_custom_domain() -> None
```

##### `reset_session_logger_arn` <a name="reset_session_logger_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetSessionLoggerArn"></a>

```python
def reset_session_logger_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_trust_store_arn` <a name="reset_trust_store_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetTrustStoreArn"></a>

```python
def reset_trust_store_arn() -> None
```

##### `reset_user_access_logging_settings_arn` <a name="reset_user_access_logging_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetUserAccessLoggingSettingsArn"></a>

```python
def reset_user_access_logging_settings_arn() -> None
```

##### `reset_user_settings_arn` <a name="reset_user_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetUserSettingsArn"></a>

```python
def reset_user_settings_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkspaceswebPortal resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.isConstruct"></a>

```python
from cdktn_provider_awscc import workspacesweb_portal

workspaceswebPortal.WorkspaceswebPortal.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.isTerraformElement"></a>

```python
from cdktn_provider_awscc import workspacesweb_portal

workspaceswebPortal.WorkspaceswebPortal.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.isTerraformResource"></a>

```python
from cdktn_provider_awscc import workspacesweb_portal

workspaceswebPortal.WorkspaceswebPortal.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import workspacesweb_portal

workspaceswebPortal.WorkspaceswebPortal.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkspaceswebPortal resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspaceswebPortal to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspaceswebPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.browserType">browser_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalArn">portal_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalEndpoint">portal_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalStatus">portal_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.rendererType">renderer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.serviceProviderSamlMetadata">service_provider_saml_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList">WorkspaceswebPortalTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContextInput">additional_encryption_context_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArnInput">browser_settings_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKeyInput">customer_managed_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.dataProtectionSettingsArnInput">data_protection_settings_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.ipAccessSettingsArnInput">ip_access_settings_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessionsInput">max_concurrent_sessions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.networkSettingsArnInput">network_settings_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalCustomDomainInput">portal_custom_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.sessionLoggerArnInput">session_logger_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.trustStoreArnInput">trust_store_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.userAccessLoggingSettingsArnInput">user_access_logging_settings_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.userSettingsArnInput">user_settings_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArn">browser_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.dataProtectionSettingsArn">data_protection_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.ipAccessSettingsArn">ip_access_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessions">max_concurrent_sessions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.networkSettingsArn">network_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalCustomDomain">portal_custom_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.sessionLoggerArn">session_logger_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.trustStoreArn">trust_store_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.userAccessLoggingSettingsArn">user_access_logging_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.userSettingsArn">user_settings_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `browser_type`<sup>Required</sup> <a name="browser_type" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.browserType"></a>

```python
browser_type: str
```

- *Type:* str

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `portal_arn`<sup>Required</sup> <a name="portal_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalArn"></a>

```python
portal_arn: str
```

- *Type:* str

---

##### `portal_endpoint`<sup>Required</sup> <a name="portal_endpoint" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalEndpoint"></a>

```python
portal_endpoint: str
```

- *Type:* str

---

##### `portal_status`<sup>Required</sup> <a name="portal_status" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalStatus"></a>

```python
portal_status: str
```

- *Type:* str

---

##### `renderer_type`<sup>Required</sup> <a name="renderer_type" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.rendererType"></a>

```python
renderer_type: str
```

- *Type:* str

---

##### `service_provider_saml_metadata`<sup>Required</sup> <a name="service_provider_saml_metadata" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.serviceProviderSamlMetadata"></a>

```python
service_provider_saml_metadata: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.tags"></a>

```python
tags: WorkspaceswebPortalTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList">WorkspaceswebPortalTagsList</a>

---

##### `additional_encryption_context_input`<sup>Optional</sup> <a name="additional_encryption_context_input" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContextInput"></a>

```python
additional_encryption_context_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `browser_settings_arn_input`<sup>Optional</sup> <a name="browser_settings_arn_input" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArnInput"></a>

```python
browser_settings_arn_input: str
```

- *Type:* str

---

##### `customer_managed_key_input`<sup>Optional</sup> <a name="customer_managed_key_input" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKeyInput"></a>

```python
customer_managed_key_input: str
```

- *Type:* str

---

##### `data_protection_settings_arn_input`<sup>Optional</sup> <a name="data_protection_settings_arn_input" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.dataProtectionSettingsArnInput"></a>

```python
data_protection_settings_arn_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `ip_access_settings_arn_input`<sup>Optional</sup> <a name="ip_access_settings_arn_input" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.ipAccessSettingsArnInput"></a>

```python
ip_access_settings_arn_input: str
```

- *Type:* str

---

##### `max_concurrent_sessions_input`<sup>Optional</sup> <a name="max_concurrent_sessions_input" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessionsInput"></a>

```python
max_concurrent_sessions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_settings_arn_input`<sup>Optional</sup> <a name="network_settings_arn_input" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.networkSettingsArnInput"></a>

```python
network_settings_arn_input: str
```

- *Type:* str

---

##### `portal_custom_domain_input`<sup>Optional</sup> <a name="portal_custom_domain_input" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalCustomDomainInput"></a>

```python
portal_custom_domain_input: str
```

- *Type:* str

---

##### `session_logger_arn_input`<sup>Optional</sup> <a name="session_logger_arn_input" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.sessionLoggerArnInput"></a>

```python
session_logger_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[WorkspaceswebPortalTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a>]

---

##### `trust_store_arn_input`<sup>Optional</sup> <a name="trust_store_arn_input" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.trustStoreArnInput"></a>

```python
trust_store_arn_input: str
```

- *Type:* str

---

##### `user_access_logging_settings_arn_input`<sup>Optional</sup> <a name="user_access_logging_settings_arn_input" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.userAccessLoggingSettingsArnInput"></a>

```python
user_access_logging_settings_arn_input: str
```

- *Type:* str

---

##### `user_settings_arn_input`<sup>Optional</sup> <a name="user_settings_arn_input" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.userSettingsArnInput"></a>

```python
user_settings_arn_input: str
```

- *Type:* str

---

##### `additional_encryption_context`<sup>Required</sup> <a name="additional_encryption_context" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `browser_settings_arn`<sup>Required</sup> <a name="browser_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArn"></a>

```python
browser_settings_arn: str
```

- *Type:* str

---

##### `customer_managed_key`<sup>Required</sup> <a name="customer_managed_key" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKey"></a>

```python
customer_managed_key: str
```

- *Type:* str

---

##### `data_protection_settings_arn`<sup>Required</sup> <a name="data_protection_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.dataProtectionSettingsArn"></a>

```python
data_protection_settings_arn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `ip_access_settings_arn`<sup>Required</sup> <a name="ip_access_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.ipAccessSettingsArn"></a>

```python
ip_access_settings_arn: str
```

- *Type:* str

---

##### `max_concurrent_sessions`<sup>Required</sup> <a name="max_concurrent_sessions" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessions"></a>

```python
max_concurrent_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_settings_arn`<sup>Required</sup> <a name="network_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.networkSettingsArn"></a>

```python
network_settings_arn: str
```

- *Type:* str

---

##### `portal_custom_domain`<sup>Required</sup> <a name="portal_custom_domain" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalCustomDomain"></a>

```python
portal_custom_domain: str
```

- *Type:* str

---

##### `session_logger_arn`<sup>Required</sup> <a name="session_logger_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.sessionLoggerArn"></a>

```python
session_logger_arn: str
```

- *Type:* str

---

##### `trust_store_arn`<sup>Required</sup> <a name="trust_store_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.trustStoreArn"></a>

```python
trust_store_arn: str
```

- *Type:* str

---

##### `user_access_logging_settings_arn`<sup>Required</sup> <a name="user_access_logging_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.userAccessLoggingSettingsArn"></a>

```python
user_access_logging_settings_arn: str
```

- *Type:* str

---

##### `user_settings_arn`<sup>Required</sup> <a name="user_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.userSettingsArn"></a>

```python
user_settings_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebPortalConfig <a name="WorkspaceswebPortalConfig" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_portal

workspaceswebPortal.WorkspaceswebPortalConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  additional_encryption_context: typing.Mapping[str] = None,
  authentication_type: str = None,
  browser_settings_arn: str = None,
  customer_managed_key: str = None,
  data_protection_settings_arn: str = None,
  display_name: str = None,
  instance_type: str = None,
  ip_access_settings_arn: str = None,
  max_concurrent_sessions: typing.Union[int, float] = None,
  network_settings_arn: str = None,
  portal_custom_domain: str = None,
  session_logger_arn: str = None,
  tags: IResolvable | typing.List[WorkspaceswebPortalTags] = None,
  trust_store_arn: str = None,
  user_access_logging_settings_arn: str = None,
  user_settings_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#additional_encryption_context WorkspaceswebPortal#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#authentication_type WorkspaceswebPortal#authentication_type}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.browserSettingsArn">browser_settings_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#browser_settings_arn WorkspaceswebPortal#browser_settings_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#customer_managed_key WorkspaceswebPortal#customer_managed_key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.dataProtectionSettingsArn">data_protection_settings_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#data_protection_settings_arn WorkspaceswebPortal#data_protection_settings_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#display_name WorkspaceswebPortal#display_name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#instance_type WorkspaceswebPortal#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.ipAccessSettingsArn">ip_access_settings_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#ip_access_settings_arn WorkspaceswebPortal#ip_access_settings_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.maxConcurrentSessions">max_concurrent_sessions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#max_concurrent_sessions WorkspaceswebPortal#max_concurrent_sessions}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.networkSettingsArn">network_settings_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#network_settings_arn WorkspaceswebPortal#network_settings_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.portalCustomDomain">portal_custom_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#portal_custom_domain WorkspaceswebPortal#portal_custom_domain}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.sessionLoggerArn">session_logger_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#session_logger_arn WorkspaceswebPortal#session_logger_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#tags WorkspaceswebPortal#tags}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.trustStoreArn">trust_store_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#trust_store_arn WorkspaceswebPortal#trust_store_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.userAccessLoggingSettingsArn">user_access_logging_settings_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#user_access_logging_settings_arn WorkspaceswebPortal#user_access_logging_settings_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.userSettingsArn">user_settings_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#user_settings_arn WorkspaceswebPortal#user_settings_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_encryption_context`<sup>Optional</sup> <a name="additional_encryption_context" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#additional_encryption_context WorkspaceswebPortal#additional_encryption_context}.

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#authentication_type WorkspaceswebPortal#authentication_type}.

---

##### `browser_settings_arn`<sup>Optional</sup> <a name="browser_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.browserSettingsArn"></a>

```python
browser_settings_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#browser_settings_arn WorkspaceswebPortal#browser_settings_arn}.

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.customerManagedKey"></a>

```python
customer_managed_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#customer_managed_key WorkspaceswebPortal#customer_managed_key}.

---

##### `data_protection_settings_arn`<sup>Optional</sup> <a name="data_protection_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.dataProtectionSettingsArn"></a>

```python
data_protection_settings_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#data_protection_settings_arn WorkspaceswebPortal#data_protection_settings_arn}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#display_name WorkspaceswebPortal#display_name}.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#instance_type WorkspaceswebPortal#instance_type}.

---

##### `ip_access_settings_arn`<sup>Optional</sup> <a name="ip_access_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.ipAccessSettingsArn"></a>

```python
ip_access_settings_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#ip_access_settings_arn WorkspaceswebPortal#ip_access_settings_arn}.

---

##### `max_concurrent_sessions`<sup>Optional</sup> <a name="max_concurrent_sessions" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.maxConcurrentSessions"></a>

```python
max_concurrent_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#max_concurrent_sessions WorkspaceswebPortal#max_concurrent_sessions}.

---

##### `network_settings_arn`<sup>Optional</sup> <a name="network_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.networkSettingsArn"></a>

```python
network_settings_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#network_settings_arn WorkspaceswebPortal#network_settings_arn}.

---

##### `portal_custom_domain`<sup>Optional</sup> <a name="portal_custom_domain" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.portalCustomDomain"></a>

```python
portal_custom_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#portal_custom_domain WorkspaceswebPortal#portal_custom_domain}.

---

##### `session_logger_arn`<sup>Optional</sup> <a name="session_logger_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.sessionLoggerArn"></a>

```python
session_logger_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#session_logger_arn WorkspaceswebPortal#session_logger_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[WorkspaceswebPortalTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#tags WorkspaceswebPortal#tags}.

---

##### `trust_store_arn`<sup>Optional</sup> <a name="trust_store_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.trustStoreArn"></a>

```python
trust_store_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#trust_store_arn WorkspaceswebPortal#trust_store_arn}.

---

##### `user_access_logging_settings_arn`<sup>Optional</sup> <a name="user_access_logging_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.userAccessLoggingSettingsArn"></a>

```python
user_access_logging_settings_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#user_access_logging_settings_arn WorkspaceswebPortal#user_access_logging_settings_arn}.

---

##### `user_settings_arn`<sup>Optional</sup> <a name="user_settings_arn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.userSettingsArn"></a>

```python
user_settings_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#user_settings_arn WorkspaceswebPortal#user_settings_arn}.

---

### WorkspaceswebPortalTags <a name="WorkspaceswebPortalTags" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_portal

workspaceswebPortal.WorkspaceswebPortalTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#key WorkspaceswebPortal#key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#value WorkspaceswebPortal#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#key WorkspaceswebPortal#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#value WorkspaceswebPortal#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebPortalTagsList <a name="WorkspaceswebPortalTagsList" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_portal

workspaceswebPortal.WorkspaceswebPortalTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspaceswebPortalTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspaceswebPortalTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a>]

---


### WorkspaceswebPortalTagsOutputReference <a name="WorkspaceswebPortalTagsOutputReference" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_portal

workspaceswebPortal.WorkspaceswebPortalTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceswebPortalTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a>

---



