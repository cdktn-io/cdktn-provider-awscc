# `lexBotAlias` Submodule <a name="`lexBotAlias` Submodule" id="@cdktn/provider-awscc.lexBotAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LexBotAlias <a name="LexBotAlias" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias awscc_lex_bot_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAlias(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bot_alias_name: str,
  bot_id: str,
  bot_alias_locale_settings: IResolvable | typing.List[LexBotAliasBotAliasLocaleSettings] = None,
  bot_alias_tags: IResolvable | typing.List[LexBotAliasBotAliasTags] = None,
  bot_version: str = None,
  conversation_log_settings: LexBotAliasConversationLogSettings = None,
  description: str = None,
  sentiment_analysis_settings: LexBotAliasSentimentAnalysisSettings = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.botAliasName">bot_alias_name</a></code> | <code>str</code> | A unique identifier for a resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.botId">bot_id</a></code> | <code>str</code> | Unique ID of resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.botAliasLocaleSettings">bot_alias_locale_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a>]</code> | A list of bot alias locale settings to add to the bot alias. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.botAliasTags">bot_alias_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a>]</code> | A list of tags to add to the bot alias. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.botVersion">bot_version</a></code> | <code>str</code> | The version of a bot. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.conversationLogSettings">conversation_log_settings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings">LexBotAliasConversationLogSettings</a></code> | Contains information about code hooks that Amazon Lex calls during a conversation. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the bot alias. Use the description to help identify the bot alias in lists. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.sentimentAnalysisSettings">sentiment_analysis_settings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings">LexBotAliasSentimentAnalysisSettings</a></code> | Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bot_alias_name`<sup>Required</sup> <a name="bot_alias_name" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.botAliasName"></a>

- *Type:* str

A unique identifier for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#bot_alias_name LexBotAlias#bot_alias_name}

---

##### `bot_id`<sup>Required</sup> <a name="bot_id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.botId"></a>

- *Type:* str

Unique ID of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#bot_id LexBotAlias#bot_id}

---

##### `bot_alias_locale_settings`<sup>Optional</sup> <a name="bot_alias_locale_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.botAliasLocaleSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a>]

A list of bot alias locale settings to add to the bot alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#bot_alias_locale_settings LexBotAlias#bot_alias_locale_settings}

---

##### `bot_alias_tags`<sup>Optional</sup> <a name="bot_alias_tags" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.botAliasTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a>]

A list of tags to add to the bot alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#bot_alias_tags LexBotAlias#bot_alias_tags}

---

##### `bot_version`<sup>Optional</sup> <a name="bot_version" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.botVersion"></a>

- *Type:* str

The version of a bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#bot_version LexBotAlias#bot_version}

---

##### `conversation_log_settings`<sup>Optional</sup> <a name="conversation_log_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.conversationLogSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings">LexBotAliasConversationLogSettings</a>

Contains information about code hooks that Amazon Lex calls during a conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#conversation_log_settings LexBotAlias#conversation_log_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.description"></a>

- *Type:* str

A description of the bot alias. Use the description to help identify the bot alias in lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#description LexBotAlias#description}

---

##### `sentiment_analysis_settings`<sup>Optional</sup> <a name="sentiment_analysis_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.sentimentAnalysisSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings">LexBotAliasSentimentAnalysisSettings</a>

Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#sentiment_analysis_settings LexBotAlias#sentiment_analysis_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putBotAliasLocaleSettings">put_bot_alias_locale_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putBotAliasTags">put_bot_alias_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putConversationLogSettings">put_conversation_log_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putSentimentAnalysisSettings">put_sentiment_analysis_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetBotAliasLocaleSettings">reset_bot_alias_locale_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetBotAliasTags">reset_bot_alias_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetBotVersion">reset_bot_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetConversationLogSettings">reset_conversation_log_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetSentimentAnalysisSettings">reset_sentiment_analysis_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bot_alias_locale_settings` <a name="put_bot_alias_locale_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putBotAliasLocaleSettings"></a>

```python
def put_bot_alias_locale_settings(
  value: IResolvable | typing.List[LexBotAliasBotAliasLocaleSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putBotAliasLocaleSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a>]

---

##### `put_bot_alias_tags` <a name="put_bot_alias_tags" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putBotAliasTags"></a>

```python
def put_bot_alias_tags(
  value: IResolvable | typing.List[LexBotAliasBotAliasTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putBotAliasTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a>]

---

##### `put_conversation_log_settings` <a name="put_conversation_log_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putConversationLogSettings"></a>

```python
def put_conversation_log_settings(
  audio_log_settings: IResolvable | typing.List[LexBotAliasConversationLogSettingsAudioLogSettings] = None,
  text_log_settings: IResolvable | typing.List[LexBotAliasConversationLogSettingsTextLogSettings] = None
) -> None
```

###### `audio_log_settings`<sup>Optional</sup> <a name="audio_log_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putConversationLogSettings.parameter.audioLogSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a>]

List of audio log settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#audio_log_settings LexBotAlias#audio_log_settings}

---

###### `text_log_settings`<sup>Optional</sup> <a name="text_log_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putConversationLogSettings.parameter.textLogSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a>]

List of text log settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#text_log_settings LexBotAlias#text_log_settings}

---

##### `put_sentiment_analysis_settings` <a name="put_sentiment_analysis_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putSentimentAnalysisSettings"></a>

```python
def put_sentiment_analysis_settings(
  detect_sentiment: bool | IResolvable = None
) -> None
```

###### `detect_sentiment`<sup>Optional</sup> <a name="detect_sentiment" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putSentimentAnalysisSettings.parameter.detectSentiment"></a>

- *Type:* bool | cdktn.IResolvable

Enable to call Amazon Comprehend for Sentiment natively within Lex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#detect_sentiment LexBotAlias#detect_sentiment}

---

##### `reset_bot_alias_locale_settings` <a name="reset_bot_alias_locale_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetBotAliasLocaleSettings"></a>

```python
def reset_bot_alias_locale_settings() -> None
```

##### `reset_bot_alias_tags` <a name="reset_bot_alias_tags" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetBotAliasTags"></a>

```python
def reset_bot_alias_tags() -> None
```

##### `reset_bot_version` <a name="reset_bot_version" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetBotVersion"></a>

```python
def reset_bot_version() -> None
```

##### `reset_conversation_log_settings` <a name="reset_conversation_log_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetConversationLogSettings"></a>

```python
def reset_conversation_log_settings() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_sentiment_analysis_settings` <a name="reset_sentiment_analysis_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetSentimentAnalysisSettings"></a>

```python
def reset_sentiment_analysis_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LexBotAlias resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isConstruct"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAlias.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAlias.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAlias.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAlias.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LexBotAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LexBotAlias to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LexBotAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LexBotAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasId">bot_alias_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasLocaleSettings">bot_alias_locale_settings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList">LexBotAliasBotAliasLocaleSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasStatus">bot_alias_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasTags">bot_alias_tags</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList">LexBotAliasBotAliasTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.conversationLogSettings">conversation_log_settings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference">LexBotAliasConversationLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.sentimentAnalysisSettings">sentiment_analysis_settings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference">LexBotAliasSentimentAnalysisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasLocaleSettingsInput">bot_alias_locale_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasNameInput">bot_alias_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasTagsInput">bot_alias_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botIdInput">bot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botVersionInput">bot_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.conversationLogSettingsInput">conversation_log_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings">LexBotAliasConversationLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.sentimentAnalysisSettingsInput">sentiment_analysis_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings">LexBotAliasSentimentAnalysisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasName">bot_alias_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botId">bot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botVersion">bot_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.description">description</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `bot_alias_id`<sup>Required</sup> <a name="bot_alias_id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasId"></a>

```python
bot_alias_id: str
```

- *Type:* str

---

##### `bot_alias_locale_settings`<sup>Required</sup> <a name="bot_alias_locale_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasLocaleSettings"></a>

```python
bot_alias_locale_settings: LexBotAliasBotAliasLocaleSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList">LexBotAliasBotAliasLocaleSettingsList</a>

---

##### `bot_alias_status`<sup>Required</sup> <a name="bot_alias_status" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasStatus"></a>

```python
bot_alias_status: str
```

- *Type:* str

---

##### `bot_alias_tags`<sup>Required</sup> <a name="bot_alias_tags" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasTags"></a>

```python
bot_alias_tags: LexBotAliasBotAliasTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList">LexBotAliasBotAliasTagsList</a>

---

##### `conversation_log_settings`<sup>Required</sup> <a name="conversation_log_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.conversationLogSettings"></a>

```python
conversation_log_settings: LexBotAliasConversationLogSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference">LexBotAliasConversationLogSettingsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `sentiment_analysis_settings`<sup>Required</sup> <a name="sentiment_analysis_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.sentimentAnalysisSettings"></a>

```python
sentiment_analysis_settings: LexBotAliasSentimentAnalysisSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference">LexBotAliasSentimentAnalysisSettingsOutputReference</a>

---

##### `bot_alias_locale_settings_input`<sup>Optional</sup> <a name="bot_alias_locale_settings_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasLocaleSettingsInput"></a>

```python
bot_alias_locale_settings_input: IResolvable | typing.List[LexBotAliasBotAliasLocaleSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a>]

---

##### `bot_alias_name_input`<sup>Optional</sup> <a name="bot_alias_name_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasNameInput"></a>

```python
bot_alias_name_input: str
```

- *Type:* str

---

##### `bot_alias_tags_input`<sup>Optional</sup> <a name="bot_alias_tags_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasTagsInput"></a>

```python
bot_alias_tags_input: IResolvable | typing.List[LexBotAliasBotAliasTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a>]

---

##### `bot_id_input`<sup>Optional</sup> <a name="bot_id_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botIdInput"></a>

```python
bot_id_input: str
```

- *Type:* str

---

##### `bot_version_input`<sup>Optional</sup> <a name="bot_version_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botVersionInput"></a>

```python
bot_version_input: str
```

- *Type:* str

---

##### `conversation_log_settings_input`<sup>Optional</sup> <a name="conversation_log_settings_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.conversationLogSettingsInput"></a>

```python
conversation_log_settings_input: IResolvable | LexBotAliasConversationLogSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings">LexBotAliasConversationLogSettings</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `sentiment_analysis_settings_input`<sup>Optional</sup> <a name="sentiment_analysis_settings_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.sentimentAnalysisSettingsInput"></a>

```python
sentiment_analysis_settings_input: IResolvable | LexBotAliasSentimentAnalysisSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings">LexBotAliasSentimentAnalysisSettings</a>

---

##### `bot_alias_name`<sup>Required</sup> <a name="bot_alias_name" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasName"></a>

```python
bot_alias_name: str
```

- *Type:* str

---

##### `bot_id`<sup>Required</sup> <a name="bot_id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botId"></a>

```python
bot_id: str
```

- *Type:* str

---

##### `bot_version`<sup>Required</sup> <a name="bot_version" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botVersion"></a>

```python
bot_version: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.description"></a>

```python
description: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LexBotAliasBotAliasLocaleSettings <a name="LexBotAliasBotAliasLocaleSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasBotAliasLocaleSettings(
  bot_alias_locale_setting: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting = None,
  locale_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings.property.botAliasLocaleSetting">bot_alias_locale_setting</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a></code> | You can use this parameter to specify a specific Lambda function to run different functions in different locales. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings.property.localeId">locale_id</a></code> | <code>str</code> | A string used to identify the locale. |

---

##### `bot_alias_locale_setting`<sup>Optional</sup> <a name="bot_alias_locale_setting" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings.property.botAliasLocaleSetting"></a>

```python
bot_alias_locale_setting: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a>

You can use this parameter to specify a specific Lambda function to run different functions in different locales.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#bot_alias_locale_setting LexBotAlias#bot_alias_locale_setting}

---

##### `locale_id`<sup>Optional</sup> <a name="locale_id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings.property.localeId"></a>

```python
locale_id: str
```

- *Type:* str

A string used to identify the locale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#locale_id LexBotAlias#locale_id}

---

### LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting <a name="LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting(
  code_hook_specification: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting.property.codeHookSpecification">code_hook_specification</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a></code> | Contains information about code hooks that Amazon Lex calls during a conversation. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the Lambda code hook is enabled. |

---

##### `code_hook_specification`<sup>Optional</sup> <a name="code_hook_specification" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting.property.codeHookSpecification"></a>

```python
code_hook_specification: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a>

Contains information about code hooks that Amazon Lex calls during a conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#code_hook_specification LexBotAlias#code_hook_specification}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the Lambda code hook is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}

---

### LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification <a name="LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification(
  lambda_code_hook: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification.property.lambdaCodeHook">lambda_code_hook</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a></code> | Contains information about code hooks that Amazon Lex calls during a conversation. |

---

##### `lambda_code_hook`<sup>Optional</sup> <a name="lambda_code_hook" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification.property.lambdaCodeHook"></a>

```python
lambda_code_hook: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a>

Contains information about code hooks that Amazon Lex calls during a conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#lambda_code_hook LexBotAlias#lambda_code_hook}

---

### LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook <a name="LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook(
  code_hook_interface_version: str = None,
  lambda_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook.property.codeHookInterfaceVersion">code_hook_interface_version</a></code> | <code>str</code> | The version of the request-response that you want Amazon Lex to use to invoke your Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Lambda function. |

---

##### `code_hook_interface_version`<sup>Optional</sup> <a name="code_hook_interface_version" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook.property.codeHookInterfaceVersion"></a>

```python
code_hook_interface_version: str
```

- *Type:* str

The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#code_hook_interface_version LexBotAlias#code_hook_interface_version}

---

##### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#lambda_arn LexBotAlias#lambda_arn}

---

### LexBotAliasBotAliasTags <a name="LexBotAliasBotAliasTags" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasBotAliasTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags.property.key">key</a></code> | <code>str</code> | A string used to identify this tag. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags.property.value">value</a></code> | <code>str</code> | A string containing the value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags.property.key"></a>

```python
key: str
```

- *Type:* str

A string used to identify this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#key LexBotAlias#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags.property.value"></a>

```python
value: str
```

- *Type:* str

A string containing the value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#value LexBotAlias#value}

---

### LexBotAliasConfig <a name="LexBotAliasConfig" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bot_alias_name: str,
  bot_id: str,
  bot_alias_locale_settings: IResolvable | typing.List[LexBotAliasBotAliasLocaleSettings] = None,
  bot_alias_tags: IResolvable | typing.List[LexBotAliasBotAliasTags] = None,
  bot_version: str = None,
  conversation_log_settings: LexBotAliasConversationLogSettings = None,
  description: str = None,
  sentiment_analysis_settings: LexBotAliasSentimentAnalysisSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botAliasName">bot_alias_name</a></code> | <code>str</code> | A unique identifier for a resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botId">bot_id</a></code> | <code>str</code> | Unique ID of resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botAliasLocaleSettings">bot_alias_locale_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a>]</code> | A list of bot alias locale settings to add to the bot alias. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botAliasTags">bot_alias_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a>]</code> | A list of tags to add to the bot alias. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botVersion">bot_version</a></code> | <code>str</code> | The version of a bot. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.conversationLogSettings">conversation_log_settings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings">LexBotAliasConversationLogSettings</a></code> | Contains information about code hooks that Amazon Lex calls during a conversation. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.description">description</a></code> | <code>str</code> | A description of the bot alias. Use the description to help identify the bot alias in lists. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.sentimentAnalysisSettings">sentiment_analysis_settings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings">LexBotAliasSentimentAnalysisSettings</a></code> | Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bot_alias_name`<sup>Required</sup> <a name="bot_alias_name" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botAliasName"></a>

```python
bot_alias_name: str
```

- *Type:* str

A unique identifier for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#bot_alias_name LexBotAlias#bot_alias_name}

---

##### `bot_id`<sup>Required</sup> <a name="bot_id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botId"></a>

```python
bot_id: str
```

- *Type:* str

Unique ID of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#bot_id LexBotAlias#bot_id}

---

##### `bot_alias_locale_settings`<sup>Optional</sup> <a name="bot_alias_locale_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botAliasLocaleSettings"></a>

```python
bot_alias_locale_settings: IResolvable | typing.List[LexBotAliasBotAliasLocaleSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a>]

A list of bot alias locale settings to add to the bot alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#bot_alias_locale_settings LexBotAlias#bot_alias_locale_settings}

---

##### `bot_alias_tags`<sup>Optional</sup> <a name="bot_alias_tags" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botAliasTags"></a>

```python
bot_alias_tags: IResolvable | typing.List[LexBotAliasBotAliasTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a>]

A list of tags to add to the bot alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#bot_alias_tags LexBotAlias#bot_alias_tags}

---

##### `bot_version`<sup>Optional</sup> <a name="bot_version" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botVersion"></a>

```python
bot_version: str
```

- *Type:* str

The version of a bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#bot_version LexBotAlias#bot_version}

---

##### `conversation_log_settings`<sup>Optional</sup> <a name="conversation_log_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.conversationLogSettings"></a>

```python
conversation_log_settings: LexBotAliasConversationLogSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings">LexBotAliasConversationLogSettings</a>

Contains information about code hooks that Amazon Lex calls during a conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#conversation_log_settings LexBotAlias#conversation_log_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the bot alias. Use the description to help identify the bot alias in lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#description LexBotAlias#description}

---

##### `sentiment_analysis_settings`<sup>Optional</sup> <a name="sentiment_analysis_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.sentimentAnalysisSettings"></a>

```python
sentiment_analysis_settings: LexBotAliasSentimentAnalysisSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings">LexBotAliasSentimentAnalysisSettings</a>

Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#sentiment_analysis_settings LexBotAlias#sentiment_analysis_settings}

---

### LexBotAliasConversationLogSettings <a name="LexBotAliasConversationLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogSettings(
  audio_log_settings: IResolvable | typing.List[LexBotAliasConversationLogSettingsAudioLogSettings] = None,
  text_log_settings: IResolvable | typing.List[LexBotAliasConversationLogSettingsTextLogSettings] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings.property.audioLogSettings">audio_log_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a>]</code> | List of audio log settings. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings.property.textLogSettings">text_log_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a>]</code> | List of text log settings. |

---

##### `audio_log_settings`<sup>Optional</sup> <a name="audio_log_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings.property.audioLogSettings"></a>

```python
audio_log_settings: IResolvable | typing.List[LexBotAliasConversationLogSettingsAudioLogSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a>]

List of audio log settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#audio_log_settings LexBotAlias#audio_log_settings}

---

##### `text_log_settings`<sup>Optional</sup> <a name="text_log_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings.property.textLogSettings"></a>

```python
text_log_settings: IResolvable | typing.List[LexBotAliasConversationLogSettingsTextLogSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a>]

List of text log settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#text_log_settings LexBotAlias#text_log_settings}

---

### LexBotAliasConversationLogSettingsAudioLogSettings <a name="LexBotAliasConversationLogSettingsAudioLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings(
  destination: LexBotAliasConversationLogSettingsAudioLogSettingsDestination = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination">LexBotAliasConversationLogSettingsAudioLogSettingsDestination</a></code> | The location of audio log files collected when conversation logging is enabled for a bot. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings.property.destination"></a>

```python
destination: LexBotAliasConversationLogSettingsAudioLogSettingsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination">LexBotAliasConversationLogSettingsAudioLogSettingsDestination</a>

The location of audio log files collected when conversation logging is enabled for a bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#destination LexBotAlias#destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}.

---

### LexBotAliasConversationLogSettingsAudioLogSettingsDestination <a name="LexBotAliasConversationLogSettingsAudioLogSettingsDestination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination(
  s3_bucket: LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination.property.s3Bucket">s3_bucket</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a></code> | Specifies an Amazon S3 bucket for logging audio conversations. |

---

##### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination.property.s3Bucket"></a>

```python
s3_bucket: LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a>

Specifies an Amazon S3 bucket for logging audio conversations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#s3_bucket LexBotAlias#s3_bucket}

---

### LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket <a name="LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket(
  kms_key_arn: str = None,
  log_prefix: str = None,
  s3_bucket_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.property.logPrefix">log_prefix</a></code> | <code>str</code> | The Amazon S3 key of the deployment package. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.property.s3BucketArn">s3_bucket_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored. |

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#kms_key_arn LexBotAlias#kms_key_arn}

---

##### `log_prefix`<sup>Optional</sup> <a name="log_prefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.property.logPrefix"></a>

```python
log_prefix: str
```

- *Type:* str

The Amazon S3 key of the deployment package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#log_prefix LexBotAlias#log_prefix}

---

##### `s3_bucket_arn`<sup>Optional</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.property.s3BucketArn"></a>

```python
s3_bucket_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#s3_bucket_arn LexBotAlias#s3_bucket_arn}

---

### LexBotAliasConversationLogSettingsTextLogSettings <a name="LexBotAliasConversationLogSettingsTextLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings(
  destination: LexBotAliasConversationLogSettingsTextLogSettingsDestination = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination">LexBotAliasConversationLogSettingsTextLogSettingsDestination</a></code> | Defines the Amazon CloudWatch Logs destination log group for conversation text logs. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings.property.destination"></a>

```python
destination: LexBotAliasConversationLogSettingsTextLogSettingsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination">LexBotAliasConversationLogSettingsTextLogSettingsDestination</a>

Defines the Amazon CloudWatch Logs destination log group for conversation text logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#destination LexBotAlias#destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}.

---

### LexBotAliasConversationLogSettingsTextLogSettingsDestination <a name="LexBotAliasConversationLogSettingsTextLogSettingsDestination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination(
  cloudwatch: LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#cloudwatch LexBotAlias#cloudwatch}. |

---

##### `cloudwatch`<sup>Optional</sup> <a name="cloudwatch" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination.property.cloudwatch"></a>

```python
cloudwatch: LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#cloudwatch LexBotAlias#cloudwatch}.

---

### LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch <a name="LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch(
  cloudwatch_log_group_arn: str = None,
  log_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | A string used to identify the groupArn for the Cloudwatch Log Group. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch.property.logPrefix">log_prefix</a></code> | <code>str</code> | A string containing the value for the Log Prefix. |

---

##### `cloudwatch_log_group_arn`<sup>Optional</sup> <a name="cloudwatch_log_group_arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

A string used to identify the groupArn for the Cloudwatch Log Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#cloudwatch_log_group_arn LexBotAlias#cloudwatch_log_group_arn}

---

##### `log_prefix`<sup>Optional</sup> <a name="log_prefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch.property.logPrefix"></a>

```python
log_prefix: str
```

- *Type:* str

A string containing the value for the Log Prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#log_prefix LexBotAlias#log_prefix}

---

### LexBotAliasSentimentAnalysisSettings <a name="LexBotAliasSentimentAnalysisSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasSentimentAnalysisSettings(
  detect_sentiment: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings.property.detectSentiment">detect_sentiment</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable to call Amazon Comprehend for Sentiment natively within Lex. |

---

##### `detect_sentiment`<sup>Optional</sup> <a name="detect_sentiment" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings.property.detectSentiment"></a>

```python
detect_sentiment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enable to call Amazon Comprehend for Sentiment natively within Lex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#detect_sentiment LexBotAlias#detect_sentiment}

---

## Classes <a name="Classes" id="Classes"></a>

### LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference <a name="LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resetCodeHookInterfaceVersion">reset_code_hook_interface_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resetLambdaArn">reset_lambda_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_code_hook_interface_version` <a name="reset_code_hook_interface_version" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resetCodeHookInterfaceVersion"></a>

```python
def reset_code_hook_interface_version() -> None
```

##### `reset_lambda_arn` <a name="reset_lambda_arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resetLambdaArn"></a>

```python
def reset_lambda_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.codeHookInterfaceVersionInput">code_hook_interface_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.codeHookInterfaceVersion">code_hook_interface_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_hook_interface_version_input`<sup>Optional</sup> <a name="code_hook_interface_version_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.codeHookInterfaceVersionInput"></a>

```python
code_hook_interface_version_input: str
```

- *Type:* str

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `code_hook_interface_version`<sup>Required</sup> <a name="code_hook_interface_version" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.codeHookInterfaceVersion"></a>

```python
code_hook_interface_version: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a>

---


### LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference <a name="LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.putLambdaCodeHook">put_lambda_code_hook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resetLambdaCodeHook">reset_lambda_code_hook</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lambda_code_hook` <a name="put_lambda_code_hook" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.putLambdaCodeHook"></a>

```python
def put_lambda_code_hook(
  code_hook_interface_version: str = None,
  lambda_arn: str = None
) -> None
```

###### `code_hook_interface_version`<sup>Optional</sup> <a name="code_hook_interface_version" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.putLambdaCodeHook.parameter.codeHookInterfaceVersion"></a>

- *Type:* str

The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#code_hook_interface_version LexBotAlias#code_hook_interface_version}

---

###### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.putLambdaCodeHook.parameter.lambdaArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#lambda_arn LexBotAlias#lambda_arn}

---

##### `reset_lambda_code_hook` <a name="reset_lambda_code_hook" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resetLambdaCodeHook"></a>

```python
def reset_lambda_code_hook() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.lambdaCodeHook">lambda_code_hook</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.lambdaCodeHookInput">lambda_code_hook_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_code_hook`<sup>Required</sup> <a name="lambda_code_hook" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.lambdaCodeHook"></a>

```python
lambda_code_hook: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference</a>

---

##### `lambda_code_hook_input`<sup>Optional</sup> <a name="lambda_code_hook_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.lambdaCodeHookInput"></a>

```python
lambda_code_hook_input: IResolvable | LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a>

---


### LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference <a name="LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.putCodeHookSpecification">put_code_hook_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resetCodeHookSpecification">reset_code_hook_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code_hook_specification` <a name="put_code_hook_specification" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.putCodeHookSpecification"></a>

```python
def put_code_hook_specification(
  lambda_code_hook: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook = None
) -> None
```

###### `lambda_code_hook`<sup>Optional</sup> <a name="lambda_code_hook" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.putCodeHookSpecification.parameter.lambdaCodeHook"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a>

Contains information about code hooks that Amazon Lex calls during a conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#lambda_code_hook LexBotAlias#lambda_code_hook}

---

##### `reset_code_hook_specification` <a name="reset_code_hook_specification" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resetCodeHookSpecification"></a>

```python
def reset_code_hook_specification() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.codeHookSpecification">code_hook_specification</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.codeHookSpecificationInput">code_hook_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_hook_specification`<sup>Required</sup> <a name="code_hook_specification" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.codeHookSpecification"></a>

```python
code_hook_specification: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference</a>

---

##### `code_hook_specification_input`<sup>Optional</sup> <a name="code_hook_specification_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.codeHookSpecificationInput"></a>

```python
code_hook_specification_input: IResolvable | LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a>

---


### LexBotAliasBotAliasLocaleSettingsList <a name="LexBotAliasBotAliasLocaleSettingsList" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasBotAliasLocaleSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LexBotAliasBotAliasLocaleSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LexBotAliasBotAliasLocaleSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a>]

---


### LexBotAliasBotAliasLocaleSettingsOutputReference <a name="LexBotAliasBotAliasLocaleSettingsOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.putBotAliasLocaleSetting">put_bot_alias_locale_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resetBotAliasLocaleSetting">reset_bot_alias_locale_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resetLocaleId">reset_locale_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bot_alias_locale_setting` <a name="put_bot_alias_locale_setting" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.putBotAliasLocaleSetting"></a>

```python
def put_bot_alias_locale_setting(
  code_hook_specification: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `code_hook_specification`<sup>Optional</sup> <a name="code_hook_specification" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.putBotAliasLocaleSetting.parameter.codeHookSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a>

Contains information about code hooks that Amazon Lex calls during a conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#code_hook_specification LexBotAlias#code_hook_specification}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.putBotAliasLocaleSetting.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the Lambda code hook is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}

---

##### `reset_bot_alias_locale_setting` <a name="reset_bot_alias_locale_setting" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resetBotAliasLocaleSetting"></a>

```python
def reset_bot_alias_locale_setting() -> None
```

##### `reset_locale_id` <a name="reset_locale_id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resetLocaleId"></a>

```python
def reset_locale_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.botAliasLocaleSetting">bot_alias_locale_setting</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.botAliasLocaleSettingInput">bot_alias_locale_setting_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.localeIdInput">locale_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.localeId">locale_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bot_alias_locale_setting`<sup>Required</sup> <a name="bot_alias_locale_setting" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.botAliasLocaleSetting"></a>

```python
bot_alias_locale_setting: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference</a>

---

##### `bot_alias_locale_setting_input`<sup>Optional</sup> <a name="bot_alias_locale_setting_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.botAliasLocaleSettingInput"></a>

```python
bot_alias_locale_setting_input: IResolvable | LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a>

---

##### `locale_id_input`<sup>Optional</sup> <a name="locale_id_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.localeIdInput"></a>

```python
locale_id_input: str
```

- *Type:* str

---

##### `locale_id`<sup>Required</sup> <a name="locale_id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.localeId"></a>

```python
locale_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LexBotAliasBotAliasLocaleSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a>

---


### LexBotAliasBotAliasTagsList <a name="LexBotAliasBotAliasTagsList" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasBotAliasTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LexBotAliasBotAliasTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LexBotAliasBotAliasTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a>]

---


### LexBotAliasBotAliasTagsOutputReference <a name="LexBotAliasBotAliasTagsOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasBotAliasTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LexBotAliasBotAliasTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a>

---


### LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference <a name="LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.putS3Bucket">put_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resetS3Bucket">reset_s3_bucket</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_bucket` <a name="put_s3_bucket" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.putS3Bucket"></a>

```python
def put_s3_bucket(
  kms_key_arn: str = None,
  log_prefix: str = None,
  s3_bucket_arn: str = None
) -> None
```

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.putS3Bucket.parameter.kmsKeyArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#kms_key_arn LexBotAlias#kms_key_arn}

---

###### `log_prefix`<sup>Optional</sup> <a name="log_prefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.putS3Bucket.parameter.logPrefix"></a>

- *Type:* str

The Amazon S3 key of the deployment package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#log_prefix LexBotAlias#log_prefix}

---

###### `s3_bucket_arn`<sup>Optional</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.putS3Bucket.parameter.s3BucketArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#s3_bucket_arn LexBotAlias#s3_bucket_arn}

---

##### `reset_s3_bucket` <a name="reset_s3_bucket" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resetS3Bucket"></a>

```python
def reset_s3_bucket() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.s3Bucket">s3_bucket</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination">LexBotAliasConversationLogSettingsAudioLogSettingsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.s3Bucket"></a>

```python
s3_bucket: LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference</a>

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: IResolvable | LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LexBotAliasConversationLogSettingsAudioLogSettingsDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination">LexBotAliasConversationLogSettingsAudioLogSettingsDestination</a>

---


### LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference <a name="LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resetLogPrefix">reset_log_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resetS3BucketArn">reset_s3_bucket_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_log_prefix` <a name="reset_log_prefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resetLogPrefix"></a>

```python
def reset_log_prefix() -> None
```

##### `reset_s3_bucket_arn` <a name="reset_s3_bucket_arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resetS3BucketArn"></a>

```python
def reset_s3_bucket_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.logPrefixInput">log_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.s3BucketArnInput">s3_bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.logPrefix">log_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.s3BucketArn">s3_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `log_prefix_input`<sup>Optional</sup> <a name="log_prefix_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.logPrefixInput"></a>

```python
log_prefix_input: str
```

- *Type:* str

---

##### `s3_bucket_arn_input`<sup>Optional</sup> <a name="s3_bucket_arn_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.s3BucketArnInput"></a>

```python
s3_bucket_arn_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `log_prefix`<sup>Required</sup> <a name="log_prefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.logPrefix"></a>

```python
log_prefix: str
```

- *Type:* str

---

##### `s3_bucket_arn`<sup>Required</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.s3BucketArn"></a>

```python
s3_bucket_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a>

---


### LexBotAliasConversationLogSettingsAudioLogSettingsList <a name="LexBotAliasConversationLogSettingsAudioLogSettingsList" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LexBotAliasConversationLogSettingsAudioLogSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a>]

---


### LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference <a name="LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination` <a name="put_destination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.putDestination"></a>

```python
def put_destination(
  s3_bucket: LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket = None
) -> None
```

###### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.putDestination.parameter.s3Bucket"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a>

Specifies an Amazon S3 bucket for logging audio conversations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#s3_bucket LexBotAlias#s3_bucket}

---

##### `reset_destination` <a name="reset_destination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.destinationInput">destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination">LexBotAliasConversationLogSettingsAudioLogSettingsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.destination"></a>

```python
destination: LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.destinationInput"></a>

```python
destination_input: IResolvable | LexBotAliasConversationLogSettingsAudioLogSettingsDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination">LexBotAliasConversationLogSettingsAudioLogSettingsDestination</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LexBotAliasConversationLogSettingsAudioLogSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a>

---


### LexBotAliasConversationLogSettingsOutputReference <a name="LexBotAliasConversationLogSettingsOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.putAudioLogSettings">put_audio_log_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.putTextLogSettings">put_text_log_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resetAudioLogSettings">reset_audio_log_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resetTextLogSettings">reset_text_log_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audio_log_settings` <a name="put_audio_log_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.putAudioLogSettings"></a>

```python
def put_audio_log_settings(
  value: IResolvable | typing.List[LexBotAliasConversationLogSettingsAudioLogSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.putAudioLogSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a>]

---

##### `put_text_log_settings` <a name="put_text_log_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.putTextLogSettings"></a>

```python
def put_text_log_settings(
  value: IResolvable | typing.List[LexBotAliasConversationLogSettingsTextLogSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.putTextLogSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a>]

---

##### `reset_audio_log_settings` <a name="reset_audio_log_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resetAudioLogSettings"></a>

```python
def reset_audio_log_settings() -> None
```

##### `reset_text_log_settings` <a name="reset_text_log_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resetTextLogSettings"></a>

```python
def reset_text_log_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.audioLogSettings">audio_log_settings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList">LexBotAliasConversationLogSettingsAudioLogSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.textLogSettings">text_log_settings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList">LexBotAliasConversationLogSettingsTextLogSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.audioLogSettingsInput">audio_log_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.textLogSettingsInput">text_log_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings">LexBotAliasConversationLogSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_log_settings`<sup>Required</sup> <a name="audio_log_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.audioLogSettings"></a>

```python
audio_log_settings: LexBotAliasConversationLogSettingsAudioLogSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList">LexBotAliasConversationLogSettingsAudioLogSettingsList</a>

---

##### `text_log_settings`<sup>Required</sup> <a name="text_log_settings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.textLogSettings"></a>

```python
text_log_settings: LexBotAliasConversationLogSettingsTextLogSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList">LexBotAliasConversationLogSettingsTextLogSettingsList</a>

---

##### `audio_log_settings_input`<sup>Optional</sup> <a name="audio_log_settings_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.audioLogSettingsInput"></a>

```python
audio_log_settings_input: IResolvable | typing.List[LexBotAliasConversationLogSettingsAudioLogSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a>]

---

##### `text_log_settings_input`<sup>Optional</sup> <a name="text_log_settings_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.textLogSettingsInput"></a>

```python
text_log_settings_input: IResolvable | typing.List[LexBotAliasConversationLogSettingsTextLogSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LexBotAliasConversationLogSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings">LexBotAliasConversationLogSettings</a>

---


### LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference <a name="LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resetCloudwatchLogGroupArn">reset_cloudwatch_log_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resetLogPrefix">reset_log_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloudwatch_log_group_arn` <a name="reset_cloudwatch_log_group_arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resetCloudwatchLogGroupArn"></a>

```python
def reset_cloudwatch_log_group_arn() -> None
```

##### `reset_log_prefix` <a name="reset_log_prefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resetLogPrefix"></a>

```python
def reset_log_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.cloudwatchLogGroupArnInput">cloudwatch_log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.logPrefixInput">log_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.logPrefix">log_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_group_arn_input`<sup>Optional</sup> <a name="cloudwatch_log_group_arn_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.cloudwatchLogGroupArnInput"></a>

```python
cloudwatch_log_group_arn_input: str
```

- *Type:* str

---

##### `log_prefix_input`<sup>Optional</sup> <a name="log_prefix_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.logPrefixInput"></a>

```python
log_prefix_input: str
```

- *Type:* str

---

##### `cloudwatch_log_group_arn`<sup>Required</sup> <a name="cloudwatch_log_group_arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

---

##### `log_prefix`<sup>Required</sup> <a name="log_prefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.logPrefix"></a>

```python
log_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a>

---


### LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference <a name="LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.putCloudwatch">put_cloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resetCloudwatch">reset_cloudwatch</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch` <a name="put_cloudwatch" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.putCloudwatch"></a>

```python
def put_cloudwatch(
  cloudwatch_log_group_arn: str = None,
  log_prefix: str = None
) -> None
```

###### `cloudwatch_log_group_arn`<sup>Optional</sup> <a name="cloudwatch_log_group_arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.putCloudwatch.parameter.cloudwatchLogGroupArn"></a>

- *Type:* str

A string used to identify the groupArn for the Cloudwatch Log Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#cloudwatch_log_group_arn LexBotAlias#cloudwatch_log_group_arn}

---

###### `log_prefix`<sup>Optional</sup> <a name="log_prefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.putCloudwatch.parameter.logPrefix"></a>

- *Type:* str

A string containing the value for the Log Prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#log_prefix LexBotAlias#log_prefix}

---

##### `reset_cloudwatch` <a name="reset_cloudwatch" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resetCloudwatch"></a>

```python
def reset_cloudwatch() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.cloudwatchInput">cloudwatch_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination">LexBotAliasConversationLogSettingsTextLogSettingsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch`<sup>Required</sup> <a name="cloudwatch" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.cloudwatch"></a>

```python
cloudwatch: LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference</a>

---

##### `cloudwatch_input`<sup>Optional</sup> <a name="cloudwatch_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.cloudwatchInput"></a>

```python
cloudwatch_input: IResolvable | LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LexBotAliasConversationLogSettingsTextLogSettingsDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination">LexBotAliasConversationLogSettingsTextLogSettingsDestination</a>

---


### LexBotAliasConversationLogSettingsTextLogSettingsList <a name="LexBotAliasConversationLogSettingsTextLogSettingsList" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LexBotAliasConversationLogSettingsTextLogSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LexBotAliasConversationLogSettingsTextLogSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a>]

---


### LexBotAliasConversationLogSettingsTextLogSettingsOutputReference <a name="LexBotAliasConversationLogSettingsTextLogSettingsOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination` <a name="put_destination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.putDestination"></a>

```python
def put_destination(
  cloudwatch: LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch = None
) -> None
```

###### `cloudwatch`<sup>Optional</sup> <a name="cloudwatch" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.putDestination.parameter.cloudwatch"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lex_bot_alias#cloudwatch LexBotAlias#cloudwatch}.

---

##### `reset_destination` <a name="reset_destination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference">LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.destinationInput">destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination">LexBotAliasConversationLogSettingsTextLogSettingsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.destination"></a>

```python
destination: LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference">LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.destinationInput"></a>

```python
destination_input: IResolvable | LexBotAliasConversationLogSettingsTextLogSettingsDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination">LexBotAliasConversationLogSettingsTextLogSettingsDestination</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LexBotAliasConversationLogSettingsTextLogSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a>

---


### LexBotAliasSentimentAnalysisSettingsOutputReference <a name="LexBotAliasSentimentAnalysisSettingsOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_alias

lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.resetDetectSentiment">reset_detect_sentiment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_detect_sentiment` <a name="reset_detect_sentiment" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.resetDetectSentiment"></a>

```python
def reset_detect_sentiment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.detectSentimentInput">detect_sentiment_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.detectSentiment">detect_sentiment</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings">LexBotAliasSentimentAnalysisSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `detect_sentiment_input`<sup>Optional</sup> <a name="detect_sentiment_input" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.detectSentimentInput"></a>

```python
detect_sentiment_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `detect_sentiment`<sup>Required</sup> <a name="detect_sentiment" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.detectSentiment"></a>

```python
detect_sentiment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LexBotAliasSentimentAnalysisSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings">LexBotAliasSentimentAnalysisSettings</a>

---



