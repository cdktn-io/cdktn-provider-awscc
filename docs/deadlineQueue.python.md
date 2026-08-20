# `deadlineQueue` Submodule <a name="`deadlineQueue` Submodule" id="@cdktn/provider-awscc.deadlineQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeadlineQueue <a name="DeadlineQueue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue awscc_deadline_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueue(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  farm_id: str,
  allowed_storage_profile_ids: typing.List[str] = None,
  default_budget_action: str = None,
  description: str = None,
  job_attachment_settings: DeadlineQueueJobAttachmentSettings = None,
  job_run_as_user: DeadlineQueueJobRunAsUser = None,
  required_file_system_location_names: typing.List[str] = None,
  role_arn: str = None,
  scheduling_configuration: DeadlineQueueSchedulingConfiguration = None,
  tags: IResolvable | typing.List[DeadlineQueueTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#display_name DeadlineQueue#display_name}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.farmId">farm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#farm_id DeadlineQueue#farm_id}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.allowedStorageProfileIds">allowed_storage_profile_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#allowed_storage_profile_ids DeadlineQueue#allowed_storage_profile_ids}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.defaultBudgetAction">default_budget_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#default_budget_action DeadlineQueue#default_budget_action}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#description DeadlineQueue#description}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.jobAttachmentSettings">job_attachment_settings</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#job_attachment_settings DeadlineQueue#job_attachment_settings}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.jobRunAsUser">job_run_as_user</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#job_run_as_user DeadlineQueue#job_run_as_user}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.requiredFileSystemLocationNames">required_file_system_location_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#required_file_system_location_names DeadlineQueue#required_file_system_location_names}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#role_arn DeadlineQueue#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.schedulingConfiguration">scheduling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#scheduling_configuration DeadlineQueue#scheduling_configuration}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#display_name DeadlineQueue#display_name}.

---

##### `farm_id`<sup>Required</sup> <a name="farm_id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.farmId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#farm_id DeadlineQueue#farm_id}.

---

##### `allowed_storage_profile_ids`<sup>Optional</sup> <a name="allowed_storage_profile_ids" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.allowedStorageProfileIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#allowed_storage_profile_ids DeadlineQueue#allowed_storage_profile_ids}.

---

##### `default_budget_action`<sup>Optional</sup> <a name="default_budget_action" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.defaultBudgetAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#default_budget_action DeadlineQueue#default_budget_action}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#description DeadlineQueue#description}.

---

##### `job_attachment_settings`<sup>Optional</sup> <a name="job_attachment_settings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.jobAttachmentSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#job_attachment_settings DeadlineQueue#job_attachment_settings}.

---

##### `job_run_as_user`<sup>Optional</sup> <a name="job_run_as_user" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.jobRunAsUser"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#job_run_as_user DeadlineQueue#job_run_as_user}.

---

##### `required_file_system_location_names`<sup>Optional</sup> <a name="required_file_system_location_names" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.requiredFileSystemLocationNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#required_file_system_location_names DeadlineQueue#required_file_system_location_names}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#role_arn DeadlineQueue#role_arn}.

---

##### `scheduling_configuration`<sup>Optional</sup> <a name="scheduling_configuration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.schedulingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#scheduling_configuration DeadlineQueue#scheduling_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#tags DeadlineQueue#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobAttachmentSettings">put_job_attachment_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobRunAsUser">put_job_run_as_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putSchedulingConfiguration">put_scheduling_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetAllowedStorageProfileIds">reset_allowed_storage_profile_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetDefaultBudgetAction">reset_default_budget_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetJobAttachmentSettings">reset_job_attachment_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetJobRunAsUser">reset_job_run_as_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetRequiredFileSystemLocationNames">reset_required_file_system_location_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetSchedulingConfiguration">reset_scheduling_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_job_attachment_settings` <a name="put_job_attachment_settings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobAttachmentSettings"></a>

```python
def put_job_attachment_settings(
  root_prefix: str = None,
  s3_bucket_name: str = None
) -> None
```

###### `root_prefix`<sup>Optional</sup> <a name="root_prefix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobAttachmentSettings.parameter.rootPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#root_prefix DeadlineQueue#root_prefix}.

---

###### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobAttachmentSettings.parameter.s3BucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#s3_bucket_name DeadlineQueue#s3_bucket_name}.

---

##### `put_job_run_as_user` <a name="put_job_run_as_user" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobRunAsUser"></a>

```python
def put_job_run_as_user(
  posix: DeadlineQueueJobRunAsUserPosix = None,
  run_as: str = None,
  windows: DeadlineQueueJobRunAsUserWindows = None
) -> None
```

###### `posix`<sup>Optional</sup> <a name="posix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobRunAsUser.parameter.posix"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#posix DeadlineQueue#posix}.

---

###### `run_as`<sup>Optional</sup> <a name="run_as" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobRunAsUser.parameter.runAs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#run_as DeadlineQueue#run_as}.

---

###### `windows`<sup>Optional</sup> <a name="windows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobRunAsUser.parameter.windows"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#windows DeadlineQueue#windows}.

---

##### `put_scheduling_configuration` <a name="put_scheduling_configuration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putSchedulingConfiguration"></a>

```python
def put_scheduling_configuration(
  priority_balanced: DeadlineQueueSchedulingConfigurationPriorityBalanced = None,
  priority_fifo: str = None,
  weighted_balanced: DeadlineQueueSchedulingConfigurationWeightedBalanced = None
) -> None
```

###### `priority_balanced`<sup>Optional</sup> <a name="priority_balanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putSchedulingConfiguration.parameter.priorityBalanced"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#priority_balanced DeadlineQueue#priority_balanced}.

---

###### `priority_fifo`<sup>Optional</sup> <a name="priority_fifo" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putSchedulingConfiguration.parameter.priorityFifo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#priority_fifo DeadlineQueue#priority_fifo}.

---

###### `weighted_balanced`<sup>Optional</sup> <a name="weighted_balanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putSchedulingConfiguration.parameter.weightedBalanced"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#weighted_balanced DeadlineQueue#weighted_balanced}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DeadlineQueueTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>]

---

##### `reset_allowed_storage_profile_ids` <a name="reset_allowed_storage_profile_ids" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetAllowedStorageProfileIds"></a>

```python
def reset_allowed_storage_profile_ids() -> None
```

##### `reset_default_budget_action` <a name="reset_default_budget_action" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetDefaultBudgetAction"></a>

```python
def reset_default_budget_action() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_job_attachment_settings` <a name="reset_job_attachment_settings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetJobAttachmentSettings"></a>

```python
def reset_job_attachment_settings() -> None
```

##### `reset_job_run_as_user` <a name="reset_job_run_as_user" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetJobRunAsUser"></a>

```python
def reset_job_run_as_user() -> None
```

##### `reset_required_file_system_location_names` <a name="reset_required_file_system_location_names" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetRequiredFileSystemLocationNames"></a>

```python
def reset_required_file_system_location_names() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_scheduling_configuration` <a name="reset_scheduling_configuration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetSchedulingConfiguration"></a>

```python
def reset_scheduling_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DeadlineQueue resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isConstruct"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformElement"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformResource"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DeadlineQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DeadlineQueue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DeadlineQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DeadlineQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobAttachmentSettings">job_attachment_settings</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference">DeadlineQueueJobAttachmentSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobRunAsUser">job_run_as_user</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference">DeadlineQueueJobRunAsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.queueId">queue_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.schedulingConfiguration">scheduling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference">DeadlineQueueSchedulingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList">DeadlineQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.allowedStorageProfileIdsInput">allowed_storage_profile_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.defaultBudgetActionInput">default_budget_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.farmIdInput">farm_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobAttachmentSettingsInput">job_attachment_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobRunAsUserInput">job_run_as_user_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.requiredFileSystemLocationNamesInput">required_file_system_location_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.schedulingConfigurationInput">scheduling_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.allowedStorageProfileIds">allowed_storage_profile_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.defaultBudgetAction">default_budget_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.farmId">farm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.requiredFileSystemLocationNames">required_file_system_location_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_attachment_settings`<sup>Required</sup> <a name="job_attachment_settings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobAttachmentSettings"></a>

```python
job_attachment_settings: DeadlineQueueJobAttachmentSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference">DeadlineQueueJobAttachmentSettingsOutputReference</a>

---

##### `job_run_as_user`<sup>Required</sup> <a name="job_run_as_user" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobRunAsUser"></a>

```python
job_run_as_user: DeadlineQueueJobRunAsUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference">DeadlineQueueJobRunAsUserOutputReference</a>

---

##### `queue_id`<sup>Required</sup> <a name="queue_id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.queueId"></a>

```python
queue_id: str
```

- *Type:* str

---

##### `scheduling_configuration`<sup>Required</sup> <a name="scheduling_configuration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.schedulingConfiguration"></a>

```python
scheduling_configuration: DeadlineQueueSchedulingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference">DeadlineQueueSchedulingConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tags"></a>

```python
tags: DeadlineQueueTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList">DeadlineQueueTagsList</a>

---

##### `allowed_storage_profile_ids_input`<sup>Optional</sup> <a name="allowed_storage_profile_ids_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.allowedStorageProfileIdsInput"></a>

```python
allowed_storage_profile_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_budget_action_input`<sup>Optional</sup> <a name="default_budget_action_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.defaultBudgetActionInput"></a>

```python
default_budget_action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `farm_id_input`<sup>Optional</sup> <a name="farm_id_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.farmIdInput"></a>

```python
farm_id_input: str
```

- *Type:* str

---

##### `job_attachment_settings_input`<sup>Optional</sup> <a name="job_attachment_settings_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobAttachmentSettingsInput"></a>

```python
job_attachment_settings_input: IResolvable | DeadlineQueueJobAttachmentSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a>

---

##### `job_run_as_user_input`<sup>Optional</sup> <a name="job_run_as_user_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobRunAsUserInput"></a>

```python
job_run_as_user_input: IResolvable | DeadlineQueueJobRunAsUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a>

---

##### `required_file_system_location_names_input`<sup>Optional</sup> <a name="required_file_system_location_names_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.requiredFileSystemLocationNamesInput"></a>

```python
required_file_system_location_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `scheduling_configuration_input`<sup>Optional</sup> <a name="scheduling_configuration_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.schedulingConfigurationInput"></a>

```python
scheduling_configuration_input: IResolvable | DeadlineQueueSchedulingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DeadlineQueueTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>]

---

##### `allowed_storage_profile_ids`<sup>Required</sup> <a name="allowed_storage_profile_ids" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.allowedStorageProfileIds"></a>

```python
allowed_storage_profile_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_budget_action`<sup>Required</sup> <a name="default_budget_action" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.defaultBudgetAction"></a>

```python
default_budget_action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `farm_id`<sup>Required</sup> <a name="farm_id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.farmId"></a>

```python
farm_id: str
```

- *Type:* str

---

##### `required_file_system_location_names`<sup>Required</sup> <a name="required_file_system_location_names" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.requiredFileSystemLocationNames"></a>

```python
required_file_system_location_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DeadlineQueueConfig <a name="DeadlineQueueConfig" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  farm_id: str,
  allowed_storage_profile_ids: typing.List[str] = None,
  default_budget_action: str = None,
  description: str = None,
  job_attachment_settings: DeadlineQueueJobAttachmentSettings = None,
  job_run_as_user: DeadlineQueueJobRunAsUser = None,
  required_file_system_location_names: typing.List[str] = None,
  role_arn: str = None,
  scheduling_configuration: DeadlineQueueSchedulingConfiguration = None,
  tags: IResolvable | typing.List[DeadlineQueueTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#display_name DeadlineQueue#display_name}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.farmId">farm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#farm_id DeadlineQueue#farm_id}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.allowedStorageProfileIds">allowed_storage_profile_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#allowed_storage_profile_ids DeadlineQueue#allowed_storage_profile_ids}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.defaultBudgetAction">default_budget_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#default_budget_action DeadlineQueue#default_budget_action}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#description DeadlineQueue#description}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.jobAttachmentSettings">job_attachment_settings</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#job_attachment_settings DeadlineQueue#job_attachment_settings}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.jobRunAsUser">job_run_as_user</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#job_run_as_user DeadlineQueue#job_run_as_user}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.requiredFileSystemLocationNames">required_file_system_location_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#required_file_system_location_names DeadlineQueue#required_file_system_location_names}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#role_arn DeadlineQueue#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.schedulingConfiguration">scheduling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#scheduling_configuration DeadlineQueue#scheduling_configuration}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#display_name DeadlineQueue#display_name}.

---

##### `farm_id`<sup>Required</sup> <a name="farm_id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.farmId"></a>

```python
farm_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#farm_id DeadlineQueue#farm_id}.

---

##### `allowed_storage_profile_ids`<sup>Optional</sup> <a name="allowed_storage_profile_ids" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.allowedStorageProfileIds"></a>

```python
allowed_storage_profile_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#allowed_storage_profile_ids DeadlineQueue#allowed_storage_profile_ids}.

---

##### `default_budget_action`<sup>Optional</sup> <a name="default_budget_action" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.defaultBudgetAction"></a>

```python
default_budget_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#default_budget_action DeadlineQueue#default_budget_action}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#description DeadlineQueue#description}.

---

##### `job_attachment_settings`<sup>Optional</sup> <a name="job_attachment_settings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.jobAttachmentSettings"></a>

```python
job_attachment_settings: DeadlineQueueJobAttachmentSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#job_attachment_settings DeadlineQueue#job_attachment_settings}.

---

##### `job_run_as_user`<sup>Optional</sup> <a name="job_run_as_user" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.jobRunAsUser"></a>

```python
job_run_as_user: DeadlineQueueJobRunAsUser
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#job_run_as_user DeadlineQueue#job_run_as_user}.

---

##### `required_file_system_location_names`<sup>Optional</sup> <a name="required_file_system_location_names" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.requiredFileSystemLocationNames"></a>

```python
required_file_system_location_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#required_file_system_location_names DeadlineQueue#required_file_system_location_names}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#role_arn DeadlineQueue#role_arn}.

---

##### `scheduling_configuration`<sup>Optional</sup> <a name="scheduling_configuration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.schedulingConfiguration"></a>

```python
scheduling_configuration: DeadlineQueueSchedulingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#scheduling_configuration DeadlineQueue#scheduling_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DeadlineQueueTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#tags DeadlineQueue#tags}

---

### DeadlineQueueJobAttachmentSettings <a name="DeadlineQueueJobAttachmentSettings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueJobAttachmentSettings(
  root_prefix: str = None,
  s3_bucket_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.property.rootPrefix">root_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#root_prefix DeadlineQueue#root_prefix}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#s3_bucket_name DeadlineQueue#s3_bucket_name}. |

---

##### `root_prefix`<sup>Optional</sup> <a name="root_prefix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.property.rootPrefix"></a>

```python
root_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#root_prefix DeadlineQueue#root_prefix}.

---

##### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#s3_bucket_name DeadlineQueue#s3_bucket_name}.

---

### DeadlineQueueJobRunAsUser <a name="DeadlineQueueJobRunAsUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueJobRunAsUser(
  posix: DeadlineQueueJobRunAsUserPosix = None,
  run_as: str = None,
  windows: DeadlineQueueJobRunAsUserWindows = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.posix">posix</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#posix DeadlineQueue#posix}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.runAs">run_as</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#run_as DeadlineQueue#run_as}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.windows">windows</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#windows DeadlineQueue#windows}. |

---

##### `posix`<sup>Optional</sup> <a name="posix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.posix"></a>

```python
posix: DeadlineQueueJobRunAsUserPosix
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#posix DeadlineQueue#posix}.

---

##### `run_as`<sup>Optional</sup> <a name="run_as" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.runAs"></a>

```python
run_as: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#run_as DeadlineQueue#run_as}.

---

##### `windows`<sup>Optional</sup> <a name="windows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.windows"></a>

```python
windows: DeadlineQueueJobRunAsUserWindows
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#windows DeadlineQueue#windows}.

---

### DeadlineQueueJobRunAsUserPosix <a name="DeadlineQueueJobRunAsUserPosix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueJobRunAsUserPosix(
  group: str = None,
  user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.property.group">group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#group DeadlineQueue#group}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.property.user">user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#user DeadlineQueue#user}. |

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.property.group"></a>

```python
group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#group DeadlineQueue#group}.

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.property.user"></a>

```python
user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#user DeadlineQueue#user}.

---

### DeadlineQueueJobRunAsUserWindows <a name="DeadlineQueueJobRunAsUserWindows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueJobRunAsUserWindows(
  password_arn: str = None,
  user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.property.passwordArn">password_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#password_arn DeadlineQueue#password_arn}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.property.user">user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#user DeadlineQueue#user}. |

---

##### `password_arn`<sup>Optional</sup> <a name="password_arn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.property.passwordArn"></a>

```python
password_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#password_arn DeadlineQueue#password_arn}.

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.property.user"></a>

```python
user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#user DeadlineQueue#user}.

---

### DeadlineQueueSchedulingConfiguration <a name="DeadlineQueueSchedulingConfiguration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueSchedulingConfiguration(
  priority_balanced: DeadlineQueueSchedulingConfigurationPriorityBalanced = None,
  priority_fifo: str = None,
  weighted_balanced: DeadlineQueueSchedulingConfigurationWeightedBalanced = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.priorityBalanced">priority_balanced</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#priority_balanced DeadlineQueue#priority_balanced}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.priorityFifo">priority_fifo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#priority_fifo DeadlineQueue#priority_fifo}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.weightedBalanced">weighted_balanced</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#weighted_balanced DeadlineQueue#weighted_balanced}. |

---

##### `priority_balanced`<sup>Optional</sup> <a name="priority_balanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.priorityBalanced"></a>

```python
priority_balanced: DeadlineQueueSchedulingConfigurationPriorityBalanced
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#priority_balanced DeadlineQueue#priority_balanced}.

---

##### `priority_fifo`<sup>Optional</sup> <a name="priority_fifo" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.priorityFifo"></a>

```python
priority_fifo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#priority_fifo DeadlineQueue#priority_fifo}.

---

##### `weighted_balanced`<sup>Optional</sup> <a name="weighted_balanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.weightedBalanced"></a>

```python
weighted_balanced: DeadlineQueueSchedulingConfigurationWeightedBalanced
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#weighted_balanced DeadlineQueue#weighted_balanced}.

---

### DeadlineQueueSchedulingConfigurationPriorityBalanced <a name="DeadlineQueueSchedulingConfigurationPriorityBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced(
  rendering_task_buffer: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced.property.renderingTaskBuffer">rendering_task_buffer</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#rendering_task_buffer DeadlineQueue#rendering_task_buffer}. |

---

##### `rendering_task_buffer`<sup>Optional</sup> <a name="rendering_task_buffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced.property.renderingTaskBuffer"></a>

```python
rendering_task_buffer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#rendering_task_buffer DeadlineQueue#rendering_task_buffer}.

---

### DeadlineQueueSchedulingConfigurationWeightedBalanced <a name="DeadlineQueueSchedulingConfigurationWeightedBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced(
  error_weight: typing.Union[int, float] = None,
  max_priority_override: DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride = None,
  min_priority_override: DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride = None,
  priority_weight: typing.Union[int, float] = None,
  rendering_task_buffer: typing.Union[int, float] = None,
  rendering_task_weight: typing.Union[int, float] = None,
  submission_time_weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.errorWeight">error_weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#error_weight DeadlineQueue#error_weight}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.maxPriorityOverride">max_priority_override</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#max_priority_override DeadlineQueue#max_priority_override}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.minPriorityOverride">min_priority_override</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#min_priority_override DeadlineQueue#min_priority_override}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.priorityWeight">priority_weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#priority_weight DeadlineQueue#priority_weight}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.renderingTaskBuffer">rendering_task_buffer</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#rendering_task_buffer DeadlineQueue#rendering_task_buffer}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.renderingTaskWeight">rendering_task_weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#rendering_task_weight DeadlineQueue#rendering_task_weight}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.submissionTimeWeight">submission_time_weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#submission_time_weight DeadlineQueue#submission_time_weight}. |

---

##### `error_weight`<sup>Optional</sup> <a name="error_weight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.errorWeight"></a>

```python
error_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#error_weight DeadlineQueue#error_weight}.

---

##### `max_priority_override`<sup>Optional</sup> <a name="max_priority_override" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.maxPriorityOverride"></a>

```python
max_priority_override: DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#max_priority_override DeadlineQueue#max_priority_override}.

---

##### `min_priority_override`<sup>Optional</sup> <a name="min_priority_override" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.minPriorityOverride"></a>

```python
min_priority_override: DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#min_priority_override DeadlineQueue#min_priority_override}.

---

##### `priority_weight`<sup>Optional</sup> <a name="priority_weight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.priorityWeight"></a>

```python
priority_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#priority_weight DeadlineQueue#priority_weight}.

---

##### `rendering_task_buffer`<sup>Optional</sup> <a name="rendering_task_buffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.renderingTaskBuffer"></a>

```python
rendering_task_buffer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#rendering_task_buffer DeadlineQueue#rendering_task_buffer}.

---

##### `rendering_task_weight`<sup>Optional</sup> <a name="rendering_task_weight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.renderingTaskWeight"></a>

```python
rendering_task_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#rendering_task_weight DeadlineQueue#rendering_task_weight}.

---

##### `submission_time_weight`<sup>Optional</sup> <a name="submission_time_weight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.submissionTimeWeight"></a>

```python
submission_time_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#submission_time_weight DeadlineQueue#submission_time_weight}.

---

### DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride(
  always_schedule_first: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride.property.alwaysScheduleFirst">always_schedule_first</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#always_schedule_first DeadlineQueue#always_schedule_first}. |

---

##### `always_schedule_first`<sup>Optional</sup> <a name="always_schedule_first" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride.property.alwaysScheduleFirst"></a>

```python
always_schedule_first: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#always_schedule_first DeadlineQueue#always_schedule_first}.

---

### DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride(
  always_schedule_last: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride.property.alwaysScheduleLast">always_schedule_last</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#always_schedule_last DeadlineQueue#always_schedule_last}. |

---

##### `always_schedule_last`<sup>Optional</sup> <a name="always_schedule_last" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride.property.alwaysScheduleLast"></a>

```python
always_schedule_last: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#always_schedule_last DeadlineQueue#always_schedule_last}.

---

### DeadlineQueueTags <a name="DeadlineQueueTags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#key DeadlineQueue#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#value DeadlineQueue#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DeadlineQueueJobAttachmentSettingsOutputReference <a name="DeadlineQueueJobAttachmentSettingsOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resetRootPrefix">reset_root_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resetS3BucketName">reset_s3_bucket_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_root_prefix` <a name="reset_root_prefix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resetRootPrefix"></a>

```python
def reset_root_prefix() -> None
```

##### `reset_s3_bucket_name` <a name="reset_s3_bucket_name" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resetS3BucketName"></a>

```python
def reset_s3_bucket_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.rootPrefixInput">root_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.rootPrefix">root_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `root_prefix_input`<sup>Optional</sup> <a name="root_prefix_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.rootPrefixInput"></a>

```python
root_prefix_input: str
```

- *Type:* str

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `root_prefix`<sup>Required</sup> <a name="root_prefix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.rootPrefix"></a>

```python
root_prefix: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineQueueJobAttachmentSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a>

---


### DeadlineQueueJobRunAsUserOutputReference <a name="DeadlineQueueJobRunAsUserOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueJobRunAsUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putPosix">put_posix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putWindows">put_windows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetPosix">reset_posix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetRunAs">reset_run_as</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetWindows">reset_windows</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_posix` <a name="put_posix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putPosix"></a>

```python
def put_posix(
  group: str = None,
  user: str = None
) -> None
```

###### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putPosix.parameter.group"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#group DeadlineQueue#group}.

---

###### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putPosix.parameter.user"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#user DeadlineQueue#user}.

---

##### `put_windows` <a name="put_windows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putWindows"></a>

```python
def put_windows(
  password_arn: str = None,
  user: str = None
) -> None
```

###### `password_arn`<sup>Optional</sup> <a name="password_arn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putWindows.parameter.passwordArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#password_arn DeadlineQueue#password_arn}.

---

###### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putWindows.parameter.user"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#user DeadlineQueue#user}.

---

##### `reset_posix` <a name="reset_posix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetPosix"></a>

```python
def reset_posix() -> None
```

##### `reset_run_as` <a name="reset_run_as" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetRunAs"></a>

```python
def reset_run_as() -> None
```

##### `reset_windows` <a name="reset_windows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetWindows"></a>

```python
def reset_windows() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.posix">posix</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference">DeadlineQueueJobRunAsUserPosixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.windows">windows</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference">DeadlineQueueJobRunAsUserWindowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.posixInput">posix_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.runAsInput">run_as_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.windowsInput">windows_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.runAs">run_as</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `posix`<sup>Required</sup> <a name="posix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.posix"></a>

```python
posix: DeadlineQueueJobRunAsUserPosixOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference">DeadlineQueueJobRunAsUserPosixOutputReference</a>

---

##### `windows`<sup>Required</sup> <a name="windows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.windows"></a>

```python
windows: DeadlineQueueJobRunAsUserWindowsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference">DeadlineQueueJobRunAsUserWindowsOutputReference</a>

---

##### `posix_input`<sup>Optional</sup> <a name="posix_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.posixInput"></a>

```python
posix_input: IResolvable | DeadlineQueueJobRunAsUserPosix
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a>

---

##### `run_as_input`<sup>Optional</sup> <a name="run_as_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.runAsInput"></a>

```python
run_as_input: str
```

- *Type:* str

---

##### `windows_input`<sup>Optional</sup> <a name="windows_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.windowsInput"></a>

```python
windows_input: IResolvable | DeadlineQueueJobRunAsUserWindows
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a>

---

##### `run_as`<sup>Required</sup> <a name="run_as" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.runAs"></a>

```python
run_as: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineQueueJobRunAsUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a>

---


### DeadlineQueueJobRunAsUserPosixOutputReference <a name="DeadlineQueueJobRunAsUserPosixOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resetUser">reset_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group` <a name="reset_group" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resetUser"></a>

```python
def reset_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineQueueJobRunAsUserPosix
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a>

---


### DeadlineQueueJobRunAsUserWindowsOutputReference <a name="DeadlineQueueJobRunAsUserWindowsOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resetPasswordArn">reset_password_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resetUser">reset_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password_arn` <a name="reset_password_arn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resetPasswordArn"></a>

```python
def reset_password_arn() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resetUser"></a>

```python
def reset_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.passwordArnInput">password_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.passwordArn">password_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_arn_input`<sup>Optional</sup> <a name="password_arn_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.passwordArnInput"></a>

```python
password_arn_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `password_arn`<sup>Required</sup> <a name="password_arn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.passwordArn"></a>

```python
password_arn: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineQueueJobRunAsUserWindows
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a>

---


### DeadlineQueueSchedulingConfigurationOutputReference <a name="DeadlineQueueSchedulingConfigurationOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putPriorityBalanced">put_priority_balanced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putWeightedBalanced">put_weighted_balanced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetPriorityBalanced">reset_priority_balanced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetPriorityFifo">reset_priority_fifo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetWeightedBalanced">reset_weighted_balanced</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_priority_balanced` <a name="put_priority_balanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putPriorityBalanced"></a>

```python
def put_priority_balanced(
  rendering_task_buffer: typing.Union[int, float] = None
) -> None
```

###### `rendering_task_buffer`<sup>Optional</sup> <a name="rendering_task_buffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putPriorityBalanced.parameter.renderingTaskBuffer"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#rendering_task_buffer DeadlineQueue#rendering_task_buffer}.

---

##### `put_weighted_balanced` <a name="put_weighted_balanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putWeightedBalanced"></a>

```python
def put_weighted_balanced(
  error_weight: typing.Union[int, float] = None,
  max_priority_override: DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride = None,
  min_priority_override: DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride = None,
  priority_weight: typing.Union[int, float] = None,
  rendering_task_buffer: typing.Union[int, float] = None,
  rendering_task_weight: typing.Union[int, float] = None,
  submission_time_weight: typing.Union[int, float] = None
) -> None
```

###### `error_weight`<sup>Optional</sup> <a name="error_weight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putWeightedBalanced.parameter.errorWeight"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#error_weight DeadlineQueue#error_weight}.

---

###### `max_priority_override`<sup>Optional</sup> <a name="max_priority_override" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putWeightedBalanced.parameter.maxPriorityOverride"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#max_priority_override DeadlineQueue#max_priority_override}.

---

###### `min_priority_override`<sup>Optional</sup> <a name="min_priority_override" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putWeightedBalanced.parameter.minPriorityOverride"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#min_priority_override DeadlineQueue#min_priority_override}.

---

###### `priority_weight`<sup>Optional</sup> <a name="priority_weight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putWeightedBalanced.parameter.priorityWeight"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#priority_weight DeadlineQueue#priority_weight}.

---

###### `rendering_task_buffer`<sup>Optional</sup> <a name="rendering_task_buffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putWeightedBalanced.parameter.renderingTaskBuffer"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#rendering_task_buffer DeadlineQueue#rendering_task_buffer}.

---

###### `rendering_task_weight`<sup>Optional</sup> <a name="rendering_task_weight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putWeightedBalanced.parameter.renderingTaskWeight"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#rendering_task_weight DeadlineQueue#rendering_task_weight}.

---

###### `submission_time_weight`<sup>Optional</sup> <a name="submission_time_weight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putWeightedBalanced.parameter.submissionTimeWeight"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#submission_time_weight DeadlineQueue#submission_time_weight}.

---

##### `reset_priority_balanced` <a name="reset_priority_balanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetPriorityBalanced"></a>

```python
def reset_priority_balanced() -> None
```

##### `reset_priority_fifo` <a name="reset_priority_fifo" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetPriorityFifo"></a>

```python
def reset_priority_fifo() -> None
```

##### `reset_weighted_balanced` <a name="reset_weighted_balanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetWeightedBalanced"></a>

```python
def reset_weighted_balanced() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityBalanced">priority_balanced</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference">DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.weightedBalanced">weighted_balanced</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityBalancedInput">priority_balanced_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityFifoInput">priority_fifo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.weightedBalancedInput">weighted_balanced_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityFifo">priority_fifo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `priority_balanced`<sup>Required</sup> <a name="priority_balanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityBalanced"></a>

```python
priority_balanced: DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference">DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference</a>

---

##### `weighted_balanced`<sup>Required</sup> <a name="weighted_balanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.weightedBalanced"></a>

```python
weighted_balanced: DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference</a>

---

##### `priority_balanced_input`<sup>Optional</sup> <a name="priority_balanced_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityBalancedInput"></a>

```python
priority_balanced_input: IResolvable | DeadlineQueueSchedulingConfigurationPriorityBalanced
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a>

---

##### `priority_fifo_input`<sup>Optional</sup> <a name="priority_fifo_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityFifoInput"></a>

```python
priority_fifo_input: str
```

- *Type:* str

---

##### `weighted_balanced_input`<sup>Optional</sup> <a name="weighted_balanced_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.weightedBalancedInput"></a>

```python
weighted_balanced_input: IResolvable | DeadlineQueueSchedulingConfigurationWeightedBalanced
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a>

---

##### `priority_fifo`<sup>Required</sup> <a name="priority_fifo" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityFifo"></a>

```python
priority_fifo: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineQueueSchedulingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a>

---


### DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference <a name="DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resetRenderingTaskBuffer">reset_rendering_task_buffer</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_rendering_task_buffer` <a name="reset_rendering_task_buffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resetRenderingTaskBuffer"></a>

```python
def reset_rendering_task_buffer() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.renderingTaskBufferInput">rendering_task_buffer_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.renderingTaskBuffer">rendering_task_buffer</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rendering_task_buffer_input`<sup>Optional</sup> <a name="rendering_task_buffer_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.renderingTaskBufferInput"></a>

```python
rendering_task_buffer_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rendering_task_buffer`<sup>Required</sup> <a name="rendering_task_buffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.renderingTaskBuffer"></a>

```python
rendering_task_buffer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineQueueSchedulingConfigurationPriorityBalanced
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a>

---


### DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resetAlwaysScheduleFirst">reset_always_schedule_first</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_always_schedule_first` <a name="reset_always_schedule_first" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resetAlwaysScheduleFirst"></a>

```python
def reset_always_schedule_first() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.alwaysScheduleFirstInput">always_schedule_first_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.alwaysScheduleFirst">always_schedule_first</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `always_schedule_first_input`<sup>Optional</sup> <a name="always_schedule_first_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.alwaysScheduleFirstInput"></a>

```python
always_schedule_first_input: str
```

- *Type:* str

---

##### `always_schedule_first`<sup>Required</sup> <a name="always_schedule_first" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.alwaysScheduleFirst"></a>

```python
always_schedule_first: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a>

---


### DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resetAlwaysScheduleLast">reset_always_schedule_last</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_always_schedule_last` <a name="reset_always_schedule_last" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resetAlwaysScheduleLast"></a>

```python
def reset_always_schedule_last() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.alwaysScheduleLastInput">always_schedule_last_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.alwaysScheduleLast">always_schedule_last</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `always_schedule_last_input`<sup>Optional</sup> <a name="always_schedule_last_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.alwaysScheduleLastInput"></a>

```python
always_schedule_last_input: str
```

- *Type:* str

---

##### `always_schedule_last`<sup>Required</sup> <a name="always_schedule_last" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.alwaysScheduleLast"></a>

```python
always_schedule_last: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a>

---


### DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMaxPriorityOverride">put_max_priority_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMinPriorityOverride">put_min_priority_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetErrorWeight">reset_error_weight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetMaxPriorityOverride">reset_max_priority_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetMinPriorityOverride">reset_min_priority_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetPriorityWeight">reset_priority_weight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetRenderingTaskBuffer">reset_rendering_task_buffer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetRenderingTaskWeight">reset_rendering_task_weight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetSubmissionTimeWeight">reset_submission_time_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_max_priority_override` <a name="put_max_priority_override" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMaxPriorityOverride"></a>

```python
def put_max_priority_override(
  always_schedule_first: str = None
) -> None
```

###### `always_schedule_first`<sup>Optional</sup> <a name="always_schedule_first" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMaxPriorityOverride.parameter.alwaysScheduleFirst"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#always_schedule_first DeadlineQueue#always_schedule_first}.

---

##### `put_min_priority_override` <a name="put_min_priority_override" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMinPriorityOverride"></a>

```python
def put_min_priority_override(
  always_schedule_last: str = None
) -> None
```

###### `always_schedule_last`<sup>Optional</sup> <a name="always_schedule_last" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMinPriorityOverride.parameter.alwaysScheduleLast"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#always_schedule_last DeadlineQueue#always_schedule_last}.

---

##### `reset_error_weight` <a name="reset_error_weight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetErrorWeight"></a>

```python
def reset_error_weight() -> None
```

##### `reset_max_priority_override` <a name="reset_max_priority_override" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetMaxPriorityOverride"></a>

```python
def reset_max_priority_override() -> None
```

##### `reset_min_priority_override` <a name="reset_min_priority_override" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetMinPriorityOverride"></a>

```python
def reset_min_priority_override() -> None
```

##### `reset_priority_weight` <a name="reset_priority_weight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetPriorityWeight"></a>

```python
def reset_priority_weight() -> None
```

##### `reset_rendering_task_buffer` <a name="reset_rendering_task_buffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetRenderingTaskBuffer"></a>

```python
def reset_rendering_task_buffer() -> None
```

##### `reset_rendering_task_weight` <a name="reset_rendering_task_weight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetRenderingTaskWeight"></a>

```python
def reset_rendering_task_weight() -> None
```

##### `reset_submission_time_weight` <a name="reset_submission_time_weight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetSubmissionTimeWeight"></a>

```python
def reset_submission_time_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.maxPriorityOverride">max_priority_override</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.minPriorityOverride">min_priority_override</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.errorWeightInput">error_weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.maxPriorityOverrideInput">max_priority_override_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.minPriorityOverrideInput">min_priority_override_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.priorityWeightInput">priority_weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskBufferInput">rendering_task_buffer_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskWeightInput">rendering_task_weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.submissionTimeWeightInput">submission_time_weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.errorWeight">error_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.priorityWeight">priority_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskBuffer">rendering_task_buffer</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskWeight">rendering_task_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.submissionTimeWeight">submission_time_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_priority_override`<sup>Required</sup> <a name="max_priority_override" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.maxPriorityOverride"></a>

```python
max_priority_override: DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference</a>

---

##### `min_priority_override`<sup>Required</sup> <a name="min_priority_override" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.minPriorityOverride"></a>

```python
min_priority_override: DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference</a>

---

##### `error_weight_input`<sup>Optional</sup> <a name="error_weight_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.errorWeightInput"></a>

```python
error_weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_priority_override_input`<sup>Optional</sup> <a name="max_priority_override_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.maxPriorityOverrideInput"></a>

```python
max_priority_override_input: IResolvable | DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a>

---

##### `min_priority_override_input`<sup>Optional</sup> <a name="min_priority_override_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.minPriorityOverrideInput"></a>

```python
min_priority_override_input: IResolvable | DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a>

---

##### `priority_weight_input`<sup>Optional</sup> <a name="priority_weight_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.priorityWeightInput"></a>

```python
priority_weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rendering_task_buffer_input`<sup>Optional</sup> <a name="rendering_task_buffer_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskBufferInput"></a>

```python
rendering_task_buffer_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rendering_task_weight_input`<sup>Optional</sup> <a name="rendering_task_weight_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskWeightInput"></a>

```python
rendering_task_weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `submission_time_weight_input`<sup>Optional</sup> <a name="submission_time_weight_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.submissionTimeWeightInput"></a>

```python
submission_time_weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_weight`<sup>Required</sup> <a name="error_weight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.errorWeight"></a>

```python
error_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority_weight`<sup>Required</sup> <a name="priority_weight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.priorityWeight"></a>

```python
priority_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rendering_task_buffer`<sup>Required</sup> <a name="rendering_task_buffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskBuffer"></a>

```python
rendering_task_buffer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rendering_task_weight`<sup>Required</sup> <a name="rendering_task_weight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskWeight"></a>

```python
rendering_task_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `submission_time_weight`<sup>Required</sup> <a name="submission_time_weight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.submissionTimeWeight"></a>

```python
submission_time_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineQueueSchedulingConfigurationWeightedBalanced
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a>

---


### DeadlineQueueTagsList <a name="DeadlineQueueTagsList" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DeadlineQueueTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DeadlineQueueTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>]

---


### DeadlineQueueTagsOutputReference <a name="DeadlineQueueTagsOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_queue

deadlineQueue.DeadlineQueueTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineQueueTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>

---



