# `cloudformationStack` Submodule <a name="`cloudformationStack` Submodule" id="@cdktn/provider-awscc.cloudformationStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationStack <a name="CloudformationStack" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack awscc_cloudformation_stack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack

cloudformationStack.CloudformationStack(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  stack_name: str,
  capabilities: typing.List[str] = None,
  description: str = None,
  disable_rollback: bool | IResolvable = None,
  enable_termination_protection: bool | IResolvable = None,
  notification_ar_ns: typing.List[str] = None,
  parameters: typing.Mapping[str] = None,
  role_arn: str = None,
  stack_policy_body: str = None,
  stack_policy_url: str = None,
  stack_status_reason: str = None,
  tags: IResolvable | typing.List[CloudformationStackTags] = None,
  template_body: str = None,
  template_url: str = None,
  timeout_in_minutes: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.stackName">stack_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_name CloudformationStack#stack_name}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#capabilities CloudformationStack#capabilities}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#description CloudformationStack#description}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.disableRollback">disable_rollback</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#disable_rollback CloudformationStack#disable_rollback}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.enableTerminationProtection">enable_termination_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#enable_termination_protection CloudformationStack#enable_termination_protection}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.notificationArNs">notification_ar_ns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#notification_ar_ns CloudformationStack#notification_ar_ns}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#parameters CloudformationStack#parameters}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#role_arn CloudformationStack#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.stackPolicyBody">stack_policy_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_policy_body CloudformationStack#stack_policy_body}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.stackPolicyUrl">stack_policy_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_policy_url CloudformationStack#stack_policy_url}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.stackStatusReason">stack_status_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_status_reason CloudformationStack#stack_status_reason}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#tags CloudformationStack#tags}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.templateBody">template_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#template_body CloudformationStack#template_body}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.templateUrl">template_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#template_url CloudformationStack#template_url}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#timeout_in_minutes CloudformationStack#timeout_in_minutes}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `stack_name`<sup>Required</sup> <a name="stack_name" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.stackName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_name CloudformationStack#stack_name}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.capabilities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#capabilities CloudformationStack#capabilities}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#description CloudformationStack#description}.

---

##### `disable_rollback`<sup>Optional</sup> <a name="disable_rollback" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.disableRollback"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#disable_rollback CloudformationStack#disable_rollback}.

---

##### `enable_termination_protection`<sup>Optional</sup> <a name="enable_termination_protection" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.enableTerminationProtection"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#enable_termination_protection CloudformationStack#enable_termination_protection}.

---

##### `notification_ar_ns`<sup>Optional</sup> <a name="notification_ar_ns" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.notificationArNs"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#notification_ar_ns CloudformationStack#notification_ar_ns}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#parameters CloudformationStack#parameters}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#role_arn CloudformationStack#role_arn}.

---

##### `stack_policy_body`<sup>Optional</sup> <a name="stack_policy_body" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.stackPolicyBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_policy_body CloudformationStack#stack_policy_body}.

---

##### `stack_policy_url`<sup>Optional</sup> <a name="stack_policy_url" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.stackPolicyUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_policy_url CloudformationStack#stack_policy_url}.

---

##### `stack_status_reason`<sup>Optional</sup> <a name="stack_status_reason" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.stackStatusReason"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_status_reason CloudformationStack#stack_status_reason}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#tags CloudformationStack#tags}.

---

##### `template_body`<sup>Optional</sup> <a name="template_body" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.templateBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#template_body CloudformationStack#template_body}.

---

##### `template_url`<sup>Optional</sup> <a name="template_url" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.templateUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#template_url CloudformationStack#template_url}.

---

##### `timeout_in_minutes`<sup>Optional</sup> <a name="timeout_in_minutes" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.timeoutInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#timeout_in_minutes CloudformationStack#timeout_in_minutes}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetCapabilities">reset_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetDisableRollback">reset_disable_rollback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetEnableTerminationProtection">reset_enable_termination_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetNotificationArNs">reset_notification_ar_ns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetStackPolicyBody">reset_stack_policy_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetStackPolicyUrl">reset_stack_policy_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetStackStatusReason">reset_stack_status_reason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetTemplateBody">reset_template_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetTemplateUrl">reset_template_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetTimeoutInMinutes">reset_timeout_in_minutes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CloudformationStackTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a>]

---

##### `reset_capabilities` <a name="reset_capabilities" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetCapabilities"></a>

```python
def reset_capabilities() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_rollback` <a name="reset_disable_rollback" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetDisableRollback"></a>

```python
def reset_disable_rollback() -> None
```

##### `reset_enable_termination_protection` <a name="reset_enable_termination_protection" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetEnableTerminationProtection"></a>

```python
def reset_enable_termination_protection() -> None
```

##### `reset_notification_ar_ns` <a name="reset_notification_ar_ns" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetNotificationArNs"></a>

```python
def reset_notification_ar_ns() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_stack_policy_body` <a name="reset_stack_policy_body" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetStackPolicyBody"></a>

```python
def reset_stack_policy_body() -> None
```

##### `reset_stack_policy_url` <a name="reset_stack_policy_url" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetStackPolicyUrl"></a>

```python
def reset_stack_policy_url() -> None
```

##### `reset_stack_status_reason` <a name="reset_stack_status_reason" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetStackStatusReason"></a>

```python
def reset_stack_status_reason() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template_body` <a name="reset_template_body" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetTemplateBody"></a>

```python
def reset_template_body() -> None
```

##### `reset_template_url` <a name="reset_template_url" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetTemplateUrl"></a>

```python
def reset_template_url() -> None
```

##### `reset_timeout_in_minutes` <a name="reset_timeout_in_minutes" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetTimeoutInMinutes"></a>

```python
def reset_timeout_in_minutes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudformationStack resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudformation_stack

cloudformationStack.CloudformationStack.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudformation_stack

cloudformationStack.CloudformationStack.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudformation_stack

cloudformationStack.CloudformationStack.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudformation_stack

cloudformationStack.CloudformationStack.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudformationStack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudformationStack to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudformationStack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationStack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.changeSetId">change_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.lastUpdateTime">last_update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList">CloudformationStackOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.rootId">root_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackId">stack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackStatus">stack_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList">CloudformationStackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.capabilitiesInput">capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.disableRollbackInput">disable_rollback_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.enableTerminationProtectionInput">enable_termination_protection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.notificationArNsInput">notification_ar_ns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackNameInput">stack_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackPolicyBodyInput">stack_policy_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackPolicyUrlInput">stack_policy_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackStatusReasonInput">stack_status_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.templateBodyInput">template_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.templateUrlInput">template_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.timeoutInMinutesInput">timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.disableRollback">disable_rollback</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.enableTerminationProtection">enable_termination_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.notificationArNs">notification_ar_ns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackName">stack_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackPolicyBody">stack_policy_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackPolicyUrl">stack_policy_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackStatusReason">stack_status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.templateBody">template_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.templateUrl">template_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `change_set_id`<sup>Required</sup> <a name="change_set_id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.changeSetId"></a>

```python
change_set_id: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_update_time`<sup>Required</sup> <a name="last_update_time" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.lastUpdateTime"></a>

```python
last_update_time: str
```

- *Type:* str

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.outputs"></a>

```python
outputs: CloudformationStackOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList">CloudformationStackOutputsList</a>

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `root_id`<sup>Required</sup> <a name="root_id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.rootId"></a>

```python
root_id: str
```

- *Type:* str

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

---

##### `stack_status`<sup>Required</sup> <a name="stack_status" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackStatus"></a>

```python
stack_status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.tags"></a>

```python
tags: CloudformationStackTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList">CloudformationStackTagsList</a>

---

##### `capabilities_input`<sup>Optional</sup> <a name="capabilities_input" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.capabilitiesInput"></a>

```python
capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_rollback_input`<sup>Optional</sup> <a name="disable_rollback_input" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.disableRollbackInput"></a>

```python
disable_rollback_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_termination_protection_input`<sup>Optional</sup> <a name="enable_termination_protection_input" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.enableTerminationProtectionInput"></a>

```python
enable_termination_protection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `notification_ar_ns_input`<sup>Optional</sup> <a name="notification_ar_ns_input" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.notificationArNsInput"></a>

```python
notification_ar_ns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `stack_name_input`<sup>Optional</sup> <a name="stack_name_input" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackNameInput"></a>

```python
stack_name_input: str
```

- *Type:* str

---

##### `stack_policy_body_input`<sup>Optional</sup> <a name="stack_policy_body_input" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackPolicyBodyInput"></a>

```python
stack_policy_body_input: str
```

- *Type:* str

---

##### `stack_policy_url_input`<sup>Optional</sup> <a name="stack_policy_url_input" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackPolicyUrlInput"></a>

```python
stack_policy_url_input: str
```

- *Type:* str

---

##### `stack_status_reason_input`<sup>Optional</sup> <a name="stack_status_reason_input" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackStatusReasonInput"></a>

```python
stack_status_reason_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CloudformationStackTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a>]

---

##### `template_body_input`<sup>Optional</sup> <a name="template_body_input" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.templateBodyInput"></a>

```python
template_body_input: str
```

- *Type:* str

---

##### `template_url_input`<sup>Optional</sup> <a name="template_url_input" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.templateUrlInput"></a>

```python
template_url_input: str
```

- *Type:* str

---

##### `timeout_in_minutes_input`<sup>Optional</sup> <a name="timeout_in_minutes_input" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.timeoutInMinutesInput"></a>

```python
timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_rollback`<sup>Required</sup> <a name="disable_rollback" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.disableRollback"></a>

```python
disable_rollback: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_termination_protection`<sup>Required</sup> <a name="enable_termination_protection" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.enableTerminationProtection"></a>

```python
enable_termination_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `notification_ar_ns`<sup>Required</sup> <a name="notification_ar_ns" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.notificationArNs"></a>

```python
notification_ar_ns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `stack_name`<sup>Required</sup> <a name="stack_name" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackName"></a>

```python
stack_name: str
```

- *Type:* str

---

##### `stack_policy_body`<sup>Required</sup> <a name="stack_policy_body" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackPolicyBody"></a>

```python
stack_policy_body: str
```

- *Type:* str

---

##### `stack_policy_url`<sup>Required</sup> <a name="stack_policy_url" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackPolicyUrl"></a>

```python
stack_policy_url: str
```

- *Type:* str

---

##### `stack_status_reason`<sup>Required</sup> <a name="stack_status_reason" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackStatusReason"></a>

```python
stack_status_reason: str
```

- *Type:* str

---

##### `template_body`<sup>Required</sup> <a name="template_body" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

---

##### `template_url`<sup>Required</sup> <a name="template_url" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.templateUrl"></a>

```python
template_url: str
```

- *Type:* str

---

##### `timeout_in_minutes`<sup>Required</sup> <a name="timeout_in_minutes" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.timeoutInMinutes"></a>

```python
timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationStackConfig <a name="CloudformationStackConfig" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack

cloudformationStack.CloudformationStackConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  stack_name: str,
  capabilities: typing.List[str] = None,
  description: str = None,
  disable_rollback: bool | IResolvable = None,
  enable_termination_protection: bool | IResolvable = None,
  notification_ar_ns: typing.List[str] = None,
  parameters: typing.Mapping[str] = None,
  role_arn: str = None,
  stack_policy_body: str = None,
  stack_policy_url: str = None,
  stack_status_reason: str = None,
  tags: IResolvable | typing.List[CloudformationStackTags] = None,
  template_body: str = None,
  template_url: str = None,
  timeout_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.stackName">stack_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_name CloudformationStack#stack_name}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#capabilities CloudformationStack#capabilities}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#description CloudformationStack#description}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.disableRollback">disable_rollback</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#disable_rollback CloudformationStack#disable_rollback}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.enableTerminationProtection">enable_termination_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#enable_termination_protection CloudformationStack#enable_termination_protection}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.notificationArNs">notification_ar_ns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#notification_ar_ns CloudformationStack#notification_ar_ns}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#parameters CloudformationStack#parameters}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#role_arn CloudformationStack#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.stackPolicyBody">stack_policy_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_policy_body CloudformationStack#stack_policy_body}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.stackPolicyUrl">stack_policy_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_policy_url CloudformationStack#stack_policy_url}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.stackStatusReason">stack_status_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_status_reason CloudformationStack#stack_status_reason}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#tags CloudformationStack#tags}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.templateBody">template_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#template_body CloudformationStack#template_body}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.templateUrl">template_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#template_url CloudformationStack#template_url}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#timeout_in_minutes CloudformationStack#timeout_in_minutes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `stack_name`<sup>Required</sup> <a name="stack_name" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.stackName"></a>

```python
stack_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_name CloudformationStack#stack_name}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#capabilities CloudformationStack#capabilities}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#description CloudformationStack#description}.

---

##### `disable_rollback`<sup>Optional</sup> <a name="disable_rollback" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.disableRollback"></a>

```python
disable_rollback: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#disable_rollback CloudformationStack#disable_rollback}.

---

##### `enable_termination_protection`<sup>Optional</sup> <a name="enable_termination_protection" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.enableTerminationProtection"></a>

```python
enable_termination_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#enable_termination_protection CloudformationStack#enable_termination_protection}.

---

##### `notification_ar_ns`<sup>Optional</sup> <a name="notification_ar_ns" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.notificationArNs"></a>

```python
notification_ar_ns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#notification_ar_ns CloudformationStack#notification_ar_ns}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#parameters CloudformationStack#parameters}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#role_arn CloudformationStack#role_arn}.

---

##### `stack_policy_body`<sup>Optional</sup> <a name="stack_policy_body" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.stackPolicyBody"></a>

```python
stack_policy_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_policy_body CloudformationStack#stack_policy_body}.

---

##### `stack_policy_url`<sup>Optional</sup> <a name="stack_policy_url" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.stackPolicyUrl"></a>

```python
stack_policy_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_policy_url CloudformationStack#stack_policy_url}.

---

##### `stack_status_reason`<sup>Optional</sup> <a name="stack_status_reason" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.stackStatusReason"></a>

```python
stack_status_reason: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_status_reason CloudformationStack#stack_status_reason}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CloudformationStackTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#tags CloudformationStack#tags}.

---

##### `template_body`<sup>Optional</sup> <a name="template_body" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#template_body CloudformationStack#template_body}.

---

##### `template_url`<sup>Optional</sup> <a name="template_url" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.templateUrl"></a>

```python
template_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#template_url CloudformationStack#template_url}.

---

##### `timeout_in_minutes`<sup>Optional</sup> <a name="timeout_in_minutes" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.timeoutInMinutes"></a>

```python
timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#timeout_in_minutes CloudformationStack#timeout_in_minutes}.

---

### CloudformationStackOutputs <a name="CloudformationStackOutputs" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputs.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack

cloudformationStack.CloudformationStackOutputs()
```


### CloudformationStackTags <a name="CloudformationStackTags" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack

cloudformationStack.CloudformationStackTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#key CloudformationStack#key}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#value CloudformationStack#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#key CloudformationStack#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#value CloudformationStack#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationStackOutputsList <a name="CloudformationStackOutputsList" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack

cloudformationStack.CloudformationStackOutputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudformationStackOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CloudformationStackOutputsOutputReference <a name="CloudformationStackOutputsOutputReference" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack

cloudformationStack.CloudformationStackOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.exportName">export_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.outputKey">output_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.outputValue">output_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputs">CloudformationStackOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `export_name`<sup>Required</sup> <a name="export_name" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.exportName"></a>

```python
export_name: str
```

- *Type:* str

---

##### `output_key`<sup>Required</sup> <a name="output_key" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.outputKey"></a>

```python
output_key: str
```

- *Type:* str

---

##### `output_value`<sup>Required</sup> <a name="output_value" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.outputValue"></a>

```python
output_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.internalValue"></a>

```python
internal_value: CloudformationStackOutputs
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputs">CloudformationStackOutputs</a>

---


### CloudformationStackTagsList <a name="CloudformationStackTagsList" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack

cloudformationStack.CloudformationStackTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudformationStackTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudformationStackTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a>]

---


### CloudformationStackTagsOutputReference <a name="CloudformationStackTagsOutputReference" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack

cloudformationStack.CloudformationStackTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationStackTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a>

---



