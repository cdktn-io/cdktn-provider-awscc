# `cloudformationChangeSet` Submodule <a name="`cloudformationChangeSet` Submodule" id="@cdktn/provider-awscc.cloudformationChangeSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationChangeSet <a name="CloudformationChangeSet" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set awscc_cloudformation_change_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_change_set

cloudformationChangeSet.CloudformationChangeSet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  change_set_name: str,
  stack_name: str,
  capabilities: typing.List[str] = None,
  change_set_type: str = None,
  deployment_mode: str = None,
  description: str = None,
  import_existing_resources: bool | IResolvable = None,
  include_nested_stacks: bool | IResolvable = None,
  notification_ar_ns: typing.List[str] = None,
  on_stack_failure: str = None,
  role_arn: str = None,
  tags: IResolvable | typing.List[CloudformationChangeSetTags] = None,
  template_body: str = None,
  template_url: str = None,
  use_previous_template: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.changeSetName">change_set_name</a></code> | <code>str</code> | The name of the change set. Must be unique among all change sets associated with the specified stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.stackName">stack_name</a></code> | <code>str</code> | The name or unique ID of the stack for which you are creating a change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | The capabilities that are allowed in the stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.changeSetType">change_set_type</a></code> | <code>str</code> | The type of change set operation. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.deploymentMode">deployment_mode</a></code> | <code>str</code> | Determines how CloudFormation handles configuration drift during deployment. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.description">description</a></code> | <code>str</code> | A description to help you identify this change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.importExistingResources">import_existing_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if the change set imports resources that already exist. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.includeNestedStacks">include_nested_stacks</a></code> | <code>bool \| cdktn.IResolvable</code> | Creates a change set for all nested stacks specified in the template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.notificationArNs">notification_ar_ns</a></code> | <code>typing.List[str]</code> | The ARNs of Amazon SNS topics that CloudFormation associates with the stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.onStackFailure">on_stack_failure</a></code> | <code>str</code> | Determines what action will be taken if stack creation fails. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The ARN of an IAM role that CloudFormation assumes when executing the change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>]</code> | Key-value pairs to associate with the change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.templateBody">template_body</a></code> | <code>str</code> | A structure that contains the body of the revised template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.templateUrl">template_url</a></code> | <code>str</code> | The URL of the file that contains the revised template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.usePreviousTemplate">use_previous_template</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to reuse the template associated with the stack to create the change set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `change_set_name`<sup>Required</sup> <a name="change_set_name" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.changeSetName"></a>

- *Type:* str

The name of the change set. Must be unique among all change sets associated with the specified stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#change_set_name CloudformationChangeSet#change_set_name}

---

##### `stack_name`<sup>Required</sup> <a name="stack_name" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.stackName"></a>

- *Type:* str

The name or unique ID of the stack for which you are creating a change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#stack_name CloudformationChangeSet#stack_name}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.capabilities"></a>

- *Type:* typing.List[str]

The capabilities that are allowed in the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#capabilities CloudformationChangeSet#capabilities}

---

##### `change_set_type`<sup>Optional</sup> <a name="change_set_type" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.changeSetType"></a>

- *Type:* str

The type of change set operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#change_set_type CloudformationChangeSet#change_set_type}

---

##### `deployment_mode`<sup>Optional</sup> <a name="deployment_mode" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.deploymentMode"></a>

- *Type:* str

Determines how CloudFormation handles configuration drift during deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#deployment_mode CloudformationChangeSet#deployment_mode}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.description"></a>

- *Type:* str

A description to help you identify this change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#description CloudformationChangeSet#description}

---

##### `import_existing_resources`<sup>Optional</sup> <a name="import_existing_resources" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.importExistingResources"></a>

- *Type:* bool | cdktn.IResolvable

Indicates if the change set imports resources that already exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#import_existing_resources CloudformationChangeSet#import_existing_resources}

---

##### `include_nested_stacks`<sup>Optional</sup> <a name="include_nested_stacks" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.includeNestedStacks"></a>

- *Type:* bool | cdktn.IResolvable

Creates a change set for all nested stacks specified in the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#include_nested_stacks CloudformationChangeSet#include_nested_stacks}

---

##### `notification_ar_ns`<sup>Optional</sup> <a name="notification_ar_ns" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.notificationArNs"></a>

- *Type:* typing.List[str]

The ARNs of Amazon SNS topics that CloudFormation associates with the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#notification_ar_ns CloudformationChangeSet#notification_ar_ns}

---

##### `on_stack_failure`<sup>Optional</sup> <a name="on_stack_failure" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.onStackFailure"></a>

- *Type:* str

Determines what action will be taken if stack creation fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#on_stack_failure CloudformationChangeSet#on_stack_failure}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.roleArn"></a>

- *Type:* str

The ARN of an IAM role that CloudFormation assumes when executing the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#role_arn CloudformationChangeSet#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>]

Key-value pairs to associate with the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#tags CloudformationChangeSet#tags}

---

##### `template_body`<sup>Optional</sup> <a name="template_body" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.templateBody"></a>

- *Type:* str

A structure that contains the body of the revised template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#template_body CloudformationChangeSet#template_body}

---

##### `template_url`<sup>Optional</sup> <a name="template_url" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.templateUrl"></a>

- *Type:* str

The URL of the file that contains the revised template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#template_url CloudformationChangeSet#template_url}

---

##### `use_previous_template`<sup>Optional</sup> <a name="use_previous_template" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.usePreviousTemplate"></a>

- *Type:* bool | cdktn.IResolvable

Whether to reuse the template associated with the stack to create the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#use_previous_template CloudformationChangeSet#use_previous_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetCapabilities">reset_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetChangeSetType">reset_change_set_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDeploymentMode">reset_deployment_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetImportExistingResources">reset_import_existing_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetIncludeNestedStacks">reset_include_nested_stacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetNotificationArNs">reset_notification_ar_ns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOnStackFailure">reset_on_stack_failure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateBody">reset_template_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateUrl">reset_template_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetUsePreviousTemplate">reset_use_previous_template</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CloudformationChangeSetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>]

---

##### `reset_capabilities` <a name="reset_capabilities" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetCapabilities"></a>

```python
def reset_capabilities() -> None
```

##### `reset_change_set_type` <a name="reset_change_set_type" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetChangeSetType"></a>

```python
def reset_change_set_type() -> None
```

##### `reset_deployment_mode` <a name="reset_deployment_mode" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDeploymentMode"></a>

```python
def reset_deployment_mode() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_import_existing_resources` <a name="reset_import_existing_resources" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetImportExistingResources"></a>

```python
def reset_import_existing_resources() -> None
```

##### `reset_include_nested_stacks` <a name="reset_include_nested_stacks" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetIncludeNestedStacks"></a>

```python
def reset_include_nested_stacks() -> None
```

##### `reset_notification_ar_ns` <a name="reset_notification_ar_ns" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetNotificationArNs"></a>

```python
def reset_notification_ar_ns() -> None
```

##### `reset_on_stack_failure` <a name="reset_on_stack_failure" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOnStackFailure"></a>

```python
def reset_on_stack_failure() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template_body` <a name="reset_template_body" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateBody"></a>

```python
def reset_template_body() -> None
```

##### `reset_template_url` <a name="reset_template_url" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateUrl"></a>

```python
def reset_template_url() -> None
```

##### `reset_use_previous_template` <a name="reset_use_previous_template" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetUsePreviousTemplate"></a>

```python
def reset_use_previous_template() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudformationChangeSet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudformation_change_set

cloudformationChangeSet.CloudformationChangeSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudformation_change_set

cloudformationChangeSet.CloudformationChangeSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudformation_change_set

cloudformationChangeSet.CloudformationChangeSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudformation_change_set

cloudformationChangeSet.CloudformationChangeSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudformationChangeSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudformationChangeSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudformationChangeSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationChangeSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetId">change_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackId">stack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList">CloudformationChangeSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilitiesInput">capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetNameInput">change_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetTypeInput">change_set_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentModeInput">deployment_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResourcesInput">import_existing_resources_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacksInput">include_nested_stacks_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNsInput">notification_ar_ns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailureInput">on_stack_failure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackNameInput">stack_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBodyInput">template_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrlInput">template_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplateInput">use_previous_template_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetName">change_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetType">change_set_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentMode">deployment_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResources">import_existing_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacks">include_nested_stacks</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNs">notification_ar_ns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailure">on_stack_failure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackName">stack_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBody">template_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrl">template_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplate">use_previous_template</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `change_set_id`<sup>Required</sup> <a name="change_set_id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetId"></a>

```python
change_set_id: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tags"></a>

```python
tags: CloudformationChangeSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList">CloudformationChangeSetTagsList</a>

---

##### `capabilities_input`<sup>Optional</sup> <a name="capabilities_input" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilitiesInput"></a>

```python
capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `change_set_name_input`<sup>Optional</sup> <a name="change_set_name_input" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetNameInput"></a>

```python
change_set_name_input: str
```

- *Type:* str

---

##### `change_set_type_input`<sup>Optional</sup> <a name="change_set_type_input" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetTypeInput"></a>

```python
change_set_type_input: str
```

- *Type:* str

---

##### `deployment_mode_input`<sup>Optional</sup> <a name="deployment_mode_input" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentModeInput"></a>

```python
deployment_mode_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `import_existing_resources_input`<sup>Optional</sup> <a name="import_existing_resources_input" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResourcesInput"></a>

```python
import_existing_resources_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_nested_stacks_input`<sup>Optional</sup> <a name="include_nested_stacks_input" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacksInput"></a>

```python
include_nested_stacks_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `notification_ar_ns_input`<sup>Optional</sup> <a name="notification_ar_ns_input" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNsInput"></a>

```python
notification_ar_ns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `on_stack_failure_input`<sup>Optional</sup> <a name="on_stack_failure_input" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailureInput"></a>

```python
on_stack_failure_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `stack_name_input`<sup>Optional</sup> <a name="stack_name_input" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackNameInput"></a>

```python
stack_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CloudformationChangeSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>]

---

##### `template_body_input`<sup>Optional</sup> <a name="template_body_input" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBodyInput"></a>

```python
template_body_input: str
```

- *Type:* str

---

##### `template_url_input`<sup>Optional</sup> <a name="template_url_input" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrlInput"></a>

```python
template_url_input: str
```

- *Type:* str

---

##### `use_previous_template_input`<sup>Optional</sup> <a name="use_previous_template_input" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplateInput"></a>

```python
use_previous_template_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `change_set_name`<sup>Required</sup> <a name="change_set_name" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetName"></a>

```python
change_set_name: str
```

- *Type:* str

---

##### `change_set_type`<sup>Required</sup> <a name="change_set_type" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetType"></a>

```python
change_set_type: str
```

- *Type:* str

---

##### `deployment_mode`<sup>Required</sup> <a name="deployment_mode" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentMode"></a>

```python
deployment_mode: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `import_existing_resources`<sup>Required</sup> <a name="import_existing_resources" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResources"></a>

```python
import_existing_resources: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_nested_stacks`<sup>Required</sup> <a name="include_nested_stacks" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacks"></a>

```python
include_nested_stacks: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `notification_ar_ns`<sup>Required</sup> <a name="notification_ar_ns" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNs"></a>

```python
notification_ar_ns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `on_stack_failure`<sup>Required</sup> <a name="on_stack_failure" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailure"></a>

```python
on_stack_failure: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `stack_name`<sup>Required</sup> <a name="stack_name" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackName"></a>

```python
stack_name: str
```

- *Type:* str

---

##### `template_body`<sup>Required</sup> <a name="template_body" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

---

##### `template_url`<sup>Required</sup> <a name="template_url" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrl"></a>

```python
template_url: str
```

- *Type:* str

---

##### `use_previous_template`<sup>Required</sup> <a name="use_previous_template" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplate"></a>

```python
use_previous_template: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationChangeSetConfig <a name="CloudformationChangeSetConfig" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_change_set

cloudformationChangeSet.CloudformationChangeSetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  change_set_name: str,
  stack_name: str,
  capabilities: typing.List[str] = None,
  change_set_type: str = None,
  deployment_mode: str = None,
  description: str = None,
  import_existing_resources: bool | IResolvable = None,
  include_nested_stacks: bool | IResolvable = None,
  notification_ar_ns: typing.List[str] = None,
  on_stack_failure: str = None,
  role_arn: str = None,
  tags: IResolvable | typing.List[CloudformationChangeSetTags] = None,
  template_body: str = None,
  template_url: str = None,
  use_previous_template: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetName">change_set_name</a></code> | <code>str</code> | The name of the change set. Must be unique among all change sets associated with the specified stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.stackName">stack_name</a></code> | <code>str</code> | The name or unique ID of the stack for which you are creating a change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | The capabilities that are allowed in the stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetType">change_set_type</a></code> | <code>str</code> | The type of change set operation. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.deploymentMode">deployment_mode</a></code> | <code>str</code> | Determines how CloudFormation handles configuration drift during deployment. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.description">description</a></code> | <code>str</code> | A description to help you identify this change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.importExistingResources">import_existing_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if the change set imports resources that already exist. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.includeNestedStacks">include_nested_stacks</a></code> | <code>bool \| cdktn.IResolvable</code> | Creates a change set for all nested stacks specified in the template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.notificationArNs">notification_ar_ns</a></code> | <code>typing.List[str]</code> | The ARNs of Amazon SNS topics that CloudFormation associates with the stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.onStackFailure">on_stack_failure</a></code> | <code>str</code> | Determines what action will be taken if stack creation fails. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of an IAM role that CloudFormation assumes when executing the change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>]</code> | Key-value pairs to associate with the change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateBody">template_body</a></code> | <code>str</code> | A structure that contains the body of the revised template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateUrl">template_url</a></code> | <code>str</code> | The URL of the file that contains the revised template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.usePreviousTemplate">use_previous_template</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to reuse the template associated with the stack to create the change set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `change_set_name`<sup>Required</sup> <a name="change_set_name" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetName"></a>

```python
change_set_name: str
```

- *Type:* str

The name of the change set. Must be unique among all change sets associated with the specified stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#change_set_name CloudformationChangeSet#change_set_name}

---

##### `stack_name`<sup>Required</sup> <a name="stack_name" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.stackName"></a>

```python
stack_name: str
```

- *Type:* str

The name or unique ID of the stack for which you are creating a change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#stack_name CloudformationChangeSet#stack_name}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

The capabilities that are allowed in the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#capabilities CloudformationChangeSet#capabilities}

---

##### `change_set_type`<sup>Optional</sup> <a name="change_set_type" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetType"></a>

```python
change_set_type: str
```

- *Type:* str

The type of change set operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#change_set_type CloudformationChangeSet#change_set_type}

---

##### `deployment_mode`<sup>Optional</sup> <a name="deployment_mode" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.deploymentMode"></a>

```python
deployment_mode: str
```

- *Type:* str

Determines how CloudFormation handles configuration drift during deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#deployment_mode CloudformationChangeSet#deployment_mode}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description to help you identify this change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#description CloudformationChangeSet#description}

---

##### `import_existing_resources`<sup>Optional</sup> <a name="import_existing_resources" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.importExistingResources"></a>

```python
import_existing_resources: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates if the change set imports resources that already exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#import_existing_resources CloudformationChangeSet#import_existing_resources}

---

##### `include_nested_stacks`<sup>Optional</sup> <a name="include_nested_stacks" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.includeNestedStacks"></a>

```python
include_nested_stacks: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Creates a change set for all nested stacks specified in the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#include_nested_stacks CloudformationChangeSet#include_nested_stacks}

---

##### `notification_ar_ns`<sup>Optional</sup> <a name="notification_ar_ns" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.notificationArNs"></a>

```python
notification_ar_ns: typing.List[str]
```

- *Type:* typing.List[str]

The ARNs of Amazon SNS topics that CloudFormation associates with the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#notification_ar_ns CloudformationChangeSet#notification_ar_ns}

---

##### `on_stack_failure`<sup>Optional</sup> <a name="on_stack_failure" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.onStackFailure"></a>

```python
on_stack_failure: str
```

- *Type:* str

Determines what action will be taken if stack creation fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#on_stack_failure CloudformationChangeSet#on_stack_failure}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of an IAM role that CloudFormation assumes when executing the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#role_arn CloudformationChangeSet#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CloudformationChangeSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>]

Key-value pairs to associate with the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#tags CloudformationChangeSet#tags}

---

##### `template_body`<sup>Optional</sup> <a name="template_body" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

A structure that contains the body of the revised template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#template_body CloudformationChangeSet#template_body}

---

##### `template_url`<sup>Optional</sup> <a name="template_url" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateUrl"></a>

```python
template_url: str
```

- *Type:* str

The URL of the file that contains the revised template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#template_url CloudformationChangeSet#template_url}

---

##### `use_previous_template`<sup>Optional</sup> <a name="use_previous_template" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.usePreviousTemplate"></a>

```python
use_previous_template: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to reuse the template associated with the stack to create the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#use_previous_template CloudformationChangeSet#use_previous_template}

---

### CloudformationChangeSetTags <a name="CloudformationChangeSetTags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_change_set

cloudformationChangeSet.CloudformationChangeSetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#key CloudformationChangeSet#key}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#value CloudformationChangeSet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#key CloudformationChangeSet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#value CloudformationChangeSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationChangeSetTagsList <a name="CloudformationChangeSetTagsList" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_change_set

cloudformationChangeSet.CloudformationChangeSetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudformationChangeSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudformationChangeSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>]

---


### CloudformationChangeSetTagsOutputReference <a name="CloudformationChangeSetTagsOutputReference" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_change_set

cloudformationChangeSet.CloudformationChangeSetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationChangeSetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>

---



