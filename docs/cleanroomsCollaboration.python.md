# `cleanroomsCollaboration` Submodule <a name="`cleanroomsCollaboration` Submodule" id="@cdktn/provider-awscc.cleanroomsCollaboration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsCollaboration <a name="CleanroomsCollaboration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration awscc_cleanrooms_collaboration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaboration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  creator_display_name: str,
  description: str,
  name: str,
  query_log_status: str,
  allowed_result_regions: typing.List[str] = None,
  analytics_engine: str = None,
  auto_approved_change_types: typing.List[str] = None,
  creator_member_abilities: typing.List[str] = None,
  creator_ml_member_abilities: CleanroomsCollaborationCreatorMlMemberAbilities = None,
  creator_payment_configuration: CleanroomsCollaborationCreatorPaymentConfiguration = None,
  data_encryption_metadata: CleanroomsCollaborationDataEncryptionMetadata = None,
  is_metrics_enabled: bool | IResolvable = None,
  job_log_status: str = None,
  members: IResolvable | typing.List[CleanroomsCollaborationMembers] = None,
  tags: IResolvable | typing.List[CleanroomsCollaborationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.creatorDisplayName">creator_display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.queryLogStatus">query_log_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.allowedResultRegions">allowed_result_regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#allowed_result_regions CleanroomsCollaboration#allowed_result_regions}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.analyticsEngine">analytics_engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#analytics_engine CleanroomsCollaboration#analytics_engine}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.autoApprovedChangeTypes">auto_approved_change_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#auto_approved_change_types CleanroomsCollaboration#auto_approved_change_types}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.creatorMemberAbilities">creator_member_abilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.creatorMlMemberAbilities">creator_ml_member_abilities</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities">CleanroomsCollaborationCreatorMlMemberAbilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#creator_ml_member_abilities CleanroomsCollaboration#creator_ml_member_abilities}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.creatorPaymentConfiguration">creator_payment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration">CleanroomsCollaborationCreatorPaymentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#creator_payment_configuration CleanroomsCollaboration#creator_payment_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.dataEncryptionMetadata">data_encryption_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#data_encryption_metadata CleanroomsCollaboration#data_encryption_metadata}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.isMetricsEnabled">is_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_metrics_enabled CleanroomsCollaboration#is_metrics_enabled}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.jobLogStatus">job_log_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#job_log_status CleanroomsCollaboration#job_log_status}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.members">members</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#members CleanroomsCollaboration#members}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creator_display_name`<sup>Required</sup> <a name="creator_display_name" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.creatorDisplayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}.

---

##### `query_log_status`<sup>Required</sup> <a name="query_log_status" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.queryLogStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}.

---

##### `allowed_result_regions`<sup>Optional</sup> <a name="allowed_result_regions" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.allowedResultRegions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#allowed_result_regions CleanroomsCollaboration#allowed_result_regions}.

---

##### `analytics_engine`<sup>Optional</sup> <a name="analytics_engine" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.analyticsEngine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#analytics_engine CleanroomsCollaboration#analytics_engine}.

---

##### `auto_approved_change_types`<sup>Optional</sup> <a name="auto_approved_change_types" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.autoApprovedChangeTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#auto_approved_change_types CleanroomsCollaboration#auto_approved_change_types}.

---

##### `creator_member_abilities`<sup>Optional</sup> <a name="creator_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.creatorMemberAbilities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}.

---

##### `creator_ml_member_abilities`<sup>Optional</sup> <a name="creator_ml_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.creatorMlMemberAbilities"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities">CleanroomsCollaborationCreatorMlMemberAbilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#creator_ml_member_abilities CleanroomsCollaboration#creator_ml_member_abilities}.

---

##### `creator_payment_configuration`<sup>Optional</sup> <a name="creator_payment_configuration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.creatorPaymentConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration">CleanroomsCollaborationCreatorPaymentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#creator_payment_configuration CleanroomsCollaboration#creator_payment_configuration}.

---

##### `data_encryption_metadata`<sup>Optional</sup> <a name="data_encryption_metadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.dataEncryptionMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#data_encryption_metadata CleanroomsCollaboration#data_encryption_metadata}.

---

##### `is_metrics_enabled`<sup>Optional</sup> <a name="is_metrics_enabled" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.isMetricsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_metrics_enabled CleanroomsCollaboration#is_metrics_enabled}.

---

##### `job_log_status`<sup>Optional</sup> <a name="job_log_status" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.jobLogStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#job_log_status CleanroomsCollaboration#job_log_status}.

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.members"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#members CleanroomsCollaboration#members}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a>]

An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#tags CleanroomsCollaboration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorMlMemberAbilities">put_creator_ml_member_abilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorPaymentConfiguration">put_creator_payment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata">put_data_encryption_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putMembers">put_members</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetAllowedResultRegions">reset_allowed_result_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetAnalyticsEngine">reset_analytics_engine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetAutoApprovedChangeTypes">reset_auto_approved_change_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetCreatorMemberAbilities">reset_creator_member_abilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetCreatorMlMemberAbilities">reset_creator_ml_member_abilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetCreatorPaymentConfiguration">reset_creator_payment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetDataEncryptionMetadata">reset_data_encryption_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetIsMetricsEnabled">reset_is_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetJobLogStatus">reset_job_log_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetMembers">reset_members</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_creator_ml_member_abilities` <a name="put_creator_ml_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorMlMemberAbilities"></a>

```python
def put_creator_ml_member_abilities(
  custom_ml_member_abilities: typing.List[str] = None
) -> None
```

###### `custom_ml_member_abilities`<sup>Optional</sup> <a name="custom_ml_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorMlMemberAbilities.parameter.customMlMemberAbilities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#custom_ml_member_abilities CleanroomsCollaboration#custom_ml_member_abilities}.

---

##### `put_creator_payment_configuration` <a name="put_creator_payment_configuration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorPaymentConfiguration"></a>

```python
def put_creator_payment_configuration(
  job_compute: CleanroomsCollaborationCreatorPaymentConfigurationJobCompute = None,
  machine_learning: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning = None,
  query_compute: CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute = None
) -> None
```

###### `job_compute`<sup>Optional</sup> <a name="job_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorPaymentConfiguration.parameter.jobCompute"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute">CleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#job_compute CleanroomsCollaboration#job_compute}.

---

###### `machine_learning`<sup>Optional</sup> <a name="machine_learning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorPaymentConfiguration.parameter.machineLearning"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#machine_learning CleanroomsCollaboration#machine_learning}.

---

###### `query_compute`<sup>Optional</sup> <a name="query_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorPaymentConfiguration.parameter.queryCompute"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#query_compute CleanroomsCollaboration#query_compute}.

---

##### `put_data_encryption_metadata` <a name="put_data_encryption_metadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata"></a>

```python
def put_data_encryption_metadata(
  allow_cleartext: bool | IResolvable = None,
  allow_duplicates: bool | IResolvable = None,
  allow_joins_on_columns_with_different_names: bool | IResolvable = None,
  preserve_nulls: bool | IResolvable = None
) -> None
```

###### `allow_cleartext`<sup>Optional</sup> <a name="allow_cleartext" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata.parameter.allowCleartext"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#allow_cleartext CleanroomsCollaboration#allow_cleartext}.

---

###### `allow_duplicates`<sup>Optional</sup> <a name="allow_duplicates" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata.parameter.allowDuplicates"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#allow_duplicates CleanroomsCollaboration#allow_duplicates}.

---

###### `allow_joins_on_columns_with_different_names`<sup>Optional</sup> <a name="allow_joins_on_columns_with_different_names" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata.parameter.allowJoinsOnColumnsWithDifferentNames"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#allow_joins_on_columns_with_different_names CleanroomsCollaboration#allow_joins_on_columns_with_different_names}.

---

###### `preserve_nulls`<sup>Optional</sup> <a name="preserve_nulls" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata.parameter.preserveNulls"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#preserve_nulls CleanroomsCollaboration#preserve_nulls}.

---

##### `put_members` <a name="put_members" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putMembers"></a>

```python
def put_members(
  value: IResolvable | typing.List[CleanroomsCollaborationMembers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putMembers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CleanroomsCollaborationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a>]

---

##### `reset_allowed_result_regions` <a name="reset_allowed_result_regions" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetAllowedResultRegions"></a>

```python
def reset_allowed_result_regions() -> None
```

##### `reset_analytics_engine` <a name="reset_analytics_engine" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetAnalyticsEngine"></a>

```python
def reset_analytics_engine() -> None
```

##### `reset_auto_approved_change_types` <a name="reset_auto_approved_change_types" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetAutoApprovedChangeTypes"></a>

```python
def reset_auto_approved_change_types() -> None
```

##### `reset_creator_member_abilities` <a name="reset_creator_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetCreatorMemberAbilities"></a>

```python
def reset_creator_member_abilities() -> None
```

##### `reset_creator_ml_member_abilities` <a name="reset_creator_ml_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetCreatorMlMemberAbilities"></a>

```python
def reset_creator_ml_member_abilities() -> None
```

##### `reset_creator_payment_configuration` <a name="reset_creator_payment_configuration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetCreatorPaymentConfiguration"></a>

```python
def reset_creator_payment_configuration() -> None
```

##### `reset_data_encryption_metadata` <a name="reset_data_encryption_metadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetDataEncryptionMetadata"></a>

```python
def reset_data_encryption_metadata() -> None
```

##### `reset_is_metrics_enabled` <a name="reset_is_metrics_enabled" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetIsMetricsEnabled"></a>

```python
def reset_is_metrics_enabled() -> None
```

##### `reset_job_log_status` <a name="reset_job_log_status" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetJobLogStatus"></a>

```python
def reset_job_log_status() -> None
```

##### `reset_members` <a name="reset_members" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetMembers"></a>

```python
def reset_members() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CleanroomsCollaboration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isConstruct"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaboration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaboration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaboration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaboration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CleanroomsCollaboration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CleanroomsCollaboration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CleanroomsCollaboration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsCollaboration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.collaborationIdentifier">collaboration_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMlMemberAbilities">creator_ml_member_abilities</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference">CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorPaymentConfiguration">creator_payment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadata">data_encryption_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference">CleanroomsCollaborationDataEncryptionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.members">members</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList">CleanroomsCollaborationMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList">CleanroomsCollaborationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.allowedResultRegionsInput">allowed_result_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.analyticsEngineInput">analytics_engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.autoApprovedChangeTypesInput">auto_approved_change_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayNameInput">creator_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilitiesInput">creator_member_abilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMlMemberAbilitiesInput">creator_ml_member_abilities_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities">CleanroomsCollaborationCreatorMlMemberAbilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorPaymentConfigurationInput">creator_payment_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration">CleanroomsCollaborationCreatorPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadataInput">data_encryption_metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.isMetricsEnabledInput">is_metrics_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.jobLogStatusInput">job_log_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.membersInput">members_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatusInput">query_log_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.allowedResultRegions">allowed_result_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.analyticsEngine">analytics_engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.autoApprovedChangeTypes">auto_approved_change_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayName">creator_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilities">creator_member_abilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.isMetricsEnabled">is_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.jobLogStatus">job_log_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatus">query_log_status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `collaboration_identifier`<sup>Required</sup> <a name="collaboration_identifier" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.collaborationIdentifier"></a>

```python
collaboration_identifier: str
```

- *Type:* str

---

##### `creator_ml_member_abilities`<sup>Required</sup> <a name="creator_ml_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMlMemberAbilities"></a>

```python
creator_ml_member_abilities: CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference">CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference</a>

---

##### `creator_payment_configuration`<sup>Required</sup> <a name="creator_payment_configuration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorPaymentConfiguration"></a>

```python
creator_payment_configuration: CleanroomsCollaborationCreatorPaymentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationOutputReference</a>

---

##### `data_encryption_metadata`<sup>Required</sup> <a name="data_encryption_metadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadata"></a>

```python
data_encryption_metadata: CleanroomsCollaborationDataEncryptionMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference">CleanroomsCollaborationDataEncryptionMetadataOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.members"></a>

```python
members: CleanroomsCollaborationMembersList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList">CleanroomsCollaborationMembersList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.tags"></a>

```python
tags: CleanroomsCollaborationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList">CleanroomsCollaborationTagsList</a>

---

##### `allowed_result_regions_input`<sup>Optional</sup> <a name="allowed_result_regions_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.allowedResultRegionsInput"></a>

```python
allowed_result_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `analytics_engine_input`<sup>Optional</sup> <a name="analytics_engine_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.analyticsEngineInput"></a>

```python
analytics_engine_input: str
```

- *Type:* str

---

##### `auto_approved_change_types_input`<sup>Optional</sup> <a name="auto_approved_change_types_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.autoApprovedChangeTypesInput"></a>

```python
auto_approved_change_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `creator_display_name_input`<sup>Optional</sup> <a name="creator_display_name_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayNameInput"></a>

```python
creator_display_name_input: str
```

- *Type:* str

---

##### `creator_member_abilities_input`<sup>Optional</sup> <a name="creator_member_abilities_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilitiesInput"></a>

```python
creator_member_abilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `creator_ml_member_abilities_input`<sup>Optional</sup> <a name="creator_ml_member_abilities_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMlMemberAbilitiesInput"></a>

```python
creator_ml_member_abilities_input: IResolvable | CleanroomsCollaborationCreatorMlMemberAbilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities">CleanroomsCollaborationCreatorMlMemberAbilities</a>

---

##### `creator_payment_configuration_input`<sup>Optional</sup> <a name="creator_payment_configuration_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorPaymentConfigurationInput"></a>

```python
creator_payment_configuration_input: IResolvable | CleanroomsCollaborationCreatorPaymentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration">CleanroomsCollaborationCreatorPaymentConfiguration</a>

---

##### `data_encryption_metadata_input`<sup>Optional</sup> <a name="data_encryption_metadata_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadataInput"></a>

```python
data_encryption_metadata_input: IResolvable | CleanroomsCollaborationDataEncryptionMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `is_metrics_enabled_input`<sup>Optional</sup> <a name="is_metrics_enabled_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.isMetricsEnabledInput"></a>

```python
is_metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `job_log_status_input`<sup>Optional</sup> <a name="job_log_status_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.jobLogStatusInput"></a>

```python
job_log_status_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.membersInput"></a>

```python
members_input: IResolvable | typing.List[CleanroomsCollaborationMembers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_log_status_input`<sup>Optional</sup> <a name="query_log_status_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatusInput"></a>

```python
query_log_status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CleanroomsCollaborationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a>]

---

##### `allowed_result_regions`<sup>Required</sup> <a name="allowed_result_regions" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.allowedResultRegions"></a>

```python
allowed_result_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `analytics_engine`<sup>Required</sup> <a name="analytics_engine" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.analyticsEngine"></a>

```python
analytics_engine: str
```

- *Type:* str

---

##### `auto_approved_change_types`<sup>Required</sup> <a name="auto_approved_change_types" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.autoApprovedChangeTypes"></a>

```python
auto_approved_change_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `creator_display_name`<sup>Required</sup> <a name="creator_display_name" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayName"></a>

```python
creator_display_name: str
```

- *Type:* str

---

##### `creator_member_abilities`<sup>Required</sup> <a name="creator_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilities"></a>

```python
creator_member_abilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_metrics_enabled`<sup>Required</sup> <a name="is_metrics_enabled" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.isMetricsEnabled"></a>

```python
is_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `job_log_status`<sup>Required</sup> <a name="job_log_status" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.jobLogStatus"></a>

```python
job_log_status: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query_log_status`<sup>Required</sup> <a name="query_log_status" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatus"></a>

```python
query_log_status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsCollaborationConfig <a name="CleanroomsCollaborationConfig" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  creator_display_name: str,
  description: str,
  name: str,
  query_log_status: str,
  allowed_result_regions: typing.List[str] = None,
  analytics_engine: str = None,
  auto_approved_change_types: typing.List[str] = None,
  creator_member_abilities: typing.List[str] = None,
  creator_ml_member_abilities: CleanroomsCollaborationCreatorMlMemberAbilities = None,
  creator_payment_configuration: CleanroomsCollaborationCreatorPaymentConfiguration = None,
  data_encryption_metadata: CleanroomsCollaborationDataEncryptionMetadata = None,
  is_metrics_enabled: bool | IResolvable = None,
  job_log_status: str = None,
  members: IResolvable | typing.List[CleanroomsCollaborationMembers] = None,
  tags: IResolvable | typing.List[CleanroomsCollaborationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorDisplayName">creator_display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.queryLogStatus">query_log_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.allowedResultRegions">allowed_result_regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#allowed_result_regions CleanroomsCollaboration#allowed_result_regions}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.analyticsEngine">analytics_engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#analytics_engine CleanroomsCollaboration#analytics_engine}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.autoApprovedChangeTypes">auto_approved_change_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#auto_approved_change_types CleanroomsCollaboration#auto_approved_change_types}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorMemberAbilities">creator_member_abilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorMlMemberAbilities">creator_ml_member_abilities</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities">CleanroomsCollaborationCreatorMlMemberAbilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#creator_ml_member_abilities CleanroomsCollaboration#creator_ml_member_abilities}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorPaymentConfiguration">creator_payment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration">CleanroomsCollaborationCreatorPaymentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#creator_payment_configuration CleanroomsCollaboration#creator_payment_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dataEncryptionMetadata">data_encryption_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#data_encryption_metadata CleanroomsCollaboration#data_encryption_metadata}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.isMetricsEnabled">is_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_metrics_enabled CleanroomsCollaboration#is_metrics_enabled}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.jobLogStatus">job_log_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#job_log_status CleanroomsCollaboration#job_log_status}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.members">members</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#members CleanroomsCollaboration#members}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creator_display_name`<sup>Required</sup> <a name="creator_display_name" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorDisplayName"></a>

```python
creator_display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}.

---

##### `query_log_status`<sup>Required</sup> <a name="query_log_status" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.queryLogStatus"></a>

```python
query_log_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}.

---

##### `allowed_result_regions`<sup>Optional</sup> <a name="allowed_result_regions" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.allowedResultRegions"></a>

```python
allowed_result_regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#allowed_result_regions CleanroomsCollaboration#allowed_result_regions}.

---

##### `analytics_engine`<sup>Optional</sup> <a name="analytics_engine" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.analyticsEngine"></a>

```python
analytics_engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#analytics_engine CleanroomsCollaboration#analytics_engine}.

---

##### `auto_approved_change_types`<sup>Optional</sup> <a name="auto_approved_change_types" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.autoApprovedChangeTypes"></a>

```python
auto_approved_change_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#auto_approved_change_types CleanroomsCollaboration#auto_approved_change_types}.

---

##### `creator_member_abilities`<sup>Optional</sup> <a name="creator_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorMemberAbilities"></a>

```python
creator_member_abilities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}.

---

##### `creator_ml_member_abilities`<sup>Optional</sup> <a name="creator_ml_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorMlMemberAbilities"></a>

```python
creator_ml_member_abilities: CleanroomsCollaborationCreatorMlMemberAbilities
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities">CleanroomsCollaborationCreatorMlMemberAbilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#creator_ml_member_abilities CleanroomsCollaboration#creator_ml_member_abilities}.

---

##### `creator_payment_configuration`<sup>Optional</sup> <a name="creator_payment_configuration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorPaymentConfiguration"></a>

```python
creator_payment_configuration: CleanroomsCollaborationCreatorPaymentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration">CleanroomsCollaborationCreatorPaymentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#creator_payment_configuration CleanroomsCollaboration#creator_payment_configuration}.

---

##### `data_encryption_metadata`<sup>Optional</sup> <a name="data_encryption_metadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dataEncryptionMetadata"></a>

```python
data_encryption_metadata: CleanroomsCollaborationDataEncryptionMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#data_encryption_metadata CleanroomsCollaboration#data_encryption_metadata}.

---

##### `is_metrics_enabled`<sup>Optional</sup> <a name="is_metrics_enabled" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.isMetricsEnabled"></a>

```python
is_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_metrics_enabled CleanroomsCollaboration#is_metrics_enabled}.

---

##### `job_log_status`<sup>Optional</sup> <a name="job_log_status" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.jobLogStatus"></a>

```python
job_log_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#job_log_status CleanroomsCollaboration#job_log_status}.

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.members"></a>

```python
members: IResolvable | typing.List[CleanroomsCollaborationMembers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#members CleanroomsCollaboration#members}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CleanroomsCollaborationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a>]

An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#tags CleanroomsCollaboration#tags}

---

### CleanroomsCollaborationCreatorMlMemberAbilities <a name="CleanroomsCollaborationCreatorMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities(
  custom_ml_member_abilities: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities.property.customMlMemberAbilities">custom_ml_member_abilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#custom_ml_member_abilities CleanroomsCollaboration#custom_ml_member_abilities}. |

---

##### `custom_ml_member_abilities`<sup>Optional</sup> <a name="custom_ml_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities.property.customMlMemberAbilities"></a>

```python
custom_ml_member_abilities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#custom_ml_member_abilities CleanroomsCollaboration#custom_ml_member_abilities}.

---

### CleanroomsCollaborationCreatorPaymentConfiguration <a name="CleanroomsCollaborationCreatorPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration(
  job_compute: CleanroomsCollaborationCreatorPaymentConfigurationJobCompute = None,
  machine_learning: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning = None,
  query_compute: CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.property.jobCompute">job_compute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute">CleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#job_compute CleanroomsCollaboration#job_compute}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.property.machineLearning">machine_learning</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#machine_learning CleanroomsCollaboration#machine_learning}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.property.queryCompute">query_compute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#query_compute CleanroomsCollaboration#query_compute}. |

---

##### `job_compute`<sup>Optional</sup> <a name="job_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.property.jobCompute"></a>

```python
job_compute: CleanroomsCollaborationCreatorPaymentConfigurationJobCompute
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute">CleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#job_compute CleanroomsCollaboration#job_compute}.

---

##### `machine_learning`<sup>Optional</sup> <a name="machine_learning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.property.machineLearning"></a>

```python
machine_learning: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#machine_learning CleanroomsCollaboration#machine_learning}.

---

##### `query_compute`<sup>Optional</sup> <a name="query_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.property.queryCompute"></a>

```python
query_compute: CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#query_compute CleanroomsCollaboration#query_compute}.

---

### CleanroomsCollaborationCreatorPaymentConfigurationJobCompute <a name="CleanroomsCollaborationCreatorPaymentConfigurationJobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute(
  is_responsible: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning(
  model_inference: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference = None,
  model_training: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining = None,
  synthetic_data_generation: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.property.modelInference">model_inference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#model_inference CleanroomsCollaboration#model_inference}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.property.modelTraining">model_training</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#model_training CleanroomsCollaboration#model_training}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.property.syntheticDataGeneration">synthetic_data_generation</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#synthetic_data_generation CleanroomsCollaboration#synthetic_data_generation}. |

---

##### `model_inference`<sup>Optional</sup> <a name="model_inference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.property.modelInference"></a>

```python
model_inference: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#model_inference CleanroomsCollaboration#model_inference}.

---

##### `model_training`<sup>Optional</sup> <a name="model_training" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.property.modelTraining"></a>

```python
model_training: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#model_training CleanroomsCollaboration#model_training}.

---

##### `synthetic_data_generation`<sup>Optional</sup> <a name="synthetic_data_generation" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.property.syntheticDataGeneration"></a>

```python
synthetic_data_generation: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#synthetic_data_generation CleanroomsCollaboration#synthetic_data_generation}.

---

### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference(
  is_responsible: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining(
  is_responsible: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration(
  is_responsible: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute <a name="CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute(
  is_responsible: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationDataEncryptionMetadata <a name="CleanroomsCollaborationDataEncryptionMetadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata(
  allow_cleartext: bool | IResolvable = None,
  allow_duplicates: bool | IResolvable = None,
  allow_joins_on_columns_with_different_names: bool | IResolvable = None,
  preserve_nulls: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowCleartext">allow_cleartext</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#allow_cleartext CleanroomsCollaboration#allow_cleartext}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowDuplicates">allow_duplicates</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#allow_duplicates CleanroomsCollaboration#allow_duplicates}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowJoinsOnColumnsWithDifferentNames">allow_joins_on_columns_with_different_names</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#allow_joins_on_columns_with_different_names CleanroomsCollaboration#allow_joins_on_columns_with_different_names}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.preserveNulls">preserve_nulls</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#preserve_nulls CleanroomsCollaboration#preserve_nulls}. |

---

##### `allow_cleartext`<sup>Optional</sup> <a name="allow_cleartext" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowCleartext"></a>

```python
allow_cleartext: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#allow_cleartext CleanroomsCollaboration#allow_cleartext}.

---

##### `allow_duplicates`<sup>Optional</sup> <a name="allow_duplicates" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowDuplicates"></a>

```python
allow_duplicates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#allow_duplicates CleanroomsCollaboration#allow_duplicates}.

---

##### `allow_joins_on_columns_with_different_names`<sup>Optional</sup> <a name="allow_joins_on_columns_with_different_names" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowJoinsOnColumnsWithDifferentNames"></a>

```python
allow_joins_on_columns_with_different_names: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#allow_joins_on_columns_with_different_names CleanroomsCollaboration#allow_joins_on_columns_with_different_names}.

---

##### `preserve_nulls`<sup>Optional</sup> <a name="preserve_nulls" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.preserveNulls"></a>

```python
preserve_nulls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#preserve_nulls CleanroomsCollaboration#preserve_nulls}.

---

### CleanroomsCollaborationMembers <a name="CleanroomsCollaborationMembers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembers(
  account_id: str = None,
  display_name: str = None,
  member_abilities: typing.List[str] = None,
  ml_member_abilities: CleanroomsCollaborationMembersMlMemberAbilities = None,
  payment_configuration: CleanroomsCollaborationMembersPaymentConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#account_id CleanroomsCollaboration#account_id}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#display_name CleanroomsCollaboration#display_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.memberAbilities">member_abilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#member_abilities CleanroomsCollaboration#member_abilities}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.mlMemberAbilities">ml_member_abilities</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities">CleanroomsCollaborationMembersMlMemberAbilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#ml_member_abilities CleanroomsCollaboration#ml_member_abilities}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.paymentConfiguration">payment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration">CleanroomsCollaborationMembersPaymentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#payment_configuration CleanroomsCollaboration#payment_configuration}. |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#account_id CleanroomsCollaboration#account_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#display_name CleanroomsCollaboration#display_name}.

---

##### `member_abilities`<sup>Optional</sup> <a name="member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.memberAbilities"></a>

```python
member_abilities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#member_abilities CleanroomsCollaboration#member_abilities}.

---

##### `ml_member_abilities`<sup>Optional</sup> <a name="ml_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.mlMemberAbilities"></a>

```python
ml_member_abilities: CleanroomsCollaborationMembersMlMemberAbilities
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities">CleanroomsCollaborationMembersMlMemberAbilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#ml_member_abilities CleanroomsCollaboration#ml_member_abilities}.

---

##### `payment_configuration`<sup>Optional</sup> <a name="payment_configuration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.paymentConfiguration"></a>

```python
payment_configuration: CleanroomsCollaborationMembersPaymentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration">CleanroomsCollaborationMembersPaymentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#payment_configuration CleanroomsCollaboration#payment_configuration}.

---

### CleanroomsCollaborationMembersMlMemberAbilities <a name="CleanroomsCollaborationMembersMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities(
  custom_ml_member_abilities: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities.property.customMlMemberAbilities">custom_ml_member_abilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#custom_ml_member_abilities CleanroomsCollaboration#custom_ml_member_abilities}. |

---

##### `custom_ml_member_abilities`<sup>Optional</sup> <a name="custom_ml_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities.property.customMlMemberAbilities"></a>

```python
custom_ml_member_abilities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#custom_ml_member_abilities CleanroomsCollaboration#custom_ml_member_abilities}.

---

### CleanroomsCollaborationMembersPaymentConfiguration <a name="CleanroomsCollaborationMembersPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration(
  job_compute: CleanroomsCollaborationMembersPaymentConfigurationJobCompute = None,
  machine_learning: CleanroomsCollaborationMembersPaymentConfigurationMachineLearning = None,
  query_compute: CleanroomsCollaborationMembersPaymentConfigurationQueryCompute = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.property.jobCompute">job_compute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute">CleanroomsCollaborationMembersPaymentConfigurationJobCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#job_compute CleanroomsCollaboration#job_compute}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.property.machineLearning">machine_learning</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning">CleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#machine_learning CleanroomsCollaboration#machine_learning}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.property.queryCompute">query_compute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute">CleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#query_compute CleanroomsCollaboration#query_compute}. |

---

##### `job_compute`<sup>Optional</sup> <a name="job_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.property.jobCompute"></a>

```python
job_compute: CleanroomsCollaborationMembersPaymentConfigurationJobCompute
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute">CleanroomsCollaborationMembersPaymentConfigurationJobCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#job_compute CleanroomsCollaboration#job_compute}.

---

##### `machine_learning`<sup>Optional</sup> <a name="machine_learning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.property.machineLearning"></a>

```python
machine_learning: CleanroomsCollaborationMembersPaymentConfigurationMachineLearning
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning">CleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#machine_learning CleanroomsCollaboration#machine_learning}.

---

##### `query_compute`<sup>Optional</sup> <a name="query_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.property.queryCompute"></a>

```python
query_compute: CleanroomsCollaborationMembersPaymentConfigurationQueryCompute
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute">CleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#query_compute CleanroomsCollaboration#query_compute}.

---

### CleanroomsCollaborationMembersPaymentConfigurationJobCompute <a name="CleanroomsCollaborationMembersPaymentConfigurationJobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute(
  is_responsible: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationMembersPaymentConfigurationMachineLearning <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning(
  model_inference: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference = None,
  model_training: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining = None,
  synthetic_data_generation: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.property.modelInference">model_inference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#model_inference CleanroomsCollaboration#model_inference}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.property.modelTraining">model_training</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#model_training CleanroomsCollaboration#model_training}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.property.syntheticDataGeneration">synthetic_data_generation</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#synthetic_data_generation CleanroomsCollaboration#synthetic_data_generation}. |

---

##### `model_inference`<sup>Optional</sup> <a name="model_inference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.property.modelInference"></a>

```python
model_inference: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#model_inference CleanroomsCollaboration#model_inference}.

---

##### `model_training`<sup>Optional</sup> <a name="model_training" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.property.modelTraining"></a>

```python
model_training: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#model_training CleanroomsCollaboration#model_training}.

---

##### `synthetic_data_generation`<sup>Optional</sup> <a name="synthetic_data_generation" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.property.syntheticDataGeneration"></a>

```python
synthetic_data_generation: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#synthetic_data_generation CleanroomsCollaboration#synthetic_data_generation}.

---

### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference(
  is_responsible: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining(
  is_responsible: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration(
  is_responsible: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationMembersPaymentConfigurationQueryCompute <a name="CleanroomsCollaborationMembersPaymentConfigurationQueryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute(
  is_responsible: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationTags <a name="CleanroomsCollaborationTags" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#key CleanroomsCollaboration#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#value CleanroomsCollaboration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#key CleanroomsCollaboration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#value CleanroomsCollaboration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference <a name="CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.resetCustomMlMemberAbilities">reset_custom_ml_member_abilities</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_ml_member_abilities` <a name="reset_custom_ml_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.resetCustomMlMemberAbilities"></a>

```python
def reset_custom_ml_member_abilities() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.customMlMemberAbilitiesInput">custom_ml_member_abilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.customMlMemberAbilities">custom_ml_member_abilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities">CleanroomsCollaborationCreatorMlMemberAbilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_ml_member_abilities_input`<sup>Optional</sup> <a name="custom_ml_member_abilities_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.customMlMemberAbilitiesInput"></a>

```python
custom_ml_member_abilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_ml_member_abilities`<sup>Required</sup> <a name="custom_ml_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.customMlMemberAbilities"></a>

```python
custom_ml_member_abilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationCreatorMlMemberAbilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities">CleanroomsCollaborationCreatorMlMemberAbilities</a>

---


### CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.resetIsResponsible">reset_is_responsible</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_responsible` <a name="reset_is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.resetIsResponsible"></a>

```python
def reset_is_responsible() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.isResponsibleInput">is_responsible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute">CleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible_input`<sup>Optional</sup> <a name="is_responsible_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.isResponsibleInput"></a>

```python
is_responsible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationJobCompute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute">CleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a>

---


### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.resetIsResponsible">reset_is_responsible</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_responsible` <a name="reset_is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.resetIsResponsible"></a>

```python
def reset_is_responsible() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsibleInput">is_responsible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible_input`<sup>Optional</sup> <a name="is_responsible_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsibleInput"></a>

```python
is_responsible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a>

---


### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.resetIsResponsible">reset_is_responsible</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_responsible` <a name="reset_is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.resetIsResponsible"></a>

```python
def reset_is_responsible() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsibleInput">is_responsible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible_input`<sup>Optional</sup> <a name="is_responsible_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsibleInput"></a>

```python
is_responsible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a>

---


### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putModelInference">put_model_inference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putModelTraining">put_model_training</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration">put_synthetic_data_generation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resetModelInference">reset_model_inference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resetModelTraining">reset_model_training</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resetSyntheticDataGeneration">reset_synthetic_data_generation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_model_inference` <a name="put_model_inference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putModelInference"></a>

```python
def put_model_inference(
  is_responsible: bool | IResolvable = None
) -> None
```

###### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putModelInference.parameter.isResponsible"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

##### `put_model_training` <a name="put_model_training" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putModelTraining"></a>

```python
def put_model_training(
  is_responsible: bool | IResolvable = None
) -> None
```

###### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putModelTraining.parameter.isResponsible"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

##### `put_synthetic_data_generation` <a name="put_synthetic_data_generation" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration"></a>

```python
def put_synthetic_data_generation(
  is_responsible: bool | IResolvable = None
) -> None
```

###### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration.parameter.isResponsible"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

##### `reset_model_inference` <a name="reset_model_inference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resetModelInference"></a>

```python
def reset_model_inference() -> None
```

##### `reset_model_training` <a name="reset_model_training" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resetModelTraining"></a>

```python
def reset_model_training() -> None
```

##### `reset_synthetic_data_generation` <a name="reset_synthetic_data_generation" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resetSyntheticDataGeneration"></a>

```python
def reset_synthetic_data_generation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelInference">model_inference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelTraining">model_training</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration">synthetic_data_generation</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelInferenceInput">model_inference_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelTrainingInput">model_training_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGenerationInput">synthetic_data_generation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_inference`<sup>Required</sup> <a name="model_inference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelInference"></a>

```python
model_inference: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference</a>

---

##### `model_training`<sup>Required</sup> <a name="model_training" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelTraining"></a>

```python
model_training: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference</a>

---

##### `synthetic_data_generation`<sup>Required</sup> <a name="synthetic_data_generation" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration"></a>

```python
synthetic_data_generation: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a>

---

##### `model_inference_input`<sup>Optional</sup> <a name="model_inference_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelInferenceInput"></a>

```python
model_inference_input: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a>

---

##### `model_training_input`<sup>Optional</sup> <a name="model_training_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelTrainingInput"></a>

```python
model_training_input: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a>

---

##### `synthetic_data_generation_input`<sup>Optional</sup> <a name="synthetic_data_generation_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGenerationInput"></a>

```python
synthetic_data_generation_input: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a>

---


### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resetIsResponsible">reset_is_responsible</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_responsible` <a name="reset_is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resetIsResponsible"></a>

```python
def reset_is_responsible() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsibleInput">is_responsible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible_input`<sup>Optional</sup> <a name="is_responsible_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsibleInput"></a>

```python
is_responsible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---


### CleanroomsCollaborationCreatorPaymentConfigurationOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putJobCompute">put_job_compute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putMachineLearning">put_machine_learning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putQueryCompute">put_query_compute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resetJobCompute">reset_job_compute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resetMachineLearning">reset_machine_learning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resetQueryCompute">reset_query_compute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_job_compute` <a name="put_job_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putJobCompute"></a>

```python
def put_job_compute(
  is_responsible: bool | IResolvable = None
) -> None
```

###### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putJobCompute.parameter.isResponsible"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

##### `put_machine_learning` <a name="put_machine_learning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putMachineLearning"></a>

```python
def put_machine_learning(
  model_inference: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference = None,
  model_training: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining = None,
  synthetic_data_generation: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration = None
) -> None
```

###### `model_inference`<sup>Optional</sup> <a name="model_inference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putMachineLearning.parameter.modelInference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#model_inference CleanroomsCollaboration#model_inference}.

---

###### `model_training`<sup>Optional</sup> <a name="model_training" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putMachineLearning.parameter.modelTraining"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#model_training CleanroomsCollaboration#model_training}.

---

###### `synthetic_data_generation`<sup>Optional</sup> <a name="synthetic_data_generation" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putMachineLearning.parameter.syntheticDataGeneration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#synthetic_data_generation CleanroomsCollaboration#synthetic_data_generation}.

---

##### `put_query_compute` <a name="put_query_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putQueryCompute"></a>

```python
def put_query_compute(
  is_responsible: bool | IResolvable = None
) -> None
```

###### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putQueryCompute.parameter.isResponsible"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

##### `reset_job_compute` <a name="reset_job_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resetJobCompute"></a>

```python
def reset_job_compute() -> None
```

##### `reset_machine_learning` <a name="reset_machine_learning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resetMachineLearning"></a>

```python
def reset_machine_learning() -> None
```

##### `reset_query_compute` <a name="reset_query_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resetQueryCompute"></a>

```python
def reset_query_compute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.jobCompute">job_compute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.machineLearning">machine_learning</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.queryCompute">query_compute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.jobComputeInput">job_compute_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute">CleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.machineLearningInput">machine_learning_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.queryComputeInput">query_compute_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration">CleanroomsCollaborationCreatorPaymentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `job_compute`<sup>Required</sup> <a name="job_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.jobCompute"></a>

```python
job_compute: CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference</a>

---

##### `machine_learning`<sup>Required</sup> <a name="machine_learning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.machineLearning"></a>

```python
machine_learning: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference</a>

---

##### `query_compute`<sup>Required</sup> <a name="query_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.queryCompute"></a>

```python
query_compute: CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference</a>

---

##### `job_compute_input`<sup>Optional</sup> <a name="job_compute_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.jobComputeInput"></a>

```python
job_compute_input: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationJobCompute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute">CleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a>

---

##### `machine_learning_input`<sup>Optional</sup> <a name="machine_learning_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.machineLearningInput"></a>

```python
machine_learning_input: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a>

---

##### `query_compute_input`<sup>Optional</sup> <a name="query_compute_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.queryComputeInput"></a>

```python
query_compute_input: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationCreatorPaymentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration">CleanroomsCollaborationCreatorPaymentConfiguration</a>

---


### CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.resetIsResponsible">reset_is_responsible</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_responsible` <a name="reset_is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.resetIsResponsible"></a>

```python
def reset_is_responsible() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput">is_responsible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible_input`<sup>Optional</sup> <a name="is_responsible_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput"></a>

```python
is_responsible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a>

---


### CleanroomsCollaborationDataEncryptionMetadataOutputReference <a name="CleanroomsCollaborationDataEncryptionMetadataOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetAllowCleartext">reset_allow_cleartext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetAllowDuplicates">reset_allow_duplicates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetAllowJoinsOnColumnsWithDifferentNames">reset_allow_joins_on_columns_with_different_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetPreserveNulls">reset_preserve_nulls</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_cleartext` <a name="reset_allow_cleartext" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetAllowCleartext"></a>

```python
def reset_allow_cleartext() -> None
```

##### `reset_allow_duplicates` <a name="reset_allow_duplicates" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetAllowDuplicates"></a>

```python
def reset_allow_duplicates() -> None
```

##### `reset_allow_joins_on_columns_with_different_names` <a name="reset_allow_joins_on_columns_with_different_names" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetAllowJoinsOnColumnsWithDifferentNames"></a>

```python
def reset_allow_joins_on_columns_with_different_names() -> None
```

##### `reset_preserve_nulls` <a name="reset_preserve_nulls" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetPreserveNulls"></a>

```python
def reset_preserve_nulls() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowCleartextInput">allow_cleartext_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicatesInput">allow_duplicates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNamesInput">allow_joins_on_columns_with_different_names_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNullsInput">preserve_nulls_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowCleartext">allow_cleartext</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicates">allow_duplicates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNames">allow_joins_on_columns_with_different_names</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNulls">preserve_nulls</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_cleartext_input`<sup>Optional</sup> <a name="allow_cleartext_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowCleartextInput"></a>

```python
allow_cleartext_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_duplicates_input`<sup>Optional</sup> <a name="allow_duplicates_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicatesInput"></a>

```python
allow_duplicates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_joins_on_columns_with_different_names_input`<sup>Optional</sup> <a name="allow_joins_on_columns_with_different_names_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNamesInput"></a>

```python
allow_joins_on_columns_with_different_names_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `preserve_nulls_input`<sup>Optional</sup> <a name="preserve_nulls_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNullsInput"></a>

```python
preserve_nulls_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_cleartext`<sup>Required</sup> <a name="allow_cleartext" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowCleartext"></a>

```python
allow_cleartext: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_duplicates`<sup>Required</sup> <a name="allow_duplicates" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicates"></a>

```python
allow_duplicates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_joins_on_columns_with_different_names`<sup>Required</sup> <a name="allow_joins_on_columns_with_different_names" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNames"></a>

```python
allow_joins_on_columns_with_different_names: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `preserve_nulls`<sup>Required</sup> <a name="preserve_nulls" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNulls"></a>

```python
preserve_nulls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationDataEncryptionMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

---


### CleanroomsCollaborationMembersList <a name="CleanroomsCollaborationMembersList" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsCollaborationMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsCollaborationMembers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a>]

---


### CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference <a name="CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.resetCustomMlMemberAbilities">reset_custom_ml_member_abilities</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_ml_member_abilities` <a name="reset_custom_ml_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.resetCustomMlMemberAbilities"></a>

```python
def reset_custom_ml_member_abilities() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.customMlMemberAbilitiesInput">custom_ml_member_abilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.customMlMemberAbilities">custom_ml_member_abilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities">CleanroomsCollaborationMembersMlMemberAbilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_ml_member_abilities_input`<sup>Optional</sup> <a name="custom_ml_member_abilities_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.customMlMemberAbilitiesInput"></a>

```python
custom_ml_member_abilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_ml_member_abilities`<sup>Required</sup> <a name="custom_ml_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.customMlMemberAbilities"></a>

```python
custom_ml_member_abilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationMembersMlMemberAbilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities">CleanroomsCollaborationMembersMlMemberAbilities</a>

---


### CleanroomsCollaborationMembersOutputReference <a name="CleanroomsCollaborationMembersOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putMlMemberAbilities">put_ml_member_abilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putPaymentConfiguration">put_payment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetMemberAbilities">reset_member_abilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetMlMemberAbilities">reset_ml_member_abilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetPaymentConfiguration">reset_payment_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ml_member_abilities` <a name="put_ml_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putMlMemberAbilities"></a>

```python
def put_ml_member_abilities(
  custom_ml_member_abilities: typing.List[str] = None
) -> None
```

###### `custom_ml_member_abilities`<sup>Optional</sup> <a name="custom_ml_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putMlMemberAbilities.parameter.customMlMemberAbilities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#custom_ml_member_abilities CleanroomsCollaboration#custom_ml_member_abilities}.

---

##### `put_payment_configuration` <a name="put_payment_configuration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putPaymentConfiguration"></a>

```python
def put_payment_configuration(
  job_compute: CleanroomsCollaborationMembersPaymentConfigurationJobCompute = None,
  machine_learning: CleanroomsCollaborationMembersPaymentConfigurationMachineLearning = None,
  query_compute: CleanroomsCollaborationMembersPaymentConfigurationQueryCompute = None
) -> None
```

###### `job_compute`<sup>Optional</sup> <a name="job_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putPaymentConfiguration.parameter.jobCompute"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute">CleanroomsCollaborationMembersPaymentConfigurationJobCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#job_compute CleanroomsCollaboration#job_compute}.

---

###### `machine_learning`<sup>Optional</sup> <a name="machine_learning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putPaymentConfiguration.parameter.machineLearning"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning">CleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#machine_learning CleanroomsCollaboration#machine_learning}.

---

###### `query_compute`<sup>Optional</sup> <a name="query_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putPaymentConfiguration.parameter.queryCompute"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute">CleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#query_compute CleanroomsCollaboration#query_compute}.

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_member_abilities` <a name="reset_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetMemberAbilities"></a>

```python
def reset_member_abilities() -> None
```

##### `reset_ml_member_abilities` <a name="reset_ml_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetMlMemberAbilities"></a>

```python
def reset_ml_member_abilities() -> None
```

##### `reset_payment_configuration` <a name="reset_payment_configuration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetPaymentConfiguration"></a>

```python
def reset_payment_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.mlMemberAbilities">ml_member_abilities</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference">CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.paymentConfiguration">payment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference">CleanroomsCollaborationMembersPaymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.memberAbilitiesInput">member_abilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.mlMemberAbilitiesInput">ml_member_abilities_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities">CleanroomsCollaborationMembersMlMemberAbilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.paymentConfigurationInput">payment_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration">CleanroomsCollaborationMembersPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.memberAbilities">member_abilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ml_member_abilities`<sup>Required</sup> <a name="ml_member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.mlMemberAbilities"></a>

```python
ml_member_abilities: CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference">CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference</a>

---

##### `payment_configuration`<sup>Required</sup> <a name="payment_configuration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.paymentConfiguration"></a>

```python
payment_configuration: CleanroomsCollaborationMembersPaymentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference">CleanroomsCollaborationMembersPaymentConfigurationOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `member_abilities_input`<sup>Optional</sup> <a name="member_abilities_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.memberAbilitiesInput"></a>

```python
member_abilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ml_member_abilities_input`<sup>Optional</sup> <a name="ml_member_abilities_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.mlMemberAbilitiesInput"></a>

```python
ml_member_abilities_input: IResolvable | CleanroomsCollaborationMembersMlMemberAbilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities">CleanroomsCollaborationMembersMlMemberAbilities</a>

---

##### `payment_configuration_input`<sup>Optional</sup> <a name="payment_configuration_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.paymentConfigurationInput"></a>

```python
payment_configuration_input: IResolvable | CleanroomsCollaborationMembersPaymentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration">CleanroomsCollaborationMembersPaymentConfiguration</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `member_abilities`<sup>Required</sup> <a name="member_abilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.memberAbilities"></a>

```python
member_abilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationMembers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers">CleanroomsCollaborationMembers</a>

---


### CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.resetIsResponsible">reset_is_responsible</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_responsible` <a name="reset_is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.resetIsResponsible"></a>

```python
def reset_is_responsible() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.isResponsibleInput">is_responsible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute">CleanroomsCollaborationMembersPaymentConfigurationJobCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible_input`<sup>Optional</sup> <a name="is_responsible_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.isResponsibleInput"></a>

```python
is_responsible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationJobCompute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute">CleanroomsCollaborationMembersPaymentConfigurationJobCompute</a>

---


### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.resetIsResponsible">reset_is_responsible</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_responsible` <a name="reset_is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.resetIsResponsible"></a>

```python
def reset_is_responsible() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsibleInput">is_responsible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible_input`<sup>Optional</sup> <a name="is_responsible_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsibleInput"></a>

```python
is_responsible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a>

---


### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.resetIsResponsible">reset_is_responsible</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_responsible` <a name="reset_is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.resetIsResponsible"></a>

```python
def reset_is_responsible() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsibleInput">is_responsible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible_input`<sup>Optional</sup> <a name="is_responsible_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsibleInput"></a>

```python
is_responsible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a>

---


### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putModelInference">put_model_inference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putModelTraining">put_model_training</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration">put_synthetic_data_generation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resetModelInference">reset_model_inference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resetModelTraining">reset_model_training</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resetSyntheticDataGeneration">reset_synthetic_data_generation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_model_inference` <a name="put_model_inference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putModelInference"></a>

```python
def put_model_inference(
  is_responsible: bool | IResolvable = None
) -> None
```

###### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putModelInference.parameter.isResponsible"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

##### `put_model_training` <a name="put_model_training" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putModelTraining"></a>

```python
def put_model_training(
  is_responsible: bool | IResolvable = None
) -> None
```

###### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putModelTraining.parameter.isResponsible"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

##### `put_synthetic_data_generation` <a name="put_synthetic_data_generation" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration"></a>

```python
def put_synthetic_data_generation(
  is_responsible: bool | IResolvable = None
) -> None
```

###### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration.parameter.isResponsible"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

##### `reset_model_inference` <a name="reset_model_inference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resetModelInference"></a>

```python
def reset_model_inference() -> None
```

##### `reset_model_training` <a name="reset_model_training" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resetModelTraining"></a>

```python
def reset_model_training() -> None
```

##### `reset_synthetic_data_generation` <a name="reset_synthetic_data_generation" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resetSyntheticDataGeneration"></a>

```python
def reset_synthetic_data_generation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelInference">model_inference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelTraining">model_training</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration">synthetic_data_generation</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelInferenceInput">model_inference_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelTrainingInput">model_training_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGenerationInput">synthetic_data_generation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning">CleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_inference`<sup>Required</sup> <a name="model_inference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelInference"></a>

```python
model_inference: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference</a>

---

##### `model_training`<sup>Required</sup> <a name="model_training" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelTraining"></a>

```python
model_training: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference</a>

---

##### `synthetic_data_generation`<sup>Required</sup> <a name="synthetic_data_generation" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration"></a>

```python
synthetic_data_generation: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a>

---

##### `model_inference_input`<sup>Optional</sup> <a name="model_inference_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelInferenceInput"></a>

```python
model_inference_input: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a>

---

##### `model_training_input`<sup>Optional</sup> <a name="model_training_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelTrainingInput"></a>

```python
model_training_input: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a>

---

##### `synthetic_data_generation_input`<sup>Optional</sup> <a name="synthetic_data_generation_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGenerationInput"></a>

```python
synthetic_data_generation_input: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationMachineLearning
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning">CleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a>

---


### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resetIsResponsible">reset_is_responsible</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_responsible` <a name="reset_is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resetIsResponsible"></a>

```python
def reset_is_responsible() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsibleInput">is_responsible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible_input`<sup>Optional</sup> <a name="is_responsible_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsibleInput"></a>

```python
is_responsible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---


### CleanroomsCollaborationMembersPaymentConfigurationOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putJobCompute">put_job_compute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putMachineLearning">put_machine_learning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putQueryCompute">put_query_compute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resetJobCompute">reset_job_compute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resetMachineLearning">reset_machine_learning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resetQueryCompute">reset_query_compute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_job_compute` <a name="put_job_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putJobCompute"></a>

```python
def put_job_compute(
  is_responsible: bool | IResolvable = None
) -> None
```

###### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putJobCompute.parameter.isResponsible"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

##### `put_machine_learning` <a name="put_machine_learning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putMachineLearning"></a>

```python
def put_machine_learning(
  model_inference: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference = None,
  model_training: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining = None,
  synthetic_data_generation: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration = None
) -> None
```

###### `model_inference`<sup>Optional</sup> <a name="model_inference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putMachineLearning.parameter.modelInference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#model_inference CleanroomsCollaboration#model_inference}.

---

###### `model_training`<sup>Optional</sup> <a name="model_training" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putMachineLearning.parameter.modelTraining"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#model_training CleanroomsCollaboration#model_training}.

---

###### `synthetic_data_generation`<sup>Optional</sup> <a name="synthetic_data_generation" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putMachineLearning.parameter.syntheticDataGeneration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#synthetic_data_generation CleanroomsCollaboration#synthetic_data_generation}.

---

##### `put_query_compute` <a name="put_query_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putQueryCompute"></a>

```python
def put_query_compute(
  is_responsible: bool | IResolvable = None
) -> None
```

###### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putQueryCompute.parameter.isResponsible"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

##### `reset_job_compute` <a name="reset_job_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resetJobCompute"></a>

```python
def reset_job_compute() -> None
```

##### `reset_machine_learning` <a name="reset_machine_learning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resetMachineLearning"></a>

```python
def reset_machine_learning() -> None
```

##### `reset_query_compute` <a name="reset_query_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resetQueryCompute"></a>

```python
def reset_query_compute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.jobCompute">job_compute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference">CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.machineLearning">machine_learning</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.queryCompute">query_compute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference">CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.jobComputeInput">job_compute_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute">CleanroomsCollaborationMembersPaymentConfigurationJobCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.machineLearningInput">machine_learning_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning">CleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.queryComputeInput">query_compute_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute">CleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration">CleanroomsCollaborationMembersPaymentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `job_compute`<sup>Required</sup> <a name="job_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.jobCompute"></a>

```python
job_compute: CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference">CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference</a>

---

##### `machine_learning`<sup>Required</sup> <a name="machine_learning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.machineLearning"></a>

```python
machine_learning: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference</a>

---

##### `query_compute`<sup>Required</sup> <a name="query_compute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.queryCompute"></a>

```python
query_compute: CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference">CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference</a>

---

##### `job_compute_input`<sup>Optional</sup> <a name="job_compute_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.jobComputeInput"></a>

```python
job_compute_input: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationJobCompute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute">CleanroomsCollaborationMembersPaymentConfigurationJobCompute</a>

---

##### `machine_learning_input`<sup>Optional</sup> <a name="machine_learning_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.machineLearningInput"></a>

```python
machine_learning_input: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationMachineLearning
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning">CleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a>

---

##### `query_compute_input`<sup>Optional</sup> <a name="query_compute_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.queryComputeInput"></a>

```python
query_compute_input: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationQueryCompute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute">CleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationMembersPaymentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration">CleanroomsCollaborationMembersPaymentConfiguration</a>

---


### CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.resetIsResponsible">reset_is_responsible</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_responsible` <a name="reset_is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.resetIsResponsible"></a>

```python
def reset_is_responsible() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput">is_responsible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute">CleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible_input`<sup>Optional</sup> <a name="is_responsible_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput"></a>

```python
is_responsible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationMembersPaymentConfigurationQueryCompute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute">CleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a>

---


### CleanroomsCollaborationTagsList <a name="CleanroomsCollaborationTagsList" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsCollaborationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsCollaborationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a>]

---


### CleanroomsCollaborationTagsOutputReference <a name="CleanroomsCollaborationTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsCollaborationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags">CleanroomsCollaborationTags</a>

---



