# `chatbotSlackChannelConfiguration` Submodule <a name="`chatbotSlackChannelConfiguration` Submodule" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChatbotSlackChannelConfiguration <a name="ChatbotSlackChannelConfiguration" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration awscc_chatbot_slack_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import chatbot_slack_channel_configuration

chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration_name: str,
  iam_role_arn: str,
  slack_channel_id: str,
  slack_workspace_id: str,
  customization_resource_arns: typing.List[str] = None,
  guardrail_policies: typing.List[str] = None,
  logging_level: str = None,
  sns_topic_arns: typing.List[str] = None,
  tags: IResolvable | typing.List[ChatbotSlackChannelConfigurationTags] = None,
  user_role_required: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.configurationName">configuration_name</a></code> | <code>str</code> | The name of the configuration. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | The ARN of the IAM role that defines the permissions for AWS Chatbot. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.slackChannelId">slack_channel_id</a></code> | <code>str</code> | The id of the Slack channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.slackWorkspaceId">slack_workspace_id</a></code> | <code>str</code> | The id of the Slack workspace. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.customizationResourceArns">customization_resource_arns</a></code> | <code>typing.List[str]</code> | ARNs of Custom Actions to associate with notifications in the provided chat channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.guardrailPolicies">guardrail_policies</a></code> | <code>typing.List[str]</code> | The list of IAM policy ARNs that are applied as channel guardrails. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.loggingLevel">logging_level</a></code> | <code>str</code> | Specifies the logging level for this configuration:ERROR,INFO or NONE. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.snsTopicArns">sns_topic_arns</a></code> | <code>typing.List[str]</code> | ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>]</code> | The tags to add to the configuration. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.userRoleRequired">user_role_required</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables use of a user role requirement in your chat configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_name`<sup>Required</sup> <a name="configuration_name" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.configurationName"></a>

- *Type:* str

The name of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#configuration_name ChatbotSlackChannelConfiguration#configuration_name}

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.iamRoleArn"></a>

- *Type:* str

The ARN of the IAM role that defines the permissions for AWS Chatbot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#iam_role_arn ChatbotSlackChannelConfiguration#iam_role_arn}

---

##### `slack_channel_id`<sup>Required</sup> <a name="slack_channel_id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.slackChannelId"></a>

- *Type:* str

The id of the Slack channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#slack_channel_id ChatbotSlackChannelConfiguration#slack_channel_id}

---

##### `slack_workspace_id`<sup>Required</sup> <a name="slack_workspace_id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.slackWorkspaceId"></a>

- *Type:* str

The id of the Slack workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#slack_workspace_id ChatbotSlackChannelConfiguration#slack_workspace_id}

---

##### `customization_resource_arns`<sup>Optional</sup> <a name="customization_resource_arns" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.customizationResourceArns"></a>

- *Type:* typing.List[str]

ARNs of Custom Actions to associate with notifications in the provided chat channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#customization_resource_arns ChatbotSlackChannelConfiguration#customization_resource_arns}

---

##### `guardrail_policies`<sup>Optional</sup> <a name="guardrail_policies" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.guardrailPolicies"></a>

- *Type:* typing.List[str]

The list of IAM policy ARNs that are applied as channel guardrails.

The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#guardrail_policies ChatbotSlackChannelConfiguration#guardrail_policies}

---

##### `logging_level`<sup>Optional</sup> <a name="logging_level" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.loggingLevel"></a>

- *Type:* str

Specifies the logging level for this configuration:ERROR,INFO or NONE.

This property affects the log entries pushed to Amazon CloudWatch logs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#logging_level ChatbotSlackChannelConfiguration#logging_level}

---

##### `sns_topic_arns`<sup>Optional</sup> <a name="sns_topic_arns" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.snsTopicArns"></a>

- *Type:* typing.List[str]

ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#sns_topic_arns ChatbotSlackChannelConfiguration#sns_topic_arns}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>]

The tags to add to the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#tags ChatbotSlackChannelConfiguration#tags}

---

##### `user_role_required`<sup>Optional</sup> <a name="user_role_required" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.userRoleRequired"></a>

- *Type:* bool | cdktn.IResolvable

Enables use of a user role requirement in your chat configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#user_role_required ChatbotSlackChannelConfiguration#user_role_required}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetCustomizationResourceArns">reset_customization_resource_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetGuardrailPolicies">reset_guardrail_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetLoggingLevel">reset_logging_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetSnsTopicArns">reset_sns_topic_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetUserRoleRequired">reset_user_role_required</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ChatbotSlackChannelConfigurationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>]

---

##### `reset_customization_resource_arns` <a name="reset_customization_resource_arns" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetCustomizationResourceArns"></a>

```python
def reset_customization_resource_arns() -> None
```

##### `reset_guardrail_policies` <a name="reset_guardrail_policies" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetGuardrailPolicies"></a>

```python
def reset_guardrail_policies() -> None
```

##### `reset_logging_level` <a name="reset_logging_level" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetLoggingLevel"></a>

```python
def reset_logging_level() -> None
```

##### `reset_sns_topic_arns` <a name="reset_sns_topic_arns" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetSnsTopicArns"></a>

```python
def reset_sns_topic_arns() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_user_role_required` <a name="reset_user_role_required" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetUserRoleRequired"></a>

```python
def reset_user_role_required() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ChatbotSlackChannelConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import chatbot_slack_channel_configuration

chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import chatbot_slack_channel_configuration

chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import chatbot_slack_channel_configuration

chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import chatbot_slack_channel_configuration

chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ChatbotSlackChannelConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChatbotSlackChannelConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChatbotSlackChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChatbotSlackChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList">ChatbotSlackChannelConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationNameInput">configuration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.customizationResourceArnsInput">customization_resource_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPoliciesInput">guardrail_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevelInput">logging_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelIdInput">slack_channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackWorkspaceIdInput">slack_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArnsInput">sns_topic_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userRoleRequiredInput">user_role_required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationName">configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.customizationResourceArns">customization_resource_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPolicies">guardrail_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevel">logging_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelId">slack_channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackWorkspaceId">slack_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArns">sns_topic_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userRoleRequired">user_role_required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tags"></a>

```python
tags: ChatbotSlackChannelConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList">ChatbotSlackChannelConfigurationTagsList</a>

---

##### `configuration_name_input`<sup>Optional</sup> <a name="configuration_name_input" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationNameInput"></a>

```python
configuration_name_input: str
```

- *Type:* str

---

##### `customization_resource_arns_input`<sup>Optional</sup> <a name="customization_resource_arns_input" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.customizationResourceArnsInput"></a>

```python
customization_resource_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `guardrail_policies_input`<sup>Optional</sup> <a name="guardrail_policies_input" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPoliciesInput"></a>

```python
guardrail_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `logging_level_input`<sup>Optional</sup> <a name="logging_level_input" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevelInput"></a>

```python
logging_level_input: str
```

- *Type:* str

---

##### `slack_channel_id_input`<sup>Optional</sup> <a name="slack_channel_id_input" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelIdInput"></a>

```python
slack_channel_id_input: str
```

- *Type:* str

---

##### `slack_workspace_id_input`<sup>Optional</sup> <a name="slack_workspace_id_input" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackWorkspaceIdInput"></a>

```python
slack_workspace_id_input: str
```

- *Type:* str

---

##### `sns_topic_arns_input`<sup>Optional</sup> <a name="sns_topic_arns_input" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArnsInput"></a>

```python
sns_topic_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ChatbotSlackChannelConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>]

---

##### `user_role_required_input`<sup>Optional</sup> <a name="user_role_required_input" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userRoleRequiredInput"></a>

```python
user_role_required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `configuration_name`<sup>Required</sup> <a name="configuration_name" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationName"></a>

```python
configuration_name: str
```

- *Type:* str

---

##### `customization_resource_arns`<sup>Required</sup> <a name="customization_resource_arns" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.customizationResourceArns"></a>

```python
customization_resource_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `guardrail_policies`<sup>Required</sup> <a name="guardrail_policies" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPolicies"></a>

```python
guardrail_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `logging_level`<sup>Required</sup> <a name="logging_level" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

---

##### `slack_channel_id`<sup>Required</sup> <a name="slack_channel_id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelId"></a>

```python
slack_channel_id: str
```

- *Type:* str

---

##### `slack_workspace_id`<sup>Required</sup> <a name="slack_workspace_id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackWorkspaceId"></a>

```python
slack_workspace_id: str
```

- *Type:* str

---

##### `sns_topic_arns`<sup>Required</sup> <a name="sns_topic_arns" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArns"></a>

```python
sns_topic_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_role_required`<sup>Required</sup> <a name="user_role_required" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userRoleRequired"></a>

```python
user_role_required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChatbotSlackChannelConfigurationConfig <a name="ChatbotSlackChannelConfigurationConfig" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import chatbot_slack_channel_configuration

chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration_name: str,
  iam_role_arn: str,
  slack_channel_id: str,
  slack_workspace_id: str,
  customization_resource_arns: typing.List[str] = None,
  guardrail_policies: typing.List[str] = None,
  logging_level: str = None,
  sns_topic_arns: typing.List[str] = None,
  tags: IResolvable | typing.List[ChatbotSlackChannelConfigurationTags] = None,
  user_role_required: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.configurationName">configuration_name</a></code> | <code>str</code> | The name of the configuration. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | The ARN of the IAM role that defines the permissions for AWS Chatbot. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackChannelId">slack_channel_id</a></code> | <code>str</code> | The id of the Slack channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackWorkspaceId">slack_workspace_id</a></code> | <code>str</code> | The id of the Slack workspace. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.customizationResourceArns">customization_resource_arns</a></code> | <code>typing.List[str]</code> | ARNs of Custom Actions to associate with notifications in the provided chat channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.guardrailPolicies">guardrail_policies</a></code> | <code>typing.List[str]</code> | The list of IAM policy ARNs that are applied as channel guardrails. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.loggingLevel">logging_level</a></code> | <code>str</code> | Specifies the logging level for this configuration:ERROR,INFO or NONE. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.snsTopicArns">sns_topic_arns</a></code> | <code>typing.List[str]</code> | ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>]</code> | The tags to add to the configuration. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.userRoleRequired">user_role_required</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables use of a user role requirement in your chat configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_name`<sup>Required</sup> <a name="configuration_name" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.configurationName"></a>

```python
configuration_name: str
```

- *Type:* str

The name of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#configuration_name ChatbotSlackChannelConfiguration#configuration_name}

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

The ARN of the IAM role that defines the permissions for AWS Chatbot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#iam_role_arn ChatbotSlackChannelConfiguration#iam_role_arn}

---

##### `slack_channel_id`<sup>Required</sup> <a name="slack_channel_id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackChannelId"></a>

```python
slack_channel_id: str
```

- *Type:* str

The id of the Slack channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#slack_channel_id ChatbotSlackChannelConfiguration#slack_channel_id}

---

##### `slack_workspace_id`<sup>Required</sup> <a name="slack_workspace_id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackWorkspaceId"></a>

```python
slack_workspace_id: str
```

- *Type:* str

The id of the Slack workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#slack_workspace_id ChatbotSlackChannelConfiguration#slack_workspace_id}

---

##### `customization_resource_arns`<sup>Optional</sup> <a name="customization_resource_arns" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.customizationResourceArns"></a>

```python
customization_resource_arns: typing.List[str]
```

- *Type:* typing.List[str]

ARNs of Custom Actions to associate with notifications in the provided chat channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#customization_resource_arns ChatbotSlackChannelConfiguration#customization_resource_arns}

---

##### `guardrail_policies`<sup>Optional</sup> <a name="guardrail_policies" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.guardrailPolicies"></a>

```python
guardrail_policies: typing.List[str]
```

- *Type:* typing.List[str]

The list of IAM policy ARNs that are applied as channel guardrails.

The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#guardrail_policies ChatbotSlackChannelConfiguration#guardrail_policies}

---

##### `logging_level`<sup>Optional</sup> <a name="logging_level" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

Specifies the logging level for this configuration:ERROR,INFO or NONE.

This property affects the log entries pushed to Amazon CloudWatch logs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#logging_level ChatbotSlackChannelConfiguration#logging_level}

---

##### `sns_topic_arns`<sup>Optional</sup> <a name="sns_topic_arns" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.snsTopicArns"></a>

```python
sns_topic_arns: typing.List[str]
```

- *Type:* typing.List[str]

ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#sns_topic_arns ChatbotSlackChannelConfiguration#sns_topic_arns}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ChatbotSlackChannelConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>]

The tags to add to the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#tags ChatbotSlackChannelConfiguration#tags}

---

##### `user_role_required`<sup>Optional</sup> <a name="user_role_required" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.userRoleRequired"></a>

```python
user_role_required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables use of a user role requirement in your chat configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#user_role_required ChatbotSlackChannelConfiguration#user_role_required}

---

### ChatbotSlackChannelConfigurationTags <a name="ChatbotSlackChannelConfigurationTags" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import chatbot_slack_channel_configuration

chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#key ChatbotSlackChannelConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#value ChatbotSlackChannelConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#key ChatbotSlackChannelConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_slack_channel_configuration#value ChatbotSlackChannelConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChatbotSlackChannelConfigurationTagsList <a name="ChatbotSlackChannelConfigurationTagsList" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import chatbot_slack_channel_configuration

chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChatbotSlackChannelConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChatbotSlackChannelConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>]

---


### ChatbotSlackChannelConfigurationTagsOutputReference <a name="ChatbotSlackChannelConfigurationTagsOutputReference" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chatbot_slack_channel_configuration

chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChatbotSlackChannelConfigurationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>

---



