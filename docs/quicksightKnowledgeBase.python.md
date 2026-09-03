# `quicksightKnowledgeBase` Submodule <a name="`quicksightKnowledgeBase` Submodule" id="@cdktn/provider-awscc.quicksightKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightKnowledgeBase <a name="QuicksightKnowledgeBase" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base awscc_quicksight_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBase(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aws_account_id: str,
  data_source_arn: str,
  knowledge_base_configuration: QuicksightKnowledgeBaseKnowledgeBaseConfiguration,
  knowledge_base_id: str,
  name: str,
  access_control_configuration: QuicksightKnowledgeBaseAccessControlConfiguration = None,
  description: str = None,
  is_email_notification_opted_for_ingestion_failures: bool | IResolvable = None,
  media_extraction_configuration: QuicksightKnowledgeBaseMediaExtractionConfiguration = None,
  permissions: IResolvable | typing.List[QuicksightKnowledgeBasePermissions] = None,
  primary_owner_arn: str = None,
  tags: IResolvable | typing.List[QuicksightKnowledgeBaseTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#aws_account_id QuicksightKnowledgeBase#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.dataSourceArn">data_source_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#data_source_arn QuicksightKnowledgeBase#data_source_arn}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.knowledgeBaseConfiguration">knowledge_base_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#knowledge_base_configuration QuicksightKnowledgeBase#knowledge_base_configuration}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#knowledge_base_id QuicksightKnowledgeBase#knowledge_base_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#name QuicksightKnowledgeBase#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.accessControlConfiguration">access_control_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration">QuicksightKnowledgeBaseAccessControlConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#access_control_configuration QuicksightKnowledgeBase#access_control_configuration}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#description QuicksightKnowledgeBase#description}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.isEmailNotificationOptedForIngestionFailures">is_email_notification_opted_for_ingestion_failures</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#is_email_notification_opted_for_ingestion_failures QuicksightKnowledgeBase#is_email_notification_opted_for_ingestion_failures}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.mediaExtractionConfiguration">media_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#media_extraction_configuration QuicksightKnowledgeBase#media_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.permissions">permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#permissions QuicksightKnowledgeBase#permissions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.primaryOwnerArn">primary_owner_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#primary_owner_arn QuicksightKnowledgeBase#primary_owner_arn}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#tags QuicksightKnowledgeBase#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#aws_account_id QuicksightKnowledgeBase#aws_account_id}.

---

##### `data_source_arn`<sup>Required</sup> <a name="data_source_arn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.dataSourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#data_source_arn QuicksightKnowledgeBase#data_source_arn}.

---

##### `knowledge_base_configuration`<sup>Required</sup> <a name="knowledge_base_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.knowledgeBaseConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#knowledge_base_configuration QuicksightKnowledgeBase#knowledge_base_configuration}.

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.knowledgeBaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#knowledge_base_id QuicksightKnowledgeBase#knowledge_base_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#name QuicksightKnowledgeBase#name}.

---

##### `access_control_configuration`<sup>Optional</sup> <a name="access_control_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.accessControlConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration">QuicksightKnowledgeBaseAccessControlConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#access_control_configuration QuicksightKnowledgeBase#access_control_configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#description QuicksightKnowledgeBase#description}.

---

##### `is_email_notification_opted_for_ingestion_failures`<sup>Optional</sup> <a name="is_email_notification_opted_for_ingestion_failures" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.isEmailNotificationOptedForIngestionFailures"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#is_email_notification_opted_for_ingestion_failures QuicksightKnowledgeBase#is_email_notification_opted_for_ingestion_failures}.

---

##### `media_extraction_configuration`<sup>Optional</sup> <a name="media_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.mediaExtractionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#media_extraction_configuration QuicksightKnowledgeBase#media_extraction_configuration}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.permissions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#permissions QuicksightKnowledgeBase#permissions}.

---

##### `primary_owner_arn`<sup>Optional</sup> <a name="primary_owner_arn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.primaryOwnerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#primary_owner_arn QuicksightKnowledgeBase#primary_owner_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#tags QuicksightKnowledgeBase#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putAccessControlConfiguration">put_access_control_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putKnowledgeBaseConfiguration">put_knowledge_base_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putMediaExtractionConfiguration">put_media_extraction_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putPermissions">put_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetAccessControlConfiguration">reset_access_control_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetIsEmailNotificationOptedForIngestionFailures">reset_is_email_notification_opted_for_ingestion_failures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetMediaExtractionConfiguration">reset_media_extraction_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetPrimaryOwnerArn">reset_primary_owner_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_control_configuration` <a name="put_access_control_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putAccessControlConfiguration"></a>

```python
def put_access_control_configuration(
  is_acl_enabled: bool | IResolvable = None
) -> None
```

###### `is_acl_enabled`<sup>Optional</sup> <a name="is_acl_enabled" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putAccessControlConfiguration.parameter.isAclEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#is_acl_enabled QuicksightKnowledgeBase#is_acl_enabled}.

---

##### `put_knowledge_base_configuration` <a name="put_knowledge_base_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putKnowledgeBaseConfiguration"></a>

```python
def put_knowledge_base_configuration(
  template_configuration: QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration = None
) -> None
```

###### `template_configuration`<sup>Optional</sup> <a name="template_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putKnowledgeBaseConfiguration.parameter.templateConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#template_configuration QuicksightKnowledgeBase#template_configuration}.

---

##### `put_media_extraction_configuration` <a name="put_media_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putMediaExtractionConfiguration"></a>

```python
def put_media_extraction_configuration(
  audio_extraction_configuration: QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration = None,
  image_extraction_configuration: QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration = None,
  video_extraction_configuration: QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration = None
) -> None
```

###### `audio_extraction_configuration`<sup>Optional</sup> <a name="audio_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putMediaExtractionConfiguration.parameter.audioExtractionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#audio_extraction_configuration QuicksightKnowledgeBase#audio_extraction_configuration}.

---

###### `image_extraction_configuration`<sup>Optional</sup> <a name="image_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putMediaExtractionConfiguration.parameter.imageExtractionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#image_extraction_configuration QuicksightKnowledgeBase#image_extraction_configuration}.

---

###### `video_extraction_configuration`<sup>Optional</sup> <a name="video_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putMediaExtractionConfiguration.parameter.videoExtractionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#video_extraction_configuration QuicksightKnowledgeBase#video_extraction_configuration}.

---

##### `put_permissions` <a name="put_permissions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putPermissions"></a>

```python
def put_permissions(
  value: IResolvable | typing.List[QuicksightKnowledgeBasePermissions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[QuicksightKnowledgeBaseTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a>]

---

##### `reset_access_control_configuration` <a name="reset_access_control_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetAccessControlConfiguration"></a>

```python
def reset_access_control_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_is_email_notification_opted_for_ingestion_failures` <a name="reset_is_email_notification_opted_for_ingestion_failures" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetIsEmailNotificationOptedForIngestionFailures"></a>

```python
def reset_is_email_notification_opted_for_ingestion_failures() -> None
```

##### `reset_media_extraction_configuration` <a name="reset_media_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetMediaExtractionConfiguration"></a>

```python
def reset_media_extraction_configuration() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_primary_owner_arn` <a name="reset_primary_owner_arn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetPrimaryOwnerArn"></a>

```python
def reset_primary_owner_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a QuicksightKnowledgeBase resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isConstruct"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformElement"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformResource"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a QuicksightKnowledgeBase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QuicksightKnowledgeBase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QuicksightKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.accessControlConfiguration">access_control_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference">QuicksightKnowledgeBaseAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.documentCount">document_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseArn">knowledge_base_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseConfiguration">knowledge_base_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference">QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseSizeBytes">knowledge_base_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.mediaExtractionConfiguration">media_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList">QuicksightKnowledgeBasePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.primaryOwnerUsername">primary_owner_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList">QuicksightKnowledgeBaseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.accessControlConfigurationInput">access_control_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration">QuicksightKnowledgeBaseAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.dataSourceArnInput">data_source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.isEmailNotificationOptedForIngestionFailuresInput">is_email_notification_opted_for_ingestion_failures_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseConfigurationInput">knowledge_base_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseIdInput">knowledge_base_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.mediaExtractionConfigurationInput">media_extraction_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.permissionsInput">permissions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.primaryOwnerArnInput">primary_owner_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.dataSourceArn">data_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.isEmailNotificationOptedForIngestionFailures">is_email_notification_opted_for_ingestion_failures</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.primaryOwnerArn">primary_owner_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_control_configuration`<sup>Required</sup> <a name="access_control_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.accessControlConfiguration"></a>

```python
access_control_configuration: QuicksightKnowledgeBaseAccessControlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference">QuicksightKnowledgeBaseAccessControlConfigurationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `document_count`<sup>Required</sup> <a name="document_count" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.documentCount"></a>

```python
document_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `knowledge_base_arn`<sup>Required</sup> <a name="knowledge_base_arn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseArn"></a>

```python
knowledge_base_arn: str
```

- *Type:* str

---

##### `knowledge_base_configuration`<sup>Required</sup> <a name="knowledge_base_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseConfiguration"></a>

```python
knowledge_base_configuration: QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference">QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference</a>

---

##### `knowledge_base_size_bytes`<sup>Required</sup> <a name="knowledge_base_size_bytes" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseSizeBytes"></a>

```python
knowledge_base_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `media_extraction_configuration`<sup>Required</sup> <a name="media_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.mediaExtractionConfiguration"></a>

```python
media_extraction_configuration: QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.permissions"></a>

```python
permissions: QuicksightKnowledgeBasePermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList">QuicksightKnowledgeBasePermissionsList</a>

---

##### `primary_owner_username`<sup>Required</sup> <a name="primary_owner_username" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.primaryOwnerUsername"></a>

```python
primary_owner_username: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.tags"></a>

```python
tags: QuicksightKnowledgeBaseTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList">QuicksightKnowledgeBaseTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `access_control_configuration_input`<sup>Optional</sup> <a name="access_control_configuration_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.accessControlConfigurationInput"></a>

```python
access_control_configuration_input: IResolvable | QuicksightKnowledgeBaseAccessControlConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration">QuicksightKnowledgeBaseAccessControlConfiguration</a>

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `data_source_arn_input`<sup>Optional</sup> <a name="data_source_arn_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.dataSourceArnInput"></a>

```python
data_source_arn_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `is_email_notification_opted_for_ingestion_failures_input`<sup>Optional</sup> <a name="is_email_notification_opted_for_ingestion_failures_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.isEmailNotificationOptedForIngestionFailuresInput"></a>

```python
is_email_notification_opted_for_ingestion_failures_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `knowledge_base_configuration_input`<sup>Optional</sup> <a name="knowledge_base_configuration_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseConfigurationInput"></a>

```python
knowledge_base_configuration_input: IResolvable | QuicksightKnowledgeBaseKnowledgeBaseConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfiguration</a>

---

##### `knowledge_base_id_input`<sup>Optional</sup> <a name="knowledge_base_id_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseIdInput"></a>

```python
knowledge_base_id_input: str
```

- *Type:* str

---

##### `media_extraction_configuration_input`<sup>Optional</sup> <a name="media_extraction_configuration_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.mediaExtractionConfigurationInput"></a>

```python
media_extraction_configuration_input: IResolvable | QuicksightKnowledgeBaseMediaExtractionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.permissionsInput"></a>

```python
permissions_input: IResolvable | typing.List[QuicksightKnowledgeBasePermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a>]

---

##### `primary_owner_arn_input`<sup>Optional</sup> <a name="primary_owner_arn_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.primaryOwnerArnInput"></a>

```python
primary_owner_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[QuicksightKnowledgeBaseTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a>]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `data_source_arn`<sup>Required</sup> <a name="data_source_arn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.dataSourceArn"></a>

```python
data_source_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_email_notification_opted_for_ingestion_failures`<sup>Required</sup> <a name="is_email_notification_opted_for_ingestion_failures" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.isEmailNotificationOptedForIngestionFailures"></a>

```python
is_email_notification_opted_for_ingestion_failures: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseId"></a>

```python
knowledge_base_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary_owner_arn`<sup>Required</sup> <a name="primary_owner_arn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.primaryOwnerArn"></a>

```python
primary_owner_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightKnowledgeBaseAccessControlConfiguration <a name="QuicksightKnowledgeBaseAccessControlConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration(
  is_acl_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration.property.isAclEnabled">is_acl_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#is_acl_enabled QuicksightKnowledgeBase#is_acl_enabled}. |

---

##### `is_acl_enabled`<sup>Optional</sup> <a name="is_acl_enabled" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration.property.isAclEnabled"></a>

```python
is_acl_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#is_acl_enabled QuicksightKnowledgeBase#is_acl_enabled}.

---

### QuicksightKnowledgeBaseConfig <a name="QuicksightKnowledgeBaseConfig" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aws_account_id: str,
  data_source_arn: str,
  knowledge_base_configuration: QuicksightKnowledgeBaseKnowledgeBaseConfiguration,
  knowledge_base_id: str,
  name: str,
  access_control_configuration: QuicksightKnowledgeBaseAccessControlConfiguration = None,
  description: str = None,
  is_email_notification_opted_for_ingestion_failures: bool | IResolvable = None,
  media_extraction_configuration: QuicksightKnowledgeBaseMediaExtractionConfiguration = None,
  permissions: IResolvable | typing.List[QuicksightKnowledgeBasePermissions] = None,
  primary_owner_arn: str = None,
  tags: IResolvable | typing.List[QuicksightKnowledgeBaseTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#aws_account_id QuicksightKnowledgeBase#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.dataSourceArn">data_source_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#data_source_arn QuicksightKnowledgeBase#data_source_arn}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.knowledgeBaseConfiguration">knowledge_base_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#knowledge_base_configuration QuicksightKnowledgeBase#knowledge_base_configuration}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#knowledge_base_id QuicksightKnowledgeBase#knowledge_base_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#name QuicksightKnowledgeBase#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.accessControlConfiguration">access_control_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration">QuicksightKnowledgeBaseAccessControlConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#access_control_configuration QuicksightKnowledgeBase#access_control_configuration}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#description QuicksightKnowledgeBase#description}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.isEmailNotificationOptedForIngestionFailures">is_email_notification_opted_for_ingestion_failures</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#is_email_notification_opted_for_ingestion_failures QuicksightKnowledgeBase#is_email_notification_opted_for_ingestion_failures}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.mediaExtractionConfiguration">media_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#media_extraction_configuration QuicksightKnowledgeBase#media_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.permissions">permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#permissions QuicksightKnowledgeBase#permissions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.primaryOwnerArn">primary_owner_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#primary_owner_arn QuicksightKnowledgeBase#primary_owner_arn}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#tags QuicksightKnowledgeBase#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#aws_account_id QuicksightKnowledgeBase#aws_account_id}.

---

##### `data_source_arn`<sup>Required</sup> <a name="data_source_arn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.dataSourceArn"></a>

```python
data_source_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#data_source_arn QuicksightKnowledgeBase#data_source_arn}.

---

##### `knowledge_base_configuration`<sup>Required</sup> <a name="knowledge_base_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.knowledgeBaseConfiguration"></a>

```python
knowledge_base_configuration: QuicksightKnowledgeBaseKnowledgeBaseConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#knowledge_base_configuration QuicksightKnowledgeBase#knowledge_base_configuration}.

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.knowledgeBaseId"></a>

```python
knowledge_base_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#knowledge_base_id QuicksightKnowledgeBase#knowledge_base_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#name QuicksightKnowledgeBase#name}.

---

##### `access_control_configuration`<sup>Optional</sup> <a name="access_control_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.accessControlConfiguration"></a>

```python
access_control_configuration: QuicksightKnowledgeBaseAccessControlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration">QuicksightKnowledgeBaseAccessControlConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#access_control_configuration QuicksightKnowledgeBase#access_control_configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#description QuicksightKnowledgeBase#description}.

---

##### `is_email_notification_opted_for_ingestion_failures`<sup>Optional</sup> <a name="is_email_notification_opted_for_ingestion_failures" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.isEmailNotificationOptedForIngestionFailures"></a>

```python
is_email_notification_opted_for_ingestion_failures: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#is_email_notification_opted_for_ingestion_failures QuicksightKnowledgeBase#is_email_notification_opted_for_ingestion_failures}.

---

##### `media_extraction_configuration`<sup>Optional</sup> <a name="media_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.mediaExtractionConfiguration"></a>

```python
media_extraction_configuration: QuicksightKnowledgeBaseMediaExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#media_extraction_configuration QuicksightKnowledgeBase#media_extraction_configuration}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.permissions"></a>

```python
permissions: IResolvable | typing.List[QuicksightKnowledgeBasePermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#permissions QuicksightKnowledgeBase#permissions}.

---

##### `primary_owner_arn`<sup>Optional</sup> <a name="primary_owner_arn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.primaryOwnerArn"></a>

```python
primary_owner_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#primary_owner_arn QuicksightKnowledgeBase#primary_owner_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[QuicksightKnowledgeBaseTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#tags QuicksightKnowledgeBase#tags}.

---

### QuicksightKnowledgeBaseKnowledgeBaseConfiguration <a name="QuicksightKnowledgeBaseKnowledgeBaseConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration(
  template_configuration: QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration.property.templateConfiguration">template_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#template_configuration QuicksightKnowledgeBase#template_configuration}. |

---

##### `template_configuration`<sup>Optional</sup> <a name="template_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration.property.templateConfiguration"></a>

```python
template_configuration: QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#template_configuration QuicksightKnowledgeBase#template_configuration}.

---

### QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration <a name="QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration(
  template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration.property.template">template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#template QuicksightKnowledgeBase#template}. |

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration.property.template"></a>

```python
template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#template QuicksightKnowledgeBase#template}.

---

### QuicksightKnowledgeBaseMediaExtractionConfiguration <a name="QuicksightKnowledgeBaseMediaExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration(
  audio_extraction_configuration: QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration = None,
  image_extraction_configuration: QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration = None,
  video_extraction_configuration: QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.property.audioExtractionConfiguration">audio_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#audio_extraction_configuration QuicksightKnowledgeBase#audio_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.property.imageExtractionConfiguration">image_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#image_extraction_configuration QuicksightKnowledgeBase#image_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.property.videoExtractionConfiguration">video_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#video_extraction_configuration QuicksightKnowledgeBase#video_extraction_configuration}. |

---

##### `audio_extraction_configuration`<sup>Optional</sup> <a name="audio_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.property.audioExtractionConfiguration"></a>

```python
audio_extraction_configuration: QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#audio_extraction_configuration QuicksightKnowledgeBase#audio_extraction_configuration}.

---

##### `image_extraction_configuration`<sup>Optional</sup> <a name="image_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.property.imageExtractionConfiguration"></a>

```python
image_extraction_configuration: QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#image_extraction_configuration QuicksightKnowledgeBase#image_extraction_configuration}.

---

##### `video_extraction_configuration`<sup>Optional</sup> <a name="video_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.property.videoExtractionConfiguration"></a>

```python
video_extraction_configuration: QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#video_extraction_configuration QuicksightKnowledgeBase#video_extraction_configuration}.

---

### QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration(
  audio_extraction_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration.property.audioExtractionStatus">audio_extraction_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#audio_extraction_status QuicksightKnowledgeBase#audio_extraction_status}. |

---

##### `audio_extraction_status`<sup>Optional</sup> <a name="audio_extraction_status" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration.property.audioExtractionStatus"></a>

```python
audio_extraction_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#audio_extraction_status QuicksightKnowledgeBase#audio_extraction_status}.

---

### QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration(
  image_extraction_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration.property.imageExtractionStatus">image_extraction_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#image_extraction_status QuicksightKnowledgeBase#image_extraction_status}. |

---

##### `image_extraction_status`<sup>Optional</sup> <a name="image_extraction_status" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration.property.imageExtractionStatus"></a>

```python
image_extraction_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#image_extraction_status QuicksightKnowledgeBase#image_extraction_status}.

---

### QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration(
  video_extraction_status: str = None,
  video_extraction_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration.property.videoExtractionStatus">video_extraction_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#video_extraction_status QuicksightKnowledgeBase#video_extraction_status}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration.property.videoExtractionType">video_extraction_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#video_extraction_type QuicksightKnowledgeBase#video_extraction_type}. |

---

##### `video_extraction_status`<sup>Optional</sup> <a name="video_extraction_status" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration.property.videoExtractionStatus"></a>

```python
video_extraction_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#video_extraction_status QuicksightKnowledgeBase#video_extraction_status}.

---

##### `video_extraction_type`<sup>Optional</sup> <a name="video_extraction_type" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration.property.videoExtractionType"></a>

```python
video_extraction_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#video_extraction_type QuicksightKnowledgeBase#video_extraction_type}.

---

### QuicksightKnowledgeBasePermissions <a name="QuicksightKnowledgeBasePermissions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions(
  actions: typing.List[str] = None,
  principal: str = None,
  resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.property.actions">actions</a></code> | <code>typing.List[str]</code> | <p>The IAM action to grant or revoke permissions on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.property.principal">principal</a></code> | <code>str</code> | <p>The Amazon Resource Name (ARN) of the principal. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.property.resource">resource</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#resource QuicksightKnowledgeBase#resource}. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

<p>The IAM action to grant or revoke permissions on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#actions QuicksightKnowledgeBase#actions}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.property.principal"></a>

```python
principal: str
```

- *Type:* str

<p>The Amazon Resource Name (ARN) of the principal.

This can be one of the
following:</p>
<ul>
<li>
<p>The ARN of an Amazon Quick user or group associated with a data source or dataset. (This is common.)</p>
</li>
<li>
<p>The ARN of an Amazon Quick user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
</li>
<li>
<p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
(This is less common.) </p>
</li>
</ul>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#principal QuicksightKnowledgeBase#principal}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.property.resource"></a>

```python
resource: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#resource QuicksightKnowledgeBase#resource}.

---

### QuicksightKnowledgeBaseTags <a name="QuicksightKnowledgeBaseTags" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBaseTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags.property.key">key</a></code> | <code>str</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags.property.value">value</a></code> | <code>str</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags.property.key"></a>

```python
key: str
```

- *Type:* str

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#key QuicksightKnowledgeBase#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags.property.value"></a>

```python
value: str
```

- *Type:* str

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#value QuicksightKnowledgeBase#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightKnowledgeBaseAccessControlConfigurationOutputReference <a name="QuicksightKnowledgeBaseAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resetIsAclEnabled">reset_is_acl_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_acl_enabled` <a name="reset_is_acl_enabled" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resetIsAclEnabled"></a>

```python
def reset_is_acl_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.isAclEnabledInput">is_acl_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.isAclEnabled">is_acl_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration">QuicksightKnowledgeBaseAccessControlConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_acl_enabled_input`<sup>Optional</sup> <a name="is_acl_enabled_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.isAclEnabledInput"></a>

```python
is_acl_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_acl_enabled`<sup>Required</sup> <a name="is_acl_enabled" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.isAclEnabled"></a>

```python
is_acl_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightKnowledgeBaseAccessControlConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration">QuicksightKnowledgeBaseAccessControlConfiguration</a>

---


### QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference <a name="QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.putTemplateConfiguration">put_template_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resetTemplateConfiguration">reset_template_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_template_configuration` <a name="put_template_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.putTemplateConfiguration"></a>

```python
def put_template_configuration(
  template: str = None
) -> None
```

###### `template`<sup>Optional</sup> <a name="template" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.putTemplateConfiguration.parameter.template"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#template QuicksightKnowledgeBase#template}.

---

##### `reset_template_configuration` <a name="reset_template_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resetTemplateConfiguration"></a>

```python
def reset_template_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.templateConfiguration">template_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.templateConfigurationInput">template_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `template_configuration`<sup>Required</sup> <a name="template_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.templateConfiguration"></a>

```python
template_configuration: QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference</a>

---

##### `template_configuration_input`<sup>Optional</sup> <a name="template_configuration_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.templateConfigurationInput"></a>

```python
template_configuration_input: IResolvable | QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightKnowledgeBaseKnowledgeBaseConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfiguration</a>

---


### QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference <a name="QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resetTemplate">reset_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_template` <a name="reset_template" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resetTemplate"></a>

```python
def reset_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.templateInput">template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.template">template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.templateInput"></a>

```python
template_input: str
```

- *Type:* str

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.template"></a>

```python
template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a>

---


### QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resetAudioExtractionStatus">reset_audio_extraction_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audio_extraction_status` <a name="reset_audio_extraction_status" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resetAudioExtractionStatus"></a>

```python
def reset_audio_extraction_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatusInput">audio_extraction_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus">audio_extraction_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_extraction_status_input`<sup>Optional</sup> <a name="audio_extraction_status_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatusInput"></a>

```python
audio_extraction_status_input: str
```

- *Type:* str

---

##### `audio_extraction_status`<sup>Required</sup> <a name="audio_extraction_status" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus"></a>

```python
audio_extraction_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a>

---


### QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resetImageExtractionStatus">reset_image_extraction_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image_extraction_status` <a name="reset_image_extraction_status" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resetImageExtractionStatus"></a>

```python
def reset_image_extraction_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatusInput">image_extraction_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus">image_extraction_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_extraction_status_input`<sup>Optional</sup> <a name="image_extraction_status_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatusInput"></a>

```python
image_extraction_status_input: str
```

- *Type:* str

---

##### `image_extraction_status`<sup>Required</sup> <a name="image_extraction_status" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus"></a>

```python
image_extraction_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a>

---


### QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putAudioExtractionConfiguration">put_audio_extraction_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putImageExtractionConfiguration">put_image_extraction_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration">put_video_extraction_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resetAudioExtractionConfiguration">reset_audio_extraction_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resetImageExtractionConfiguration">reset_image_extraction_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resetVideoExtractionConfiguration">reset_video_extraction_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audio_extraction_configuration` <a name="put_audio_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putAudioExtractionConfiguration"></a>

```python
def put_audio_extraction_configuration(
  audio_extraction_status: str = None
) -> None
```

###### `audio_extraction_status`<sup>Optional</sup> <a name="audio_extraction_status" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putAudioExtractionConfiguration.parameter.audioExtractionStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#audio_extraction_status QuicksightKnowledgeBase#audio_extraction_status}.

---

##### `put_image_extraction_configuration` <a name="put_image_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putImageExtractionConfiguration"></a>

```python
def put_image_extraction_configuration(
  image_extraction_status: str = None
) -> None
```

###### `image_extraction_status`<sup>Optional</sup> <a name="image_extraction_status" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putImageExtractionConfiguration.parameter.imageExtractionStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#image_extraction_status QuicksightKnowledgeBase#image_extraction_status}.

---

##### `put_video_extraction_configuration` <a name="put_video_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration"></a>

```python
def put_video_extraction_configuration(
  video_extraction_status: str = None,
  video_extraction_type: str = None
) -> None
```

###### `video_extraction_status`<sup>Optional</sup> <a name="video_extraction_status" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration.parameter.videoExtractionStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#video_extraction_status QuicksightKnowledgeBase#video_extraction_status}.

---

###### `video_extraction_type`<sup>Optional</sup> <a name="video_extraction_type" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration.parameter.videoExtractionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_knowledge_base#video_extraction_type QuicksightKnowledgeBase#video_extraction_type}.

---

##### `reset_audio_extraction_configuration` <a name="reset_audio_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resetAudioExtractionConfiguration"></a>

```python
def reset_audio_extraction_configuration() -> None
```

##### `reset_image_extraction_configuration` <a name="reset_image_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resetImageExtractionConfiguration"></a>

```python
def reset_image_extraction_configuration() -> None
```

##### `reset_video_extraction_configuration` <a name="reset_video_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resetVideoExtractionConfiguration"></a>

```python
def reset_video_extraction_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration">audio_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration">image_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration">video_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.audioExtractionConfigurationInput">audio_extraction_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.imageExtractionConfigurationInput">image_extraction_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.videoExtractionConfigurationInput">video_extraction_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_extraction_configuration`<sup>Required</sup> <a name="audio_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration"></a>

```python
audio_extraction_configuration: QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a>

---

##### `image_extraction_configuration`<sup>Required</sup> <a name="image_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration"></a>

```python
image_extraction_configuration: QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a>

---

##### `video_extraction_configuration`<sup>Required</sup> <a name="video_extraction_configuration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration"></a>

```python
video_extraction_configuration: QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a>

---

##### `audio_extraction_configuration_input`<sup>Optional</sup> <a name="audio_extraction_configuration_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.audioExtractionConfigurationInput"></a>

```python
audio_extraction_configuration_input: IResolvable | QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a>

---

##### `image_extraction_configuration_input`<sup>Optional</sup> <a name="image_extraction_configuration_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.imageExtractionConfigurationInput"></a>

```python
image_extraction_configuration_input: IResolvable | QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a>

---

##### `video_extraction_configuration_input`<sup>Optional</sup> <a name="video_extraction_configuration_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.videoExtractionConfigurationInput"></a>

```python
video_extraction_configuration_input: IResolvable | QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightKnowledgeBaseMediaExtractionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfiguration</a>

---


### QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resetVideoExtractionStatus">reset_video_extraction_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resetVideoExtractionType">reset_video_extraction_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_video_extraction_status` <a name="reset_video_extraction_status" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resetVideoExtractionStatus"></a>

```python
def reset_video_extraction_status() -> None
```

##### `reset_video_extraction_type` <a name="reset_video_extraction_type" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resetVideoExtractionType"></a>

```python
def reset_video_extraction_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatusInput">video_extraction_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionTypeInput">video_extraction_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus">video_extraction_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionType">video_extraction_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `video_extraction_status_input`<sup>Optional</sup> <a name="video_extraction_status_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatusInput"></a>

```python
video_extraction_status_input: str
```

- *Type:* str

---

##### `video_extraction_type_input`<sup>Optional</sup> <a name="video_extraction_type_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionTypeInput"></a>

```python
video_extraction_type_input: str
```

- *Type:* str

---

##### `video_extraction_status`<sup>Required</sup> <a name="video_extraction_status" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus"></a>

```python
video_extraction_status: str
```

- *Type:* str

---

##### `video_extraction_type`<sup>Required</sup> <a name="video_extraction_type" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionType"></a>

```python
video_extraction_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a>

---


### QuicksightKnowledgeBasePermissionsList <a name="QuicksightKnowledgeBasePermissionsList" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightKnowledgeBasePermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightKnowledgeBasePermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a>]

---


### QuicksightKnowledgeBasePermissionsOutputReference <a name="QuicksightKnowledgeBasePermissionsOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resetPrincipal">reset_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resetResource">reset_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_actions` <a name="reset_actions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_principal` <a name="reset_principal" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resetPrincipal"></a>

```python
def reset_principal() -> None
```

##### `reset_resource` <a name="reset_resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightKnowledgeBasePermissions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a>

---


### QuicksightKnowledgeBaseTagsList <a name="QuicksightKnowledgeBaseTagsList" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightKnowledgeBaseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightKnowledgeBaseTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a>]

---


### QuicksightKnowledgeBaseTagsOutputReference <a name="QuicksightKnowledgeBaseTagsOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_knowledge_base

quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightKnowledgeBaseTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a>

---



