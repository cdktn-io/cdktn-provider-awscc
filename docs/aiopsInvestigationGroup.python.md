# `aiopsInvestigationGroup` Submodule <a name="`aiopsInvestigationGroup` Submodule" id="@cdktn/provider-awscc.aiopsInvestigationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiopsInvestigationGroup <a name="AiopsInvestigationGroup" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group awscc_aiops_investigation_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer"></a>

```python
from cdktn_provider_awscc import aiops_investigation_group

aiopsInvestigationGroup.AiopsInvestigationGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  chatbot_notification_channels: IResolvable | typing.List[AiopsInvestigationGroupChatbotNotificationChannels] = None,
  cross_account_configurations: IResolvable | typing.List[AiopsInvestigationGroupCrossAccountConfigurations] = None,
  encryption_config: AiopsInvestigationGroupEncryptionConfig = None,
  investigation_group_policy: str = None,
  is_cloud_trail_event_history_enabled: bool | IResolvable = None,
  retention_in_days: typing.Union[int, float] = None,
  role_arn: str = None,
  tag_key_boundaries: typing.List[str] = None,
  tags: IResolvable | typing.List[AiopsInvestigationGroupTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | User friendly name for resources. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.chatbotNotificationChannels">chatbot_notification_channels</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>]</code> | An array of key-value pairs of notification channels to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.crossAccountConfigurations">cross_account_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>]</code> | An array of cross account configurations. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#encryption_config AiopsInvestigationGroup#encryption_config}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.investigationGroupPolicy">investigation_group_policy</a></code> | <code>str</code> | Investigation Group policy. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.isCloudTrailEventHistoryEnabled">is_cloud_trail_event_history_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to enable cloud trail history. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | The number of days to retain the investigation group. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The Investigation Role's ARN. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.tagKeyBoundaries">tag_key_boundaries</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#tag_key_boundaries AiopsInvestigationGroup#tag_key_boundaries}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.name"></a>

- *Type:* str

User friendly name for resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#name AiopsInvestigationGroup#name}

---

##### `chatbot_notification_channels`<sup>Optional</sup> <a name="chatbot_notification_channels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.chatbotNotificationChannels"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>]

An array of key-value pairs of notification channels to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#chatbot_notification_channels AiopsInvestigationGroup#chatbot_notification_channels}

---

##### `cross_account_configurations`<sup>Optional</sup> <a name="cross_account_configurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.crossAccountConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>]

An array of cross account configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#cross_account_configurations AiopsInvestigationGroup#cross_account_configurations}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#encryption_config AiopsInvestigationGroup#encryption_config}.

---

##### `investigation_group_policy`<sup>Optional</sup> <a name="investigation_group_policy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.investigationGroupPolicy"></a>

- *Type:* str

Investigation Group policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#investigation_group_policy AiopsInvestigationGroup#investigation_group_policy}

---

##### `is_cloud_trail_event_history_enabled`<sup>Optional</sup> <a name="is_cloud_trail_event_history_enabled" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.isCloudTrailEventHistoryEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Flag to enable cloud trail history.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#is_cloud_trail_event_history_enabled AiopsInvestigationGroup#is_cloud_trail_event_history_enabled}

---

##### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.retentionInDays"></a>

- *Type:* typing.Union[int, float]

The number of days to retain the investigation group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#retention_in_days AiopsInvestigationGroup#retention_in_days}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.roleArn"></a>

- *Type:* str

The Investigation Role's ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#role_arn AiopsInvestigationGroup#role_arn}

---

##### `tag_key_boundaries`<sup>Optional</sup> <a name="tag_key_boundaries" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.tagKeyBoundaries"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#tag_key_boundaries AiopsInvestigationGroup#tag_key_boundaries}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#tags AiopsInvestigationGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putChatbotNotificationChannels">put_chatbot_notification_channels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putCrossAccountConfigurations">put_cross_account_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putEncryptionConfig">put_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetChatbotNotificationChannels">reset_chatbot_notification_channels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetCrossAccountConfigurations">reset_cross_account_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetEncryptionConfig">reset_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetInvestigationGroupPolicy">reset_investigation_group_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetIsCloudTrailEventHistoryEnabled">reset_is_cloud_trail_event_history_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRetentionInDays">reset_retention_in_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTagKeyBoundaries">reset_tag_key_boundaries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_chatbot_notification_channels` <a name="put_chatbot_notification_channels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putChatbotNotificationChannels"></a>

```python
def put_chatbot_notification_channels(
  value: IResolvable | typing.List[AiopsInvestigationGroupChatbotNotificationChannels]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putChatbotNotificationChannels.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>]

---

##### `put_cross_account_configurations` <a name="put_cross_account_configurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putCrossAccountConfigurations"></a>

```python
def put_cross_account_configurations(
  value: IResolvable | typing.List[AiopsInvestigationGroupCrossAccountConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putCrossAccountConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>]

---

##### `put_encryption_config` <a name="put_encryption_config" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putEncryptionConfig"></a>

```python
def put_encryption_config(
  encryption_configuration_type: str = None,
  kms_key_id: str = None
) -> None
```

###### `encryption_configuration_type`<sup>Optional</sup> <a name="encryption_configuration_type" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putEncryptionConfig.parameter.encryptionConfigurationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#encryption_configuration_type AiopsInvestigationGroup#encryption_configuration_type}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putEncryptionConfig.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#kms_key_id AiopsInvestigationGroup#kms_key_id}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AiopsInvestigationGroupTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>]

---

##### `reset_chatbot_notification_channels` <a name="reset_chatbot_notification_channels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetChatbotNotificationChannels"></a>

```python
def reset_chatbot_notification_channels() -> None
```

##### `reset_cross_account_configurations` <a name="reset_cross_account_configurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetCrossAccountConfigurations"></a>

```python
def reset_cross_account_configurations() -> None
```

##### `reset_encryption_config` <a name="reset_encryption_config" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetEncryptionConfig"></a>

```python
def reset_encryption_config() -> None
```

##### `reset_investigation_group_policy` <a name="reset_investigation_group_policy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetInvestigationGroupPolicy"></a>

```python
def reset_investigation_group_policy() -> None
```

##### `reset_is_cloud_trail_event_history_enabled` <a name="reset_is_cloud_trail_event_history_enabled" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetIsCloudTrailEventHistoryEnabled"></a>

```python
def reset_is_cloud_trail_event_history_enabled() -> None
```

##### `reset_retention_in_days` <a name="reset_retention_in_days" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRetentionInDays"></a>

```python
def reset_retention_in_days() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_tag_key_boundaries` <a name="reset_tag_key_boundaries" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTagKeyBoundaries"></a>

```python
def reset_tag_key_boundaries() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AiopsInvestigationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import aiops_investigation_group

aiopsInvestigationGroup.AiopsInvestigationGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import aiops_investigation_group

aiopsInvestigationGroup.AiopsInvestigationGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import aiops_investigation_group

aiopsInvestigationGroup.AiopsInvestigationGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import aiops_investigation_group

aiopsInvestigationGroup.AiopsInvestigationGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AiopsInvestigationGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AiopsInvestigationGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AiopsInvestigationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AiopsInvestigationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannels">chatbot_notification_channels</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList">AiopsInvestigationGroupChatbotNotificationChannelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurations">cross_account_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList">AiopsInvestigationGroupCrossAccountConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference">AiopsInvestigationGroupEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedAt">last_modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedBy">last_modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList">AiopsInvestigationGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannelsInput">chatbot_notification_channels_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurationsInput">cross_account_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfigInput">encryption_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicyInput">investigation_group_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabledInput">is_cloud_trail_event_history_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDaysInput">retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundariesInput">tag_key_boundaries_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicy">investigation_group_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabled">is_cloud_trail_event_history_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundaries">tag_key_boundaries</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `chatbot_notification_channels`<sup>Required</sup> <a name="chatbot_notification_channels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannels"></a>

```python
chatbot_notification_channels: AiopsInvestigationGroupChatbotNotificationChannelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList">AiopsInvestigationGroupChatbotNotificationChannelsList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `cross_account_configurations`<sup>Required</sup> <a name="cross_account_configurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurations"></a>

```python
cross_account_configurations: AiopsInvestigationGroupCrossAccountConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList">AiopsInvestigationGroupCrossAccountConfigurationsList</a>

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfig"></a>

```python
encryption_config: AiopsInvestigationGroupEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference">AiopsInvestigationGroupEncryptionConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_at`<sup>Required</sup> <a name="last_modified_at" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedAt"></a>

```python
last_modified_at: str
```

- *Type:* str

---

##### `last_modified_by`<sup>Required</sup> <a name="last_modified_by" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedBy"></a>

```python
last_modified_by: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tags"></a>

```python
tags: AiopsInvestigationGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList">AiopsInvestigationGroupTagsList</a>

---

##### `chatbot_notification_channels_input`<sup>Optional</sup> <a name="chatbot_notification_channels_input" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannelsInput"></a>

```python
chatbot_notification_channels_input: IResolvable | typing.List[AiopsInvestigationGroupChatbotNotificationChannels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>]

---

##### `cross_account_configurations_input`<sup>Optional</sup> <a name="cross_account_configurations_input" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurationsInput"></a>

```python
cross_account_configurations_input: IResolvable | typing.List[AiopsInvestigationGroupCrossAccountConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>]

---

##### `encryption_config_input`<sup>Optional</sup> <a name="encryption_config_input" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfigInput"></a>

```python
encryption_config_input: IResolvable | AiopsInvestigationGroupEncryptionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

---

##### `investigation_group_policy_input`<sup>Optional</sup> <a name="investigation_group_policy_input" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicyInput"></a>

```python
investigation_group_policy_input: str
```

- *Type:* str

---

##### `is_cloud_trail_event_history_enabled_input`<sup>Optional</sup> <a name="is_cloud_trail_event_history_enabled_input" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabledInput"></a>

```python
is_cloud_trail_event_history_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `retention_in_days_input`<sup>Optional</sup> <a name="retention_in_days_input" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDaysInput"></a>

```python
retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tag_key_boundaries_input`<sup>Optional</sup> <a name="tag_key_boundaries_input" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundariesInput"></a>

```python
tag_key_boundaries_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AiopsInvestigationGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>]

---

##### `investigation_group_policy`<sup>Required</sup> <a name="investigation_group_policy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicy"></a>

```python
investigation_group_policy: str
```

- *Type:* str

---

##### `is_cloud_trail_event_history_enabled`<sup>Required</sup> <a name="is_cloud_trail_event_history_enabled" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabled"></a>

```python
is_cloud_trail_event_history_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tag_key_boundaries`<sup>Required</sup> <a name="tag_key_boundaries" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundaries"></a>

```python
tag_key_boundaries: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AiopsInvestigationGroupChatbotNotificationChannels <a name="AiopsInvestigationGroupChatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.Initializer"></a>

```python
from cdktn_provider_awscc import aiops_investigation_group

aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels(
  chat_configuration_arns: typing.List[str] = None,
  sns_topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.chatConfigurationArns">chat_configuration_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#chat_configuration_arns AiopsInvestigationGroup#chat_configuration_arns}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#sns_topic_arn AiopsInvestigationGroup#sns_topic_arn}. |

---

##### `chat_configuration_arns`<sup>Optional</sup> <a name="chat_configuration_arns" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.chatConfigurationArns"></a>

```python
chat_configuration_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#chat_configuration_arns AiopsInvestigationGroup#chat_configuration_arns}.

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#sns_topic_arn AiopsInvestigationGroup#sns_topic_arn}.

---

### AiopsInvestigationGroupConfig <a name="AiopsInvestigationGroupConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import aiops_investigation_group

aiopsInvestigationGroup.AiopsInvestigationGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  chatbot_notification_channels: IResolvable | typing.List[AiopsInvestigationGroupChatbotNotificationChannels] = None,
  cross_account_configurations: IResolvable | typing.List[AiopsInvestigationGroupCrossAccountConfigurations] = None,
  encryption_config: AiopsInvestigationGroupEncryptionConfig = None,
  investigation_group_policy: str = None,
  is_cloud_trail_event_history_enabled: bool | IResolvable = None,
  retention_in_days: typing.Union[int, float] = None,
  role_arn: str = None,
  tag_key_boundaries: typing.List[str] = None,
  tags: IResolvable | typing.List[AiopsInvestigationGroupTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.name">name</a></code> | <code>str</code> | User friendly name for resources. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.chatbotNotificationChannels">chatbot_notification_channels</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>]</code> | An array of key-value pairs of notification channels to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.crossAccountConfigurations">cross_account_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>]</code> | An array of cross account configurations. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#encryption_config AiopsInvestigationGroup#encryption_config}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.investigationGroupPolicy">investigation_group_policy</a></code> | <code>str</code> | Investigation Group policy. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.isCloudTrailEventHistoryEnabled">is_cloud_trail_event_history_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to enable cloud trail history. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | The number of days to retain the investigation group. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The Investigation Role's ARN. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tagKeyBoundaries">tag_key_boundaries</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#tag_key_boundaries AiopsInvestigationGroup#tag_key_boundaries}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

User friendly name for resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#name AiopsInvestigationGroup#name}

---

##### `chatbot_notification_channels`<sup>Optional</sup> <a name="chatbot_notification_channels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.chatbotNotificationChannels"></a>

```python
chatbot_notification_channels: IResolvable | typing.List[AiopsInvestigationGroupChatbotNotificationChannels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>]

An array of key-value pairs of notification channels to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#chatbot_notification_channels AiopsInvestigationGroup#chatbot_notification_channels}

---

##### `cross_account_configurations`<sup>Optional</sup> <a name="cross_account_configurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.crossAccountConfigurations"></a>

```python
cross_account_configurations: IResolvable | typing.List[AiopsInvestigationGroupCrossAccountConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>]

An array of cross account configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#cross_account_configurations AiopsInvestigationGroup#cross_account_configurations}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.encryptionConfig"></a>

```python
encryption_config: AiopsInvestigationGroupEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#encryption_config AiopsInvestigationGroup#encryption_config}.

---

##### `investigation_group_policy`<sup>Optional</sup> <a name="investigation_group_policy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.investigationGroupPolicy"></a>

```python
investigation_group_policy: str
```

- *Type:* str

Investigation Group policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#investigation_group_policy AiopsInvestigationGroup#investigation_group_policy}

---

##### `is_cloud_trail_event_history_enabled`<sup>Optional</sup> <a name="is_cloud_trail_event_history_enabled" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.isCloudTrailEventHistoryEnabled"></a>

```python
is_cloud_trail_event_history_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Flag to enable cloud trail history.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#is_cloud_trail_event_history_enabled AiopsInvestigationGroup#is_cloud_trail_event_history_enabled}

---

##### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days to retain the investigation group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#retention_in_days AiopsInvestigationGroup#retention_in_days}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Investigation Role's ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#role_arn AiopsInvestigationGroup#role_arn}

---

##### `tag_key_boundaries`<sup>Optional</sup> <a name="tag_key_boundaries" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tagKeyBoundaries"></a>

```python
tag_key_boundaries: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#tag_key_boundaries AiopsInvestigationGroup#tag_key_boundaries}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AiopsInvestigationGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#tags AiopsInvestigationGroup#tags}

---

### AiopsInvestigationGroupCrossAccountConfigurations <a name="AiopsInvestigationGroupCrossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import aiops_investigation_group

aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations(
  source_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations.property.sourceRoleArn">source_role_arn</a></code> | <code>str</code> | The Investigation Role's ARN. |

---

##### `source_role_arn`<sup>Optional</sup> <a name="source_role_arn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations.property.sourceRoleArn"></a>

```python
source_role_arn: str
```

- *Type:* str

The Investigation Role's ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#source_role_arn AiopsInvestigationGroup#source_role_arn}

---

### AiopsInvestigationGroupEncryptionConfig <a name="AiopsInvestigationGroupEncryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import aiops_investigation_group

aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig(
  encryption_configuration_type: str = None,
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.encryptionConfigurationType">encryption_configuration_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#encryption_configuration_type AiopsInvestigationGroup#encryption_configuration_type}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#kms_key_id AiopsInvestigationGroup#kms_key_id}. |

---

##### `encryption_configuration_type`<sup>Optional</sup> <a name="encryption_configuration_type" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.encryptionConfigurationType"></a>

```python
encryption_configuration_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#encryption_configuration_type AiopsInvestigationGroup#encryption_configuration_type}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#kms_key_id AiopsInvestigationGroup#kms_key_id}.

---

### AiopsInvestigationGroupTags <a name="AiopsInvestigationGroupTags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import aiops_investigation_group

aiopsInvestigationGroup.AiopsInvestigationGroupTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#key AiopsInvestigationGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#value AiopsInvestigationGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#key AiopsInvestigationGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#value AiopsInvestigationGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiopsInvestigationGroupChatbotNotificationChannelsList <a name="AiopsInvestigationGroupChatbotNotificationChannelsList" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer"></a>

```python
from cdktn_provider_awscc import aiops_investigation_group

aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiopsInvestigationGroupChatbotNotificationChannelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AiopsInvestigationGroupChatbotNotificationChannels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>]

---


### AiopsInvestigationGroupChatbotNotificationChannelsOutputReference <a name="AiopsInvestigationGroupChatbotNotificationChannelsOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aiops_investigation_group

aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetChatConfigurationArns">reset_chat_configuration_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetSnsTopicArn">reset_sns_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_chat_configuration_arns` <a name="reset_chat_configuration_arns" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetChatConfigurationArns"></a>

```python
def reset_chat_configuration_arns() -> None
```

##### `reset_sns_topic_arn` <a name="reset_sns_topic_arn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetSnsTopicArn"></a>

```python
def reset_sns_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArnsInput">chat_configuration_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArnInput">sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArns">chat_configuration_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chat_configuration_arns_input`<sup>Optional</sup> <a name="chat_configuration_arns_input" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArnsInput"></a>

```python
chat_configuration_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sns_topic_arn_input`<sup>Optional</sup> <a name="sns_topic_arn_input" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArnInput"></a>

```python
sns_topic_arn_input: str
```

- *Type:* str

---

##### `chat_configuration_arns`<sup>Required</sup> <a name="chat_configuration_arns" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArns"></a>

```python
chat_configuration_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiopsInvestigationGroupChatbotNotificationChannels
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>

---


### AiopsInvestigationGroupCrossAccountConfigurationsList <a name="AiopsInvestigationGroupCrossAccountConfigurationsList" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import aiops_investigation_group

aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiopsInvestigationGroupCrossAccountConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AiopsInvestigationGroupCrossAccountConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>]

---


### AiopsInvestigationGroupCrossAccountConfigurationsOutputReference <a name="AiopsInvestigationGroupCrossAccountConfigurationsOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aiops_investigation_group

aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resetSourceRoleArn">reset_source_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_role_arn` <a name="reset_source_role_arn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resetSourceRoleArn"></a>

```python
def reset_source_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArnInput">source_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArn">source_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_role_arn_input`<sup>Optional</sup> <a name="source_role_arn_input" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArnInput"></a>

```python
source_role_arn_input: str
```

- *Type:* str

---

##### `source_role_arn`<sup>Required</sup> <a name="source_role_arn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArn"></a>

```python
source_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiopsInvestigationGroupCrossAccountConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>

---


### AiopsInvestigationGroupEncryptionConfigOutputReference <a name="AiopsInvestigationGroupEncryptionConfigOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aiops_investigation_group

aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetEncryptionConfigurationType">reset_encryption_configuration_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_configuration_type` <a name="reset_encryption_configuration_type" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetEncryptionConfigurationType"></a>

```python
def reset_encryption_configuration_type() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationTypeInput">encryption_configuration_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationType">encryption_configuration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_configuration_type_input`<sup>Optional</sup> <a name="encryption_configuration_type_input" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationTypeInput"></a>

```python
encryption_configuration_type_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `encryption_configuration_type`<sup>Required</sup> <a name="encryption_configuration_type" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationType"></a>

```python
encryption_configuration_type: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiopsInvestigationGroupEncryptionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

---


### AiopsInvestigationGroupTagsList <a name="AiopsInvestigationGroupTagsList" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import aiops_investigation_group

aiopsInvestigationGroup.AiopsInvestigationGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiopsInvestigationGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AiopsInvestigationGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>]

---


### AiopsInvestigationGroupTagsOutputReference <a name="AiopsInvestigationGroupTagsOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aiops_investigation_group

aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiopsInvestigationGroupTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>

---



