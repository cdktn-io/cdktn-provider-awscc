# `wisdomAiGuardrail` Submodule <a name="`wisdomAiGuardrail` Submodule" id="@cdktn/provider-awscc.wisdomAiGuardrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomAiGuardrail <a name="WisdomAiGuardrail" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail awscc_wisdom_ai_guardrail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrail(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  assistant_id: str,
  blocked_input_messaging: str,
  blocked_outputs_messaging: str,
  content_policy_config: WisdomAiGuardrailContentPolicyConfig = None,
  contextual_grounding_policy_config: WisdomAiGuardrailContextualGroundingPolicyConfig = None,
  description: str = None,
  name: str = None,
  sensitive_information_policy_config: WisdomAiGuardrailSensitiveInformationPolicyConfig = None,
  tags: typing.Mapping[str] = None,
  topic_policy_config: WisdomAiGuardrailTopicPolicyConfig = None,
  word_policy_config: WisdomAiGuardrailWordPolicyConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.assistantId">assistant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#assistant_id WisdomAiGuardrail#assistant_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.blockedInputMessaging">blocked_input_messaging</a></code> | <code>str</code> | Messaging for when violations are detected in text. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.blockedOutputsMessaging">blocked_outputs_messaging</a></code> | <code>str</code> | Messaging for when violations are detected in text. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.contentPolicyConfig">content_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a></code> | Content policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.contextualGroundingPolicyConfig">contextual_grounding_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a></code> | Contextual grounding policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the guardrail or its version. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.sensitiveInformationPolicyConfig">sensitive_information_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a></code> | Sensitive information policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#tags WisdomAiGuardrail#tags}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.topicPolicyConfig">topic_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a></code> | Topic policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.wordPolicyConfig">word_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a></code> | Word policy config for a guardrail. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `assistant_id`<sup>Required</sup> <a name="assistant_id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.assistantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#assistant_id WisdomAiGuardrail#assistant_id}.

---

##### `blocked_input_messaging`<sup>Required</sup> <a name="blocked_input_messaging" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.blockedInputMessaging"></a>

- *Type:* str

Messaging for when violations are detected in text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#blocked_input_messaging WisdomAiGuardrail#blocked_input_messaging}

---

##### `blocked_outputs_messaging`<sup>Required</sup> <a name="blocked_outputs_messaging" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.blockedOutputsMessaging"></a>

- *Type:* str

Messaging for when violations are detected in text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#blocked_outputs_messaging WisdomAiGuardrail#blocked_outputs_messaging}

---

##### `content_policy_config`<sup>Optional</sup> <a name="content_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.contentPolicyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a>

Content policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#content_policy_config WisdomAiGuardrail#content_policy_config}

---

##### `contextual_grounding_policy_config`<sup>Optional</sup> <a name="contextual_grounding_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.contextualGroundingPolicyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a>

Contextual grounding policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#contextual_grounding_policy_config WisdomAiGuardrail#contextual_grounding_policy_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.description"></a>

- *Type:* str

Description of the guardrail or its version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#description WisdomAiGuardrail#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}.

---

##### `sensitive_information_policy_config`<sup>Optional</sup> <a name="sensitive_information_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.sensitiveInformationPolicyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a>

Sensitive information policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#sensitive_information_policy_config WisdomAiGuardrail#sensitive_information_policy_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#tags WisdomAiGuardrail#tags}.

---

##### `topic_policy_config`<sup>Optional</sup> <a name="topic_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.topicPolicyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a>

Topic policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#topic_policy_config WisdomAiGuardrail#topic_policy_config}

---

##### `word_policy_config`<sup>Optional</sup> <a name="word_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.wordPolicyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a>

Word policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#word_policy_config WisdomAiGuardrail#word_policy_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putContentPolicyConfig">put_content_policy_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putContextualGroundingPolicyConfig">put_contextual_grounding_policy_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putSensitiveInformationPolicyConfig">put_sensitive_information_policy_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putTopicPolicyConfig">put_topic_policy_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putWordPolicyConfig">put_word_policy_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetContentPolicyConfig">reset_content_policy_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetContextualGroundingPolicyConfig">reset_contextual_grounding_policy_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetSensitiveInformationPolicyConfig">reset_sensitive_information_policy_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetTopicPolicyConfig">reset_topic_policy_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetWordPolicyConfig">reset_word_policy_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_content_policy_config` <a name="put_content_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putContentPolicyConfig"></a>

```python
def put_content_policy_config(
  filters_config: IResolvable | typing.List[WisdomAiGuardrailContentPolicyConfigFiltersConfig] = None
) -> None
```

###### `filters_config`<sup>Optional</sup> <a name="filters_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putContentPolicyConfig.parameter.filtersConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a>]

List of content filter configs in content policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#filters_config WisdomAiGuardrail#filters_config}

---

##### `put_contextual_grounding_policy_config` <a name="put_contextual_grounding_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putContextualGroundingPolicyConfig"></a>

```python
def put_contextual_grounding_policy_config(
  filters_config: IResolvable | typing.List[WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig] = None
) -> None
```

###### `filters_config`<sup>Optional</sup> <a name="filters_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putContextualGroundingPolicyConfig.parameter.filtersConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a>]

List of contextual grounding filter configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#filters_config WisdomAiGuardrail#filters_config}

---

##### `put_sensitive_information_policy_config` <a name="put_sensitive_information_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putSensitiveInformationPolicyConfig"></a>

```python
def put_sensitive_information_policy_config(
  pii_entities_config: IResolvable | typing.List[WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig] = None,
  regexes_config: IResolvable | typing.List[WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig] = None
) -> None
```

###### `pii_entities_config`<sup>Optional</sup> <a name="pii_entities_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putSensitiveInformationPolicyConfig.parameter.piiEntitiesConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>]

List of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#pii_entities_config WisdomAiGuardrail#pii_entities_config}

---

###### `regexes_config`<sup>Optional</sup> <a name="regexes_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putSensitiveInformationPolicyConfig.parameter.regexesConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>]

List of regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#regexes_config WisdomAiGuardrail#regexes_config}

---

##### `put_topic_policy_config` <a name="put_topic_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putTopicPolicyConfig"></a>

```python
def put_topic_policy_config(
  topics_config: IResolvable | typing.List[WisdomAiGuardrailTopicPolicyConfigTopicsConfig] = None
) -> None
```

###### `topics_config`<sup>Optional</sup> <a name="topics_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putTopicPolicyConfig.parameter.topicsConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a>]

List of topic configs in topic policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#topics_config WisdomAiGuardrail#topics_config}

---

##### `put_word_policy_config` <a name="put_word_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putWordPolicyConfig"></a>

```python
def put_word_policy_config(
  managed_word_lists_config: IResolvable | typing.List[WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig] = None,
  words_config: IResolvable | typing.List[WisdomAiGuardrailWordPolicyConfigWordsConfig] = None
) -> None
```

###### `managed_word_lists_config`<sup>Optional</sup> <a name="managed_word_lists_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putWordPolicyConfig.parameter.managedWordListsConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a>]

A config for the list of managed words.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#managed_word_lists_config WisdomAiGuardrail#managed_word_lists_config}

---

###### `words_config`<sup>Optional</sup> <a name="words_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putWordPolicyConfig.parameter.wordsConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a>]

List of custom word configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#words_config WisdomAiGuardrail#words_config}

---

##### `reset_content_policy_config` <a name="reset_content_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetContentPolicyConfig"></a>

```python
def reset_content_policy_config() -> None
```

##### `reset_contextual_grounding_policy_config` <a name="reset_contextual_grounding_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetContextualGroundingPolicyConfig"></a>

```python
def reset_contextual_grounding_policy_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_sensitive_information_policy_config` <a name="reset_sensitive_information_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetSensitiveInformationPolicyConfig"></a>

```python
def reset_sensitive_information_policy_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_topic_policy_config` <a name="reset_topic_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetTopicPolicyConfig"></a>

```python
def reset_topic_policy_config() -> None
```

##### `reset_word_policy_config` <a name="reset_word_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetWordPolicyConfig"></a>

```python
def reset_word_policy_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WisdomAiGuardrail resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isConstruct"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrail.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isTerraformElement"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrail.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isTerraformResource"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrail.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrail.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WisdomAiGuardrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WisdomAiGuardrail to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WisdomAiGuardrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WisdomAiGuardrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.aiGuardrailArn">ai_guardrail_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.aiGuardrailId">ai_guardrail_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.assistantArn">assistant_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contentPolicyConfig">content_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference">WisdomAiGuardrailContentPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contextualGroundingPolicyConfig">contextual_grounding_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference">WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.modifiedTimeSeconds">modified_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.sensitiveInformationPolicyConfig">sensitive_information_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference">WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.topicPolicyConfig">topic_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference">WisdomAiGuardrailTopicPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.wordPolicyConfig">word_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference">WisdomAiGuardrailWordPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.assistantIdInput">assistant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedInputMessagingInput">blocked_input_messaging_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedOutputsMessagingInput">blocked_outputs_messaging_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contentPolicyConfigInput">content_policy_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contextualGroundingPolicyConfigInput">contextual_grounding_policy_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.sensitiveInformationPolicyConfigInput">sensitive_information_policy_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.topicPolicyConfigInput">topic_policy_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.wordPolicyConfigInput">word_policy_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.assistantId">assistant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedInputMessaging">blocked_input_messaging</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedOutputsMessaging">blocked_outputs_messaging</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ai_guardrail_arn`<sup>Required</sup> <a name="ai_guardrail_arn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.aiGuardrailArn"></a>

```python
ai_guardrail_arn: str
```

- *Type:* str

---

##### `ai_guardrail_id`<sup>Required</sup> <a name="ai_guardrail_id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.aiGuardrailId"></a>

```python
ai_guardrail_id: str
```

- *Type:* str

---

##### `assistant_arn`<sup>Required</sup> <a name="assistant_arn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.assistantArn"></a>

```python
assistant_arn: str
```

- *Type:* str

---

##### `content_policy_config`<sup>Required</sup> <a name="content_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contentPolicyConfig"></a>

```python
content_policy_config: WisdomAiGuardrailContentPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference">WisdomAiGuardrailContentPolicyConfigOutputReference</a>

---

##### `contextual_grounding_policy_config`<sup>Required</sup> <a name="contextual_grounding_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contextualGroundingPolicyConfig"></a>

```python
contextual_grounding_policy_config: WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference">WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_time_seconds`<sup>Required</sup> <a name="modified_time_seconds" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.modifiedTimeSeconds"></a>

```python
modified_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sensitive_information_policy_config`<sup>Required</sup> <a name="sensitive_information_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.sensitiveInformationPolicyConfig"></a>

```python
sensitive_information_policy_config: WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference">WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference</a>

---

##### `topic_policy_config`<sup>Required</sup> <a name="topic_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.topicPolicyConfig"></a>

```python
topic_policy_config: WisdomAiGuardrailTopicPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference">WisdomAiGuardrailTopicPolicyConfigOutputReference</a>

---

##### `word_policy_config`<sup>Required</sup> <a name="word_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.wordPolicyConfig"></a>

```python
word_policy_config: WisdomAiGuardrailWordPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference">WisdomAiGuardrailWordPolicyConfigOutputReference</a>

---

##### `assistant_id_input`<sup>Optional</sup> <a name="assistant_id_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.assistantIdInput"></a>

```python
assistant_id_input: str
```

- *Type:* str

---

##### `blocked_input_messaging_input`<sup>Optional</sup> <a name="blocked_input_messaging_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedInputMessagingInput"></a>

```python
blocked_input_messaging_input: str
```

- *Type:* str

---

##### `blocked_outputs_messaging_input`<sup>Optional</sup> <a name="blocked_outputs_messaging_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedOutputsMessagingInput"></a>

```python
blocked_outputs_messaging_input: str
```

- *Type:* str

---

##### `content_policy_config_input`<sup>Optional</sup> <a name="content_policy_config_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contentPolicyConfigInput"></a>

```python
content_policy_config_input: IResolvable | WisdomAiGuardrailContentPolicyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a>

---

##### `contextual_grounding_policy_config_input`<sup>Optional</sup> <a name="contextual_grounding_policy_config_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contextualGroundingPolicyConfigInput"></a>

```python
contextual_grounding_policy_config_input: IResolvable | WisdomAiGuardrailContextualGroundingPolicyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sensitive_information_policy_config_input`<sup>Optional</sup> <a name="sensitive_information_policy_config_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.sensitiveInformationPolicyConfigInput"></a>

```python
sensitive_information_policy_config_input: IResolvable | WisdomAiGuardrailSensitiveInformationPolicyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `topic_policy_config_input`<sup>Optional</sup> <a name="topic_policy_config_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.topicPolicyConfigInput"></a>

```python
topic_policy_config_input: IResolvable | WisdomAiGuardrailTopicPolicyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a>

---

##### `word_policy_config_input`<sup>Optional</sup> <a name="word_policy_config_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.wordPolicyConfigInput"></a>

```python
word_policy_config_input: IResolvable | WisdomAiGuardrailWordPolicyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a>

---

##### `assistant_id`<sup>Required</sup> <a name="assistant_id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.assistantId"></a>

```python
assistant_id: str
```

- *Type:* str

---

##### `blocked_input_messaging`<sup>Required</sup> <a name="blocked_input_messaging" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedInputMessaging"></a>

```python
blocked_input_messaging: str
```

- *Type:* str

---

##### `blocked_outputs_messaging`<sup>Required</sup> <a name="blocked_outputs_messaging" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedOutputsMessaging"></a>

```python
blocked_outputs_messaging: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomAiGuardrailConfig <a name="WisdomAiGuardrailConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  assistant_id: str,
  blocked_input_messaging: str,
  blocked_outputs_messaging: str,
  content_policy_config: WisdomAiGuardrailContentPolicyConfig = None,
  contextual_grounding_policy_config: WisdomAiGuardrailContextualGroundingPolicyConfig = None,
  description: str = None,
  name: str = None,
  sensitive_information_policy_config: WisdomAiGuardrailSensitiveInformationPolicyConfig = None,
  tags: typing.Mapping[str] = None,
  topic_policy_config: WisdomAiGuardrailTopicPolicyConfig = None,
  word_policy_config: WisdomAiGuardrailWordPolicyConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.assistantId">assistant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#assistant_id WisdomAiGuardrail#assistant_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.blockedInputMessaging">blocked_input_messaging</a></code> | <code>str</code> | Messaging for when violations are detected in text. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.blockedOutputsMessaging">blocked_outputs_messaging</a></code> | <code>str</code> | Messaging for when violations are detected in text. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.contentPolicyConfig">content_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a></code> | Content policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.contextualGroundingPolicyConfig">contextual_grounding_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a></code> | Contextual grounding policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.description">description</a></code> | <code>str</code> | Description of the guardrail or its version. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.sensitiveInformationPolicyConfig">sensitive_information_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a></code> | Sensitive information policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#tags WisdomAiGuardrail#tags}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.topicPolicyConfig">topic_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a></code> | Topic policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.wordPolicyConfig">word_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a></code> | Word policy config for a guardrail. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `assistant_id`<sup>Required</sup> <a name="assistant_id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.assistantId"></a>

```python
assistant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#assistant_id WisdomAiGuardrail#assistant_id}.

---

##### `blocked_input_messaging`<sup>Required</sup> <a name="blocked_input_messaging" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.blockedInputMessaging"></a>

```python
blocked_input_messaging: str
```

- *Type:* str

Messaging for when violations are detected in text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#blocked_input_messaging WisdomAiGuardrail#blocked_input_messaging}

---

##### `blocked_outputs_messaging`<sup>Required</sup> <a name="blocked_outputs_messaging" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.blockedOutputsMessaging"></a>

```python
blocked_outputs_messaging: str
```

- *Type:* str

Messaging for when violations are detected in text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#blocked_outputs_messaging WisdomAiGuardrail#blocked_outputs_messaging}

---

##### `content_policy_config`<sup>Optional</sup> <a name="content_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.contentPolicyConfig"></a>

```python
content_policy_config: WisdomAiGuardrailContentPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a>

Content policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#content_policy_config WisdomAiGuardrail#content_policy_config}

---

##### `contextual_grounding_policy_config`<sup>Optional</sup> <a name="contextual_grounding_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.contextualGroundingPolicyConfig"></a>

```python
contextual_grounding_policy_config: WisdomAiGuardrailContextualGroundingPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a>

Contextual grounding policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#contextual_grounding_policy_config WisdomAiGuardrail#contextual_grounding_policy_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the guardrail or its version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#description WisdomAiGuardrail#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}.

---

##### `sensitive_information_policy_config`<sup>Optional</sup> <a name="sensitive_information_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.sensitiveInformationPolicyConfig"></a>

```python
sensitive_information_policy_config: WisdomAiGuardrailSensitiveInformationPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a>

Sensitive information policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#sensitive_information_policy_config WisdomAiGuardrail#sensitive_information_policy_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#tags WisdomAiGuardrail#tags}.

---

##### `topic_policy_config`<sup>Optional</sup> <a name="topic_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.topicPolicyConfig"></a>

```python
topic_policy_config: WisdomAiGuardrailTopicPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a>

Topic policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#topic_policy_config WisdomAiGuardrail#topic_policy_config}

---

##### `word_policy_config`<sup>Optional</sup> <a name="word_policy_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.wordPolicyConfig"></a>

```python
word_policy_config: WisdomAiGuardrailWordPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a>

Word policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#word_policy_config WisdomAiGuardrail#word_policy_config}

---

### WisdomAiGuardrailContentPolicyConfig <a name="WisdomAiGuardrailContentPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig(
  filters_config: IResolvable | typing.List[WisdomAiGuardrailContentPolicyConfigFiltersConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig.property.filtersConfig">filters_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a>]</code> | List of content filter configs in content policy. |

---

##### `filters_config`<sup>Optional</sup> <a name="filters_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig.property.filtersConfig"></a>

```python
filters_config: IResolvable | typing.List[WisdomAiGuardrailContentPolicyConfigFiltersConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a>]

List of content filter configs in content policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#filters_config WisdomAiGuardrail#filters_config}

---

### WisdomAiGuardrailContentPolicyConfigFiltersConfig <a name="WisdomAiGuardrailContentPolicyConfigFiltersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig(
  input_strength: str = None,
  output_strength: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.property.inputStrength">input_strength</a></code> | <code>str</code> | Strength for filters. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.property.outputStrength">output_strength</a></code> | <code>str</code> | Strength for filters. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.property.type">type</a></code> | <code>str</code> | Type of text to text filter in content policy. |

---

##### `input_strength`<sup>Optional</sup> <a name="input_strength" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.property.inputStrength"></a>

```python
input_strength: str
```

- *Type:* str

Strength for filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#input_strength WisdomAiGuardrail#input_strength}

---

##### `output_strength`<sup>Optional</sup> <a name="output_strength" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.property.outputStrength"></a>

```python
output_strength: str
```

- *Type:* str

Strength for filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#output_strength WisdomAiGuardrail#output_strength}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of text to text filter in content policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}

---

### WisdomAiGuardrailContextualGroundingPolicyConfig <a name="WisdomAiGuardrailContextualGroundingPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig(
  filters_config: IResolvable | typing.List[WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig.property.filtersConfig">filters_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a>]</code> | List of contextual grounding filter configs. |

---

##### `filters_config`<sup>Optional</sup> <a name="filters_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig.property.filtersConfig"></a>

```python
filters_config: IResolvable | typing.List[WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a>]

List of contextual grounding filter configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#filters_config WisdomAiGuardrail#filters_config}

---

### WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig <a name="WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig(
  threshold: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The threshold for this filter. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig.property.type">type</a></code> | <code>str</code> | Type of contextual grounding filter. |

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The threshold for this filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#threshold WisdomAiGuardrail#threshold}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of contextual grounding filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}

---

### WisdomAiGuardrailSensitiveInformationPolicyConfig <a name="WisdomAiGuardrailSensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig(
  pii_entities_config: IResolvable | typing.List[WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig] = None,
  regexes_config: IResolvable | typing.List[WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig.property.piiEntitiesConfig">pii_entities_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>]</code> | List of entities. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig.property.regexesConfig">regexes_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>]</code> | List of regex. |

---

##### `pii_entities_config`<sup>Optional</sup> <a name="pii_entities_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig.property.piiEntitiesConfig"></a>

```python
pii_entities_config: IResolvable | typing.List[WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>]

List of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#pii_entities_config WisdomAiGuardrail#pii_entities_config}

---

##### `regexes_config`<sup>Optional</sup> <a name="regexes_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig.property.regexesConfig"></a>

```python
regexes_config: IResolvable | typing.List[WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>]

List of regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#regexes_config WisdomAiGuardrail#regexes_config}

---

### WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig(
  action: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.action">action</a></code> | <code>str</code> | Options for sensitive information action. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.type">type</a></code> | <code>str</code> | The currently supported PII entities. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Options for sensitive information action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#action WisdomAiGuardrail#action}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The currently supported PII entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}

---

### WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig(
  action: str = None,
  description: str = None,
  name: str = None,
  pattern: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.action">action</a></code> | <code>str</code> | Options for sensitive information action. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.description">description</a></code> | <code>str</code> | The regex description. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.name">name</a></code> | <code>str</code> | The regex name. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.pattern">pattern</a></code> | <code>str</code> | The regex pattern. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Options for sensitive information action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#action WisdomAiGuardrail#action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The regex description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#description WisdomAiGuardrail#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The regex name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

The regex pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#pattern WisdomAiGuardrail#pattern}

---

### WisdomAiGuardrailTopicPolicyConfig <a name="WisdomAiGuardrailTopicPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig(
  topics_config: IResolvable | typing.List[WisdomAiGuardrailTopicPolicyConfigTopicsConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig.property.topicsConfig">topics_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a>]</code> | List of topic configs in topic policy. |

---

##### `topics_config`<sup>Optional</sup> <a name="topics_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig.property.topicsConfig"></a>

```python
topics_config: IResolvable | typing.List[WisdomAiGuardrailTopicPolicyConfigTopicsConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a>]

List of topic configs in topic policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#topics_config WisdomAiGuardrail#topics_config}

---

### WisdomAiGuardrailTopicPolicyConfigTopicsConfig <a name="WisdomAiGuardrailTopicPolicyConfigTopicsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig(
  definition: str = None,
  examples: typing.List[str] = None,
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.definition">definition</a></code> | <code>str</code> | Definition of topic in topic policy. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.examples">examples</a></code> | <code>typing.List[str]</code> | List of text examples. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.name">name</a></code> | <code>str</code> | Name of topic in topic policy. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.type">type</a></code> | <code>str</code> | Type of topic in a policy. |

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.definition"></a>

```python
definition: str
```

- *Type:* str

Definition of topic in topic policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#definition WisdomAiGuardrail#definition}

---

##### `examples`<sup>Optional</sup> <a name="examples" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.examples"></a>

```python
examples: typing.List[str]
```

- *Type:* typing.List[str]

List of text examples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#examples WisdomAiGuardrail#examples}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of topic in topic policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of topic in a policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}

---

### WisdomAiGuardrailWordPolicyConfig <a name="WisdomAiGuardrailWordPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig(
  managed_word_lists_config: IResolvable | typing.List[WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig] = None,
  words_config: IResolvable | typing.List[WisdomAiGuardrailWordPolicyConfigWordsConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig.property.managedWordListsConfig">managed_word_lists_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a>]</code> | A config for the list of managed words. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig.property.wordsConfig">words_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a>]</code> | List of custom word configs. |

---

##### `managed_word_lists_config`<sup>Optional</sup> <a name="managed_word_lists_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig.property.managedWordListsConfig"></a>

```python
managed_word_lists_config: IResolvable | typing.List[WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a>]

A config for the list of managed words.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#managed_word_lists_config WisdomAiGuardrail#managed_word_lists_config}

---

##### `words_config`<sup>Optional</sup> <a name="words_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig.property.wordsConfig"></a>

```python
words_config: IResolvable | typing.List[WisdomAiGuardrailWordPolicyConfigWordsConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a>]

List of custom word configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#words_config WisdomAiGuardrail#words_config}

---

### WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig <a name="WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig.property.type">type</a></code> | <code>str</code> | Options for managed words. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Options for managed words.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}

---

### WisdomAiGuardrailWordPolicyConfigWordsConfig <a name="WisdomAiGuardrailWordPolicyConfigWordsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig(
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig.property.text">text</a></code> | <code>str</code> | The custom word text. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig.property.text"></a>

```python
text: str
```

- *Type:* str

The custom word text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_ai_guardrail#text WisdomAiGuardrail#text}

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomAiGuardrailContentPolicyConfigFiltersConfigList <a name="WisdomAiGuardrailContentPolicyConfigFiltersConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WisdomAiGuardrailContentPolicyConfigFiltersConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a>]

---


### WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference <a name="WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resetInputStrength">reset_input_strength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resetOutputStrength">reset_output_strength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_input_strength` <a name="reset_input_strength" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resetInputStrength"></a>

```python
def reset_input_strength() -> None
```

##### `reset_output_strength` <a name="reset_output_strength" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resetOutputStrength"></a>

```python
def reset_output_strength() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrengthInput">input_strength_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrengthInput">output_strength_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrength">input_strength</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrength">output_strength</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_strength_input`<sup>Optional</sup> <a name="input_strength_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrengthInput"></a>

```python
input_strength_input: str
```

- *Type:* str

---

##### `output_strength_input`<sup>Optional</sup> <a name="output_strength_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrengthInput"></a>

```python
output_strength_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `input_strength`<sup>Required</sup> <a name="input_strength" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrength"></a>

```python
input_strength: str
```

- *Type:* str

---

##### `output_strength`<sup>Required</sup> <a name="output_strength" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrength"></a>

```python
output_strength: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomAiGuardrailContentPolicyConfigFiltersConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a>

---


### WisdomAiGuardrailContentPolicyConfigOutputReference <a name="WisdomAiGuardrailContentPolicyConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.putFiltersConfig">put_filters_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.resetFiltersConfig">reset_filters_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filters_config` <a name="put_filters_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.putFiltersConfig"></a>

```python
def put_filters_config(
  value: IResolvable | typing.List[WisdomAiGuardrailContentPolicyConfigFiltersConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.putFiltersConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a>]

---

##### `reset_filters_config` <a name="reset_filters_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.resetFiltersConfig"></a>

```python
def reset_filters_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.filtersConfig">filters_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList">WisdomAiGuardrailContentPolicyConfigFiltersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.filtersConfigInput">filters_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filters_config`<sup>Required</sup> <a name="filters_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.filtersConfig"></a>

```python
filters_config: WisdomAiGuardrailContentPolicyConfigFiltersConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList">WisdomAiGuardrailContentPolicyConfigFiltersConfigList</a>

---

##### `filters_config_input`<sup>Optional</sup> <a name="filters_config_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.filtersConfigInput"></a>

```python
filters_config_input: IResolvable | typing.List[WisdomAiGuardrailContentPolicyConfigFiltersConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomAiGuardrailContentPolicyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a>

---


### WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList <a name="WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a>]

---


### WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference <a name="WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_threshold` <a name="reset_threshold" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a>

---


### WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference <a name="WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.putFiltersConfig">put_filters_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.resetFiltersConfig">reset_filters_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filters_config` <a name="put_filters_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.putFiltersConfig"></a>

```python
def put_filters_config(
  value: IResolvable | typing.List[WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.putFiltersConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a>]

---

##### `reset_filters_config` <a name="reset_filters_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.resetFiltersConfig"></a>

```python
def reset_filters_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfig">filters_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfigInput">filters_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filters_config`<sup>Required</sup> <a name="filters_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfig"></a>

```python
filters_config: WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList</a>

---

##### `filters_config_input`<sup>Optional</sup> <a name="filters_config_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfigInput"></a>

```python
filters_config_input: IResolvable | typing.List[WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomAiGuardrailContextualGroundingPolicyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a>

---


### WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.putPiiEntitiesConfig">put_pii_entities_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.putRegexesConfig">put_regexes_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resetPiiEntitiesConfig">reset_pii_entities_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resetRegexesConfig">reset_regexes_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pii_entities_config` <a name="put_pii_entities_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.putPiiEntitiesConfig"></a>

```python
def put_pii_entities_config(
  value: IResolvable | typing.List[WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.putPiiEntitiesConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>]

---

##### `put_regexes_config` <a name="put_regexes_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.putRegexesConfig"></a>

```python
def put_regexes_config(
  value: IResolvable | typing.List[WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.putRegexesConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>]

---

##### `reset_pii_entities_config` <a name="reset_pii_entities_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resetPiiEntitiesConfig"></a>

```python
def reset_pii_entities_config() -> None
```

##### `reset_regexes_config` <a name="reset_regexes_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resetRegexesConfig"></a>

```python
def reset_regexes_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfig">pii_entities_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfig">regexes_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfigInput">pii_entities_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfigInput">regexes_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pii_entities_config`<sup>Required</sup> <a name="pii_entities_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfig"></a>

```python
pii_entities_config: WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList</a>

---

##### `regexes_config`<sup>Required</sup> <a name="regexes_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfig"></a>

```python
regexes_config: WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList</a>

---

##### `pii_entities_config_input`<sup>Optional</sup> <a name="pii_entities_config_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfigInput"></a>

```python
pii_entities_config_input: IResolvable | typing.List[WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>]

---

##### `regexes_config_input`<sup>Optional</sup> <a name="regexes_config_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfigInput"></a>

```python
regexes_config_input: IResolvable | typing.List[WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomAiGuardrailSensitiveInformationPolicyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a>

---


### WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>]

---


### WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>

---


### WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>]

---


### WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetPattern">reset_pattern</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_pattern` <a name="reset_pattern" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetPattern"></a>

```python
def reset_pattern() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>

---


### WisdomAiGuardrailTopicPolicyConfigOutputReference <a name="WisdomAiGuardrailTopicPolicyConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.putTopicsConfig">put_topics_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.resetTopicsConfig">reset_topics_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_topics_config` <a name="put_topics_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.putTopicsConfig"></a>

```python
def put_topics_config(
  value: IResolvable | typing.List[WisdomAiGuardrailTopicPolicyConfigTopicsConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.putTopicsConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a>]

---

##### `reset_topics_config` <a name="reset_topics_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.resetTopicsConfig"></a>

```python
def reset_topics_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.topicsConfig">topics_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList">WisdomAiGuardrailTopicPolicyConfigTopicsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.topicsConfigInput">topics_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topics_config`<sup>Required</sup> <a name="topics_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.topicsConfig"></a>

```python
topics_config: WisdomAiGuardrailTopicPolicyConfigTopicsConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList">WisdomAiGuardrailTopicPolicyConfigTopicsConfigList</a>

---

##### `topics_config_input`<sup>Optional</sup> <a name="topics_config_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.topicsConfigInput"></a>

```python
topics_config_input: IResolvable | typing.List[WisdomAiGuardrailTopicPolicyConfigTopicsConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomAiGuardrailTopicPolicyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a>

---


### WisdomAiGuardrailTopicPolicyConfigTopicsConfigList <a name="WisdomAiGuardrailTopicPolicyConfigTopicsConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WisdomAiGuardrailTopicPolicyConfigTopicsConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a>]

---


### WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference <a name="WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetDefinition">reset_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetExamples">reset_examples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_definition` <a name="reset_definition" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetDefinition"></a>

```python
def reset_definition() -> None
```

##### `reset_examples` <a name="reset_examples" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetExamples"></a>

```python
def reset_examples() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definitionInput">definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examplesInput">examples_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definition">definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examples">examples</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `definition_input`<sup>Optional</sup> <a name="definition_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definitionInput"></a>

```python
definition_input: str
```

- *Type:* str

---

##### `examples_input`<sup>Optional</sup> <a name="examples_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examplesInput"></a>

```python
examples_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definition"></a>

```python
definition: str
```

- *Type:* str

---

##### `examples`<sup>Required</sup> <a name="examples" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examples"></a>

```python
examples: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomAiGuardrailTopicPolicyConfigTopicsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a>

---


### WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList <a name="WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a>]

---


### WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference <a name="WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a>

---


### WisdomAiGuardrailWordPolicyConfigOutputReference <a name="WisdomAiGuardrailWordPolicyConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.putManagedWordListsConfig">put_managed_word_lists_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.putWordsConfig">put_words_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resetManagedWordListsConfig">reset_managed_word_lists_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resetWordsConfig">reset_words_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_managed_word_lists_config` <a name="put_managed_word_lists_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.putManagedWordListsConfig"></a>

```python
def put_managed_word_lists_config(
  value: IResolvable | typing.List[WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.putManagedWordListsConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a>]

---

##### `put_words_config` <a name="put_words_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.putWordsConfig"></a>

```python
def put_words_config(
  value: IResolvable | typing.List[WisdomAiGuardrailWordPolicyConfigWordsConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.putWordsConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a>]

---

##### `reset_managed_word_lists_config` <a name="reset_managed_word_lists_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resetManagedWordListsConfig"></a>

```python
def reset_managed_word_lists_config() -> None
```

##### `reset_words_config` <a name="reset_words_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resetWordsConfig"></a>

```python
def reset_words_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfig">managed_word_lists_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.wordsConfig">words_config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList">WisdomAiGuardrailWordPolicyConfigWordsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfigInput">managed_word_lists_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.wordsConfigInput">words_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_word_lists_config`<sup>Required</sup> <a name="managed_word_lists_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfig"></a>

```python
managed_word_lists_config: WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList</a>

---

##### `words_config`<sup>Required</sup> <a name="words_config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.wordsConfig"></a>

```python
words_config: WisdomAiGuardrailWordPolicyConfigWordsConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList">WisdomAiGuardrailWordPolicyConfigWordsConfigList</a>

---

##### `managed_word_lists_config_input`<sup>Optional</sup> <a name="managed_word_lists_config_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfigInput"></a>

```python
managed_word_lists_config_input: IResolvable | typing.List[WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a>]

---

##### `words_config_input`<sup>Optional</sup> <a name="words_config_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.wordsConfigInput"></a>

```python
words_config_input: IResolvable | typing.List[WisdomAiGuardrailWordPolicyConfigWordsConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomAiGuardrailWordPolicyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a>

---


### WisdomAiGuardrailWordPolicyConfigWordsConfigList <a name="WisdomAiGuardrailWordPolicyConfigWordsConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WisdomAiGuardrailWordPolicyConfigWordsConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a>]

---


### WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference <a name="WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_guardrail

wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_text` <a name="reset_text" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomAiGuardrailWordPolicyConfigWordsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a>

---



