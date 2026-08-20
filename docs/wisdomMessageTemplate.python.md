# `wisdomMessageTemplate` Submodule <a name="`wisdomMessageTemplate` Submodule" id="@cdktn/provider-awscc.wisdomMessageTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomMessageTemplate <a name="WisdomMessageTemplate" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template awscc_wisdom_message_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  channel_subtype: str,
  content: WisdomMessageTemplateContent,
  knowledge_base_arn: str,
  name: str,
  default_attributes: WisdomMessageTemplateDefaultAttributes = None,
  description: str = None,
  grouping_configuration: WisdomMessageTemplateGroupingConfiguration = None,
  language: str = None,
  message_template_attachments: IResolvable | typing.List[WisdomMessageTemplateMessageTemplateAttachments] = None,
  tags: IResolvable | typing.List[WisdomMessageTemplateTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.channelSubtype">channel_subtype</a></code> | <code>str</code> | The channel subtype this message template applies to. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a></code> | The content of the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.knowledgeBaseArn">knowledge_base_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the knowledge base to which the message template belongs. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.defaultAttributes">default_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a></code> | An object that specifies the default values to use for variables in the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.groupingConfiguration">grouping_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a></code> | The configuration information of the user groups that the message template is accessible to. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.language">language</a></code> | <code>str</code> | The language code value for the language in which the message template is written. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.messageTemplateAttachments">message_template_attachments</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>]</code> | List of message template attachments. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>]</code> | The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_subtype`<sup>Required</sup> <a name="channel_subtype" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.channelSubtype"></a>

- *Type:* str

The channel subtype this message template applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#channel_subtype WisdomMessageTemplate#channel_subtype}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.content"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a>

The content of the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}

---

##### `knowledge_base_arn`<sup>Required</sup> <a name="knowledge_base_arn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.knowledgeBaseArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the knowledge base to which the message template belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#knowledge_base_arn WisdomMessageTemplate#knowledge_base_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.name"></a>

- *Type:* str

The name of the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#name WisdomMessageTemplate#name}

---

##### `default_attributes`<sup>Optional</sup> <a name="default_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.defaultAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a>

An object that specifies the default values to use for variables in the message template.

This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#default_attributes WisdomMessageTemplate#default_attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.description"></a>

- *Type:* str

The description of the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#description WisdomMessageTemplate#description}

---

##### `grouping_configuration`<sup>Optional</sup> <a name="grouping_configuration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.groupingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a>

The configuration information of the user groups that the message template is accessible to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#grouping_configuration WisdomMessageTemplate#grouping_configuration}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.language"></a>

- *Type:* str

The language code value for the language in which the message template is written.

The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#language WisdomMessageTemplate#language}

---

##### `message_template_attachments`<sup>Optional</sup> <a name="message_template_attachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.messageTemplateAttachments"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>]

List of message template attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#message_template_attachments WisdomMessageTemplate#message_template_attachments}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>]

The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#tags WisdomMessageTemplate#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putContent">put_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putDefaultAttributes">put_default_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putGroupingConfiguration">put_grouping_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putMessageTemplateAttachments">put_message_template_attachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetDefaultAttributes">reset_default_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetGroupingConfiguration">reset_grouping_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetLanguage">reset_language</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetMessageTemplateAttachments">reset_message_template_attachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_content` <a name="put_content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putContent"></a>

```python
def put_content(
  email_message_template_content: WisdomMessageTemplateContentEmailMessageTemplateContent = None,
  sms_message_template_content: WisdomMessageTemplateContentSmsMessageTemplateContent = None
) -> None
```

###### `email_message_template_content`<sup>Optional</sup> <a name="email_message_template_content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putContent.parameter.emailMessageTemplateContent"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a>

The content of message template that applies to email channel subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#email_message_template_content WisdomMessageTemplate#email_message_template_content}

---

###### `sms_message_template_content`<sup>Optional</sup> <a name="sms_message_template_content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putContent.parameter.smsMessageTemplateContent"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a>

The content of message template that applies to SMS channel subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#sms_message_template_content WisdomMessageTemplate#sms_message_template_content}

---

##### `put_default_attributes` <a name="put_default_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putDefaultAttributes"></a>

```python
def put_default_attributes(
  agent_attributes: WisdomMessageTemplateDefaultAttributesAgentAttributes = None,
  custom_attributes: typing.Mapping[str] = None,
  customer_profile_attributes: WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes = None,
  system_attributes: WisdomMessageTemplateDefaultAttributesSystemAttributes = None
) -> None
```

###### `agent_attributes`<sup>Optional</sup> <a name="agent_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putDefaultAttributes.parameter.agentAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a>

The agent attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#agent_attributes WisdomMessageTemplate#agent_attributes}

---

###### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putDefaultAttributes.parameter.customAttributes"></a>

- *Type:* typing.Mapping[str]

The custom attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#custom_attributes WisdomMessageTemplate#custom_attributes}

---

###### `customer_profile_attributes`<sup>Optional</sup> <a name="customer_profile_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putDefaultAttributes.parameter.customerProfileAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a>

The customer profile attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#customer_profile_attributes WisdomMessageTemplate#customer_profile_attributes}

---

###### `system_attributes`<sup>Optional</sup> <a name="system_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putDefaultAttributes.parameter.systemAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a>

The system attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#system_attributes WisdomMessageTemplate#system_attributes}

---

##### `put_grouping_configuration` <a name="put_grouping_configuration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putGroupingConfiguration"></a>

```python
def put_grouping_configuration(
  criteria: str = None,
  values: typing.List[str] = None
) -> None
```

###### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putGroupingConfiguration.parameter.criteria"></a>

- *Type:* str

The criteria used for grouping Amazon Q in Connect users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#criteria WisdomMessageTemplate#criteria}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putGroupingConfiguration.parameter.values"></a>

- *Type:* typing.List[str]

The list of values that define different groups of Amazon Q in Connect users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#values WisdomMessageTemplate#values}

---

##### `put_message_template_attachments` <a name="put_message_template_attachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putMessageTemplateAttachments"></a>

```python
def put_message_template_attachments(
  value: IResolvable | typing.List[WisdomMessageTemplateMessageTemplateAttachments]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putMessageTemplateAttachments.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[WisdomMessageTemplateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>]

---

##### `reset_default_attributes` <a name="reset_default_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetDefaultAttributes"></a>

```python
def reset_default_attributes() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_grouping_configuration` <a name="reset_grouping_configuration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetGroupingConfiguration"></a>

```python
def reset_grouping_configuration() -> None
```

##### `reset_language` <a name="reset_language" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetLanguage"></a>

```python
def reset_language() -> None
```

##### `reset_message_template_attachments` <a name="reset_message_template_attachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetMessageTemplateAttachments"></a>

```python
def reset_message_template_attachments() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WisdomMessageTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WisdomMessageTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WisdomMessageTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WisdomMessageTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WisdomMessageTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference">WisdomMessageTemplateContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.defaultAttributes">default_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference">WisdomMessageTemplateDefaultAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.groupingConfiguration">grouping_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference">WisdomMessageTemplateGroupingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateArn">message_template_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateAttachments">message_template_attachments</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList">WisdomMessageTemplateMessageTemplateAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateContentSha256">message_template_content_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateId">message_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList">WisdomMessageTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.channelSubtypeInput">channel_subtype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.contentInput">content_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.defaultAttributesInput">default_attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.groupingConfigurationInput">grouping_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.knowledgeBaseArnInput">knowledge_base_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateAttachmentsInput">message_template_attachments_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.channelSubtype">channel_subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.knowledgeBaseArn">knowledge_base_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.content"></a>

```python
content: WisdomMessageTemplateContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference">WisdomMessageTemplateContentOutputReference</a>

---

##### `default_attributes`<sup>Required</sup> <a name="default_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.defaultAttributes"></a>

```python
default_attributes: WisdomMessageTemplateDefaultAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference">WisdomMessageTemplateDefaultAttributesOutputReference</a>

---

##### `grouping_configuration`<sup>Required</sup> <a name="grouping_configuration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.groupingConfiguration"></a>

```python
grouping_configuration: WisdomMessageTemplateGroupingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference">WisdomMessageTemplateGroupingConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `message_template_arn`<sup>Required</sup> <a name="message_template_arn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateArn"></a>

```python
message_template_arn: str
```

- *Type:* str

---

##### `message_template_attachments`<sup>Required</sup> <a name="message_template_attachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateAttachments"></a>

```python
message_template_attachments: WisdomMessageTemplateMessageTemplateAttachmentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList">WisdomMessageTemplateMessageTemplateAttachmentsList</a>

---

##### `message_template_content_sha256`<sup>Required</sup> <a name="message_template_content_sha256" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateContentSha256"></a>

```python
message_template_content_sha256: str
```

- *Type:* str

---

##### `message_template_id`<sup>Required</sup> <a name="message_template_id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateId"></a>

```python
message_template_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tags"></a>

```python
tags: WisdomMessageTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList">WisdomMessageTemplateTagsList</a>

---

##### `channel_subtype_input`<sup>Optional</sup> <a name="channel_subtype_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.channelSubtypeInput"></a>

```python
channel_subtype_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.contentInput"></a>

```python
content_input: IResolvable | WisdomMessageTemplateContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a>

---

##### `default_attributes_input`<sup>Optional</sup> <a name="default_attributes_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.defaultAttributesInput"></a>

```python
default_attributes_input: IResolvable | WisdomMessageTemplateDefaultAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `grouping_configuration_input`<sup>Optional</sup> <a name="grouping_configuration_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.groupingConfigurationInput"></a>

```python
grouping_configuration_input: IResolvable | WisdomMessageTemplateGroupingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a>

---

##### `knowledge_base_arn_input`<sup>Optional</sup> <a name="knowledge_base_arn_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.knowledgeBaseArnInput"></a>

```python
knowledge_base_arn_input: str
```

- *Type:* str

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `message_template_attachments_input`<sup>Optional</sup> <a name="message_template_attachments_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateAttachmentsInput"></a>

```python
message_template_attachments_input: IResolvable | typing.List[WisdomMessageTemplateMessageTemplateAttachments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[WisdomMessageTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>]

---

##### `channel_subtype`<sup>Required</sup> <a name="channel_subtype" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.channelSubtype"></a>

```python
channel_subtype: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `knowledge_base_arn`<sup>Required</sup> <a name="knowledge_base_arn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.knowledgeBaseArn"></a>

```python
knowledge_base_arn: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomMessageTemplateConfig <a name="WisdomMessageTemplateConfig" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  channel_subtype: str,
  content: WisdomMessageTemplateContent,
  knowledge_base_arn: str,
  name: str,
  default_attributes: WisdomMessageTemplateDefaultAttributes = None,
  description: str = None,
  grouping_configuration: WisdomMessageTemplateGroupingConfiguration = None,
  language: str = None,
  message_template_attachments: IResolvable | typing.List[WisdomMessageTemplateMessageTemplateAttachments] = None,
  tags: IResolvable | typing.List[WisdomMessageTemplateTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.channelSubtype">channel_subtype</a></code> | <code>str</code> | The channel subtype this message template applies to. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a></code> | The content of the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.knowledgeBaseArn">knowledge_base_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the knowledge base to which the message template belongs. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.name">name</a></code> | <code>str</code> | The name of the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.defaultAttributes">default_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a></code> | An object that specifies the default values to use for variables in the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.description">description</a></code> | <code>str</code> | The description of the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.groupingConfiguration">grouping_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a></code> | The configuration information of the user groups that the message template is accessible to. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.language">language</a></code> | <code>str</code> | The language code value for the language in which the message template is written. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.messageTemplateAttachments">message_template_attachments</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>]</code> | List of message template attachments. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>]</code> | The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_subtype`<sup>Required</sup> <a name="channel_subtype" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.channelSubtype"></a>

```python
channel_subtype: str
```

- *Type:* str

The channel subtype this message template applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#channel_subtype WisdomMessageTemplate#channel_subtype}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.content"></a>

```python
content: WisdomMessageTemplateContent
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a>

The content of the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}

---

##### `knowledge_base_arn`<sup>Required</sup> <a name="knowledge_base_arn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.knowledgeBaseArn"></a>

```python
knowledge_base_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the knowledge base to which the message template belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#knowledge_base_arn WisdomMessageTemplate#knowledge_base_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#name WisdomMessageTemplate#name}

---

##### `default_attributes`<sup>Optional</sup> <a name="default_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.defaultAttributes"></a>

```python
default_attributes: WisdomMessageTemplateDefaultAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a>

An object that specifies the default values to use for variables in the message template.

This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#default_attributes WisdomMessageTemplate#default_attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#description WisdomMessageTemplate#description}

---

##### `grouping_configuration`<sup>Optional</sup> <a name="grouping_configuration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.groupingConfiguration"></a>

```python
grouping_configuration: WisdomMessageTemplateGroupingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a>

The configuration information of the user groups that the message template is accessible to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#grouping_configuration WisdomMessageTemplate#grouping_configuration}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.language"></a>

```python
language: str
```

- *Type:* str

The language code value for the language in which the message template is written.

The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#language WisdomMessageTemplate#language}

---

##### `message_template_attachments`<sup>Optional</sup> <a name="message_template_attachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.messageTemplateAttachments"></a>

```python
message_template_attachments: IResolvable | typing.List[WisdomMessageTemplateMessageTemplateAttachments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>]

List of message template attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#message_template_attachments WisdomMessageTemplate#message_template_attachments}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[WisdomMessageTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>]

The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#tags WisdomMessageTemplate#tags}

---

### WisdomMessageTemplateContent <a name="WisdomMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContent(
  email_message_template_content: WisdomMessageTemplateContentEmailMessageTemplateContent = None,
  sms_message_template_content: WisdomMessageTemplateContentSmsMessageTemplateContent = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.property.emailMessageTemplateContent">email_message_template_content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a></code> | The content of message template that applies to email channel subtype. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.property.smsMessageTemplateContent">sms_message_template_content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a></code> | The content of message template that applies to SMS channel subtype. |

---

##### `email_message_template_content`<sup>Optional</sup> <a name="email_message_template_content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.property.emailMessageTemplateContent"></a>

```python
email_message_template_content: WisdomMessageTemplateContentEmailMessageTemplateContent
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a>

The content of message template that applies to email channel subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#email_message_template_content WisdomMessageTemplate#email_message_template_content}

---

##### `sms_message_template_content`<sup>Optional</sup> <a name="sms_message_template_content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.property.smsMessageTemplateContent"></a>

```python
sms_message_template_content: WisdomMessageTemplateContentSmsMessageTemplateContent
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a>

The content of message template that applies to SMS channel subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#sms_message_template_content WisdomMessageTemplate#sms_message_template_content}

---

### WisdomMessageTemplateContentEmailMessageTemplateContent <a name="WisdomMessageTemplateContentEmailMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent(
  body: WisdomMessageTemplateContentEmailMessageTemplateContentBody = None,
  headers: IResolvable | typing.List[WisdomMessageTemplateContentEmailMessageTemplateContentHeaders] = None,
  subject: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.body">body</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a></code> | The body to use in email messages. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.headers">headers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>]</code> | The email headers to include in email messages. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.subject">subject</a></code> | <code>str</code> | The subject line, or title, to use in email messages. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.body"></a>

```python
body: WisdomMessageTemplateContentEmailMessageTemplateContentBody
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a>

The body to use in email messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#body WisdomMessageTemplate#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.headers"></a>

```python
headers: IResolvable | typing.List[WisdomMessageTemplateContentEmailMessageTemplateContentHeaders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>]

The email headers to include in email messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#headers WisdomMessageTemplate#headers}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.subject"></a>

```python
subject: str
```

- *Type:* str

The subject line, or title, to use in email messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#subject WisdomMessageTemplate#subject}

---

### WisdomMessageTemplateContentEmailMessageTemplateContentBody <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody(
  html: WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml = None,
  plain_text: WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.property.html">html</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a></code> | The message body, in HTML format, to use in email messages that are based on the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.property.plainText">plain_text</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a></code> | The message body, in plain text format, to use in email messages that are based on the message template. |

---

##### `html`<sup>Optional</sup> <a name="html" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.property.html"></a>

```python
html: WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a>

The message body, in HTML format, to use in email messages that are based on the message template.

We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#html WisdomMessageTemplate#html}

---

##### `plain_text`<sup>Optional</sup> <a name="plain_text" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.property.plainText"></a>

```python
plain_text: WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a>

The message body, in plain text format, to use in email messages that are based on the message template.

We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#plain_text WisdomMessageTemplate#plain_text}

---

### WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml(
  content: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}.

---

### WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText(
  content: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}.

---

### WisdomMessageTemplateContentEmailMessageTemplateContentHeaders <a name="WisdomMessageTemplateContentEmailMessageTemplateContentHeaders" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.property.name">name</a></code> | <code>str</code> | The name of the email header. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.property.value">value</a></code> | <code>str</code> | The value of the email header. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the email header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#name WisdomMessageTemplate#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the email header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#value WisdomMessageTemplate#value}

---

### WisdomMessageTemplateContentSmsMessageTemplateContent <a name="WisdomMessageTemplateContentSmsMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent(
  body: WisdomMessageTemplateContentSmsMessageTemplateContentBody = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent.property.body">body</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a></code> | The body to use in SMS messages. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent.property.body"></a>

```python
body: WisdomMessageTemplateContentSmsMessageTemplateContentBody
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a>

The body to use in SMS messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#body WisdomMessageTemplate#body}

---

### WisdomMessageTemplateContentSmsMessageTemplateContentBody <a name="WisdomMessageTemplateContentSmsMessageTemplateContentBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody(
  plain_text: WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody.property.plainText">plain_text</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a></code> | The container of message template body. |

---

##### `plain_text`<sup>Optional</sup> <a name="plain_text" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody.property.plainText"></a>

```python
plain_text: WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a>

The container of message template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#plain_text WisdomMessageTemplate#plain_text}

---

### WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText <a name="WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText(
  content: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}.

---

### WisdomMessageTemplateDefaultAttributes <a name="WisdomMessageTemplateDefaultAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes(
  agent_attributes: WisdomMessageTemplateDefaultAttributesAgentAttributes = None,
  custom_attributes: typing.Mapping[str] = None,
  customer_profile_attributes: WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes = None,
  system_attributes: WisdomMessageTemplateDefaultAttributesSystemAttributes = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.agentAttributes">agent_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a></code> | The agent attributes that are used with the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | The custom attributes that are used with the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.customerProfileAttributes">customer_profile_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a></code> | The customer profile attributes that are used with the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.systemAttributes">system_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a></code> | The system attributes that are used with the message template. |

---

##### `agent_attributes`<sup>Optional</sup> <a name="agent_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.agentAttributes"></a>

```python
agent_attributes: WisdomMessageTemplateDefaultAttributesAgentAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a>

The agent attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#agent_attributes WisdomMessageTemplate#agent_attributes}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The custom attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#custom_attributes WisdomMessageTemplate#custom_attributes}

---

##### `customer_profile_attributes`<sup>Optional</sup> <a name="customer_profile_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.customerProfileAttributes"></a>

```python
customer_profile_attributes: WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a>

The customer profile attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#customer_profile_attributes WisdomMessageTemplate#customer_profile_attributes}

---

##### `system_attributes`<sup>Optional</sup> <a name="system_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.systemAttributes"></a>

```python
system_attributes: WisdomMessageTemplateDefaultAttributesSystemAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a>

The system attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#system_attributes WisdomMessageTemplate#system_attributes}

---

### WisdomMessageTemplateDefaultAttributesAgentAttributes <a name="WisdomMessageTemplateDefaultAttributesAgentAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes(
  first_name: str = None,
  last_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.property.firstName">first_name</a></code> | <code>str</code> | The agent?s first name as entered in their Amazon Connect user account. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.property.lastName">last_name</a></code> | <code>str</code> | The agent?s last name as entered in their Amazon Connect user account. |

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

The agent?s first name as entered in their Amazon Connect user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#first_name WisdomMessageTemplate#first_name}

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

The agent?s last name as entered in their Amazon Connect user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#last_name WisdomMessageTemplate#last_name}

---

### WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes <a name="WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes(
  account_number: str = None,
  additional_information: str = None,
  address1: str = None,
  address2: str = None,
  address3: str = None,
  address4: str = None,
  billing_address1: str = None,
  billing_address2: str = None,
  billing_address3: str = None,
  billing_address4: str = None,
  billing_city: str = None,
  billing_country: str = None,
  billing_county: str = None,
  billing_postal_code: str = None,
  billing_province: str = None,
  billing_state: str = None,
  birth_date: str = None,
  business_email_address: str = None,
  business_name: str = None,
  business_phone_number: str = None,
  city: str = None,
  country: str = None,
  county: str = None,
  custom: typing.Mapping[str] = None,
  email_address: str = None,
  first_name: str = None,
  gender: str = None,
  home_phone_number: str = None,
  last_name: str = None,
  mailing_address1: str = None,
  mailing_address2: str = None,
  mailing_address3: str = None,
  mailing_address4: str = None,
  mailing_city: str = None,
  mailing_country: str = None,
  mailing_county: str = None,
  mailing_postal_code: str = None,
  mailing_province: str = None,
  mailing_state: str = None,
  middle_name: str = None,
  mobile_phone_number: str = None,
  party_type: str = None,
  phone_number: str = None,
  postal_code: str = None,
  profile_arn: str = None,
  profile_id: str = None,
  province: str = None,
  shipping_address1: str = None,
  shipping_address2: str = None,
  shipping_address3: str = None,
  shipping_address4: str = None,
  shipping_city: str = None,
  shipping_country: str = None,
  shipping_county: str = None,
  shipping_postal_code: str = None,
  shipping_province: str = None,
  shipping_state: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.accountNumber">account_number</a></code> | <code>str</code> | A unique account number that you have given to the customer. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.additionalInformation">additional_information</a></code> | <code>str</code> | Any additional information relevant to the customer's profile. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address1">address1</a></code> | <code>str</code> | The first line of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address2">address2</a></code> | <code>str</code> | The second line of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address3">address3</a></code> | <code>str</code> | The third line of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address4">address4</a></code> | <code>str</code> | The fourth line of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress1">billing_address1</a></code> | <code>str</code> | The first line of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress2">billing_address2</a></code> | <code>str</code> | The second line of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress3">billing_address3</a></code> | <code>str</code> | The third line of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress4">billing_address4</a></code> | <code>str</code> | The fourth line of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCity">billing_city</a></code> | <code>str</code> | The city of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCountry">billing_country</a></code> | <code>str</code> | The country of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCounty">billing_county</a></code> | <code>str</code> | The county of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingPostalCode">billing_postal_code</a></code> | <code>str</code> | The postal code of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingProvince">billing_province</a></code> | <code>str</code> | The province of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingState">billing_state</a></code> | <code>str</code> | The state of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.birthDate">birth_date</a></code> | <code>str</code> | The customer's birth date. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessEmailAddress">business_email_address</a></code> | <code>str</code> | The customer's business email address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessName">business_name</a></code> | <code>str</code> | The name of the customer's business. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessPhoneNumber">business_phone_number</a></code> | <code>str</code> | The customer's business phone number. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.city">city</a></code> | <code>str</code> | The city in which a customer lives. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.country">country</a></code> | <code>str</code> | The country in which a customer lives. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.county">county</a></code> | <code>str</code> | The county in which a customer lives. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.custom">custom</a></code> | <code>typing.Mapping[str]</code> | The custom attributes that are used with the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.emailAddress">email_address</a></code> | <code>str</code> | The customer's email address, which has not been specified as a personal or business address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.firstName">first_name</a></code> | <code>str</code> | The customer's first name. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.gender">gender</a></code> | <code>str</code> | The customer's gender. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.homePhoneNumber">home_phone_number</a></code> | <code>str</code> | The customer's home phone number. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.lastName">last_name</a></code> | <code>str</code> | The customer's last name. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress1">mailing_address1</a></code> | <code>str</code> | The first line of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress2">mailing_address2</a></code> | <code>str</code> | The second line of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress3">mailing_address3</a></code> | <code>str</code> | The third line of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress4">mailing_address4</a></code> | <code>str</code> | The fourth line of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCity">mailing_city</a></code> | <code>str</code> | The city of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCountry">mailing_country</a></code> | <code>str</code> | The country of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCounty">mailing_county</a></code> | <code>str</code> | The county of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingPostalCode">mailing_postal_code</a></code> | <code>str</code> | The postal code of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingProvince">mailing_province</a></code> | <code>str</code> | The province of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingState">mailing_state</a></code> | <code>str</code> | The state of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.middleName">middle_name</a></code> | <code>str</code> | The customer's middle name. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mobilePhoneNumber">mobile_phone_number</a></code> | <code>str</code> | The customer's mobile phone number. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.partyType">party_type</a></code> | <code>str</code> | The customer's party type. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.phoneNumber">phone_number</a></code> | <code>str</code> | The customer's phone number, which has not been specified as a mobile, home, or business number. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.postalCode">postal_code</a></code> | <code>str</code> | The postal code of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.profileArn">profile_arn</a></code> | <code>str</code> | The ARN of a customer profile. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.profileId">profile_id</a></code> | <code>str</code> | The unique identifier of a customer profile. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.province">province</a></code> | <code>str</code> | The province in which a customer lives. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress1">shipping_address1</a></code> | <code>str</code> | The first line of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress2">shipping_address2</a></code> | <code>str</code> | The second line of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress3">shipping_address3</a></code> | <code>str</code> | The third line of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress4">shipping_address4</a></code> | <code>str</code> | The fourth line of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCity">shipping_city</a></code> | <code>str</code> | The city of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCountry">shipping_country</a></code> | <code>str</code> | The country of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCounty">shipping_county</a></code> | <code>str</code> | The county of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingPostalCode">shipping_postal_code</a></code> | <code>str</code> | The postal code of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingProvince">shipping_province</a></code> | <code>str</code> | The province of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingState">shipping_state</a></code> | <code>str</code> | The state of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.state">state</a></code> | <code>str</code> | The state in which a customer lives. |

---

##### `account_number`<sup>Optional</sup> <a name="account_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.accountNumber"></a>

```python
account_number: str
```

- *Type:* str

A unique account number that you have given to the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#account_number WisdomMessageTemplate#account_number}

---

##### `additional_information`<sup>Optional</sup> <a name="additional_information" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.additionalInformation"></a>

```python
additional_information: str
```

- *Type:* str

Any additional information relevant to the customer's profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#additional_information WisdomMessageTemplate#additional_information}

---

##### `address1`<sup>Optional</sup> <a name="address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address1"></a>

```python
address1: str
```

- *Type:* str

The first line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#address_1 WisdomMessageTemplate#address_1}

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address2"></a>

```python
address2: str
```

- *Type:* str

The second line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#address_2 WisdomMessageTemplate#address_2}

---

##### `address3`<sup>Optional</sup> <a name="address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address3"></a>

```python
address3: str
```

- *Type:* str

The third line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#address_3 WisdomMessageTemplate#address_3}

---

##### `address4`<sup>Optional</sup> <a name="address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address4"></a>

```python
address4: str
```

- *Type:* str

The fourth line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#address_4 WisdomMessageTemplate#address_4}

---

##### `billing_address1`<sup>Optional</sup> <a name="billing_address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress1"></a>

```python
billing_address1: str
```

- *Type:* str

The first line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_address_1 WisdomMessageTemplate#billing_address_1}

---

##### `billing_address2`<sup>Optional</sup> <a name="billing_address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress2"></a>

```python
billing_address2: str
```

- *Type:* str

The second line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_address_2 WisdomMessageTemplate#billing_address_2}

---

##### `billing_address3`<sup>Optional</sup> <a name="billing_address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress3"></a>

```python
billing_address3: str
```

- *Type:* str

The third line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_address_3 WisdomMessageTemplate#billing_address_3}

---

##### `billing_address4`<sup>Optional</sup> <a name="billing_address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress4"></a>

```python
billing_address4: str
```

- *Type:* str

The fourth line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_address_4 WisdomMessageTemplate#billing_address_4}

---

##### `billing_city`<sup>Optional</sup> <a name="billing_city" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCity"></a>

```python
billing_city: str
```

- *Type:* str

The city of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_city WisdomMessageTemplate#billing_city}

---

##### `billing_country`<sup>Optional</sup> <a name="billing_country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCountry"></a>

```python
billing_country: str
```

- *Type:* str

The country of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_country WisdomMessageTemplate#billing_country}

---

##### `billing_county`<sup>Optional</sup> <a name="billing_county" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCounty"></a>

```python
billing_county: str
```

- *Type:* str

The county of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_county WisdomMessageTemplate#billing_county}

---

##### `billing_postal_code`<sup>Optional</sup> <a name="billing_postal_code" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingPostalCode"></a>

```python
billing_postal_code: str
```

- *Type:* str

The postal code of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_postal_code WisdomMessageTemplate#billing_postal_code}

---

##### `billing_province`<sup>Optional</sup> <a name="billing_province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingProvince"></a>

```python
billing_province: str
```

- *Type:* str

The province of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_province WisdomMessageTemplate#billing_province}

---

##### `billing_state`<sup>Optional</sup> <a name="billing_state" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingState"></a>

```python
billing_state: str
```

- *Type:* str

The state of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_state WisdomMessageTemplate#billing_state}

---

##### `birth_date`<sup>Optional</sup> <a name="birth_date" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.birthDate"></a>

```python
birth_date: str
```

- *Type:* str

The customer's birth date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#birth_date WisdomMessageTemplate#birth_date}

---

##### `business_email_address`<sup>Optional</sup> <a name="business_email_address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessEmailAddress"></a>

```python
business_email_address: str
```

- *Type:* str

The customer's business email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#business_email_address WisdomMessageTemplate#business_email_address}

---

##### `business_name`<sup>Optional</sup> <a name="business_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessName"></a>

```python
business_name: str
```

- *Type:* str

The name of the customer's business.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#business_name WisdomMessageTemplate#business_name}

---

##### `business_phone_number`<sup>Optional</sup> <a name="business_phone_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessPhoneNumber"></a>

```python
business_phone_number: str
```

- *Type:* str

The customer's business phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#business_phone_number WisdomMessageTemplate#business_phone_number}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.city"></a>

```python
city: str
```

- *Type:* str

The city in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#city WisdomMessageTemplate#city}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.country"></a>

```python
country: str
```

- *Type:* str

The country in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#country WisdomMessageTemplate#country}

---

##### `county`<sup>Optional</sup> <a name="county" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.county"></a>

```python
county: str
```

- *Type:* str

The county in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#county WisdomMessageTemplate#county}

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.custom"></a>

```python
custom: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The custom attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#custom WisdomMessageTemplate#custom}

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

The customer's email address, which has not been specified as a personal or business address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#email_address WisdomMessageTemplate#email_address}

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

The customer's first name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#first_name WisdomMessageTemplate#first_name}

---

##### `gender`<sup>Optional</sup> <a name="gender" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.gender"></a>

```python
gender: str
```

- *Type:* str

The customer's gender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#gender WisdomMessageTemplate#gender}

---

##### `home_phone_number`<sup>Optional</sup> <a name="home_phone_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.homePhoneNumber"></a>

```python
home_phone_number: str
```

- *Type:* str

The customer's home phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#home_phone_number WisdomMessageTemplate#home_phone_number}

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

The customer's last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#last_name WisdomMessageTemplate#last_name}

---

##### `mailing_address1`<sup>Optional</sup> <a name="mailing_address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress1"></a>

```python
mailing_address1: str
```

- *Type:* str

The first line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_address_1 WisdomMessageTemplate#mailing_address_1}

---

##### `mailing_address2`<sup>Optional</sup> <a name="mailing_address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress2"></a>

```python
mailing_address2: str
```

- *Type:* str

The second line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_address_2 WisdomMessageTemplate#mailing_address_2}

---

##### `mailing_address3`<sup>Optional</sup> <a name="mailing_address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress3"></a>

```python
mailing_address3: str
```

- *Type:* str

The third line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_address_3 WisdomMessageTemplate#mailing_address_3}

---

##### `mailing_address4`<sup>Optional</sup> <a name="mailing_address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress4"></a>

```python
mailing_address4: str
```

- *Type:* str

The fourth line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_address_4 WisdomMessageTemplate#mailing_address_4}

---

##### `mailing_city`<sup>Optional</sup> <a name="mailing_city" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCity"></a>

```python
mailing_city: str
```

- *Type:* str

The city of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_city WisdomMessageTemplate#mailing_city}

---

##### `mailing_country`<sup>Optional</sup> <a name="mailing_country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCountry"></a>

```python
mailing_country: str
```

- *Type:* str

The country of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_country WisdomMessageTemplate#mailing_country}

---

##### `mailing_county`<sup>Optional</sup> <a name="mailing_county" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCounty"></a>

```python
mailing_county: str
```

- *Type:* str

The county of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_county WisdomMessageTemplate#mailing_county}

---

##### `mailing_postal_code`<sup>Optional</sup> <a name="mailing_postal_code" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingPostalCode"></a>

```python
mailing_postal_code: str
```

- *Type:* str

The postal code of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_postal_code WisdomMessageTemplate#mailing_postal_code}

---

##### `mailing_province`<sup>Optional</sup> <a name="mailing_province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingProvince"></a>

```python
mailing_province: str
```

- *Type:* str

The province of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_province WisdomMessageTemplate#mailing_province}

---

##### `mailing_state`<sup>Optional</sup> <a name="mailing_state" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingState"></a>

```python
mailing_state: str
```

- *Type:* str

The state of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_state WisdomMessageTemplate#mailing_state}

---

##### `middle_name`<sup>Optional</sup> <a name="middle_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

The customer's middle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#middle_name WisdomMessageTemplate#middle_name}

---

##### `mobile_phone_number`<sup>Optional</sup> <a name="mobile_phone_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mobilePhoneNumber"></a>

```python
mobile_phone_number: str
```

- *Type:* str

The customer's mobile phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mobile_phone_number WisdomMessageTemplate#mobile_phone_number}

---

##### `party_type`<sup>Optional</sup> <a name="party_type" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.partyType"></a>

```python
party_type: str
```

- *Type:* str

The customer's party type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#party_type WisdomMessageTemplate#party_type}

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

The customer's phone number, which has not been specified as a mobile, home, or business number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#phone_number WisdomMessageTemplate#phone_number}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

The postal code of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#postal_code WisdomMessageTemplate#postal_code}

---

##### `profile_arn`<sup>Optional</sup> <a name="profile_arn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.profileArn"></a>

```python
profile_arn: str
```

- *Type:* str

The ARN of a customer profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#profile_arn WisdomMessageTemplate#profile_arn}

---

##### `profile_id`<sup>Optional</sup> <a name="profile_id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

The unique identifier of a customer profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#profile_id WisdomMessageTemplate#profile_id}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.province"></a>

```python
province: str
```

- *Type:* str

The province in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#province WisdomMessageTemplate#province}

---

##### `shipping_address1`<sup>Optional</sup> <a name="shipping_address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress1"></a>

```python
shipping_address1: str
```

- *Type:* str

The first line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_address_1 WisdomMessageTemplate#shipping_address_1}

---

##### `shipping_address2`<sup>Optional</sup> <a name="shipping_address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress2"></a>

```python
shipping_address2: str
```

- *Type:* str

The second line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_address_2 WisdomMessageTemplate#shipping_address_2}

---

##### `shipping_address3`<sup>Optional</sup> <a name="shipping_address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress3"></a>

```python
shipping_address3: str
```

- *Type:* str

The third line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_address_3 WisdomMessageTemplate#shipping_address_3}

---

##### `shipping_address4`<sup>Optional</sup> <a name="shipping_address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress4"></a>

```python
shipping_address4: str
```

- *Type:* str

The fourth line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_address_4 WisdomMessageTemplate#shipping_address_4}

---

##### `shipping_city`<sup>Optional</sup> <a name="shipping_city" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCity"></a>

```python
shipping_city: str
```

- *Type:* str

The city of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_city WisdomMessageTemplate#shipping_city}

---

##### `shipping_country`<sup>Optional</sup> <a name="shipping_country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCountry"></a>

```python
shipping_country: str
```

- *Type:* str

The country of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_country WisdomMessageTemplate#shipping_country}

---

##### `shipping_county`<sup>Optional</sup> <a name="shipping_county" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCounty"></a>

```python
shipping_county: str
```

- *Type:* str

The county of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_county WisdomMessageTemplate#shipping_county}

---

##### `shipping_postal_code`<sup>Optional</sup> <a name="shipping_postal_code" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingPostalCode"></a>

```python
shipping_postal_code: str
```

- *Type:* str

The postal code of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_postal_code WisdomMessageTemplate#shipping_postal_code}

---

##### `shipping_province`<sup>Optional</sup> <a name="shipping_province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingProvince"></a>

```python
shipping_province: str
```

- *Type:* str

The province of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_province WisdomMessageTemplate#shipping_province}

---

##### `shipping_state`<sup>Optional</sup> <a name="shipping_state" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingState"></a>

```python
shipping_state: str
```

- *Type:* str

The state of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_state WisdomMessageTemplate#shipping_state}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.state"></a>

```python
state: str
```

- *Type:* str

The state in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#state WisdomMessageTemplate#state}

---

### WisdomMessageTemplateDefaultAttributesSystemAttributes <a name="WisdomMessageTemplateDefaultAttributesSystemAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes(
  customer_endpoint: WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint = None,
  name: str = None,
  system_endpoint: WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.customerEndpoint">customer_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a></code> | The CustomerEndpoint attribute. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.name">name</a></code> | <code>str</code> | The name of the task. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.systemEndpoint">system_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a></code> | The SystemEndpoint attribute. |

---

##### `customer_endpoint`<sup>Optional</sup> <a name="customer_endpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.customerEndpoint"></a>

```python
customer_endpoint: WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a>

The CustomerEndpoint attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#customer_endpoint WisdomMessageTemplate#customer_endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#name WisdomMessageTemplate#name}

---

##### `system_endpoint`<sup>Optional</sup> <a name="system_endpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.systemEndpoint"></a>

```python
system_endpoint: WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a>

The SystemEndpoint attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#system_endpoint WisdomMessageTemplate#system_endpoint}

---

### WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint(
  address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint.property.address">address</a></code> | <code>str</code> | The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint.property.address"></a>

```python
address: str
```

- *Type:* str

The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#address WisdomMessageTemplate#address}

---

### WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint(
  address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint.property.address">address</a></code> | <code>str</code> | The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint.property.address"></a>

```python
address: str
```

- *Type:* str

The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#address WisdomMessageTemplate#address}

---

### WisdomMessageTemplateGroupingConfiguration <a name="WisdomMessageTemplateGroupingConfiguration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration(
  criteria: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.property.criteria">criteria</a></code> | <code>str</code> | The criteria used for grouping Amazon Q in Connect users. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.property.values">values</a></code> | <code>typing.List[str]</code> | The list of values that define different groups of Amazon Q in Connect users. |

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.property.criteria"></a>

```python
criteria: str
```

- *Type:* str

The criteria used for grouping Amazon Q in Connect users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#criteria WisdomMessageTemplate#criteria}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The list of values that define different groups of Amazon Q in Connect users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#values WisdomMessageTemplate#values}

---

### WisdomMessageTemplateMessageTemplateAttachments <a name="WisdomMessageTemplateMessageTemplateAttachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments(
  attachment_id: str = None,
  attachment_name: str = None,
  s3_presigned_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.attachmentId">attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#attachment_id WisdomMessageTemplate#attachment_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.attachmentName">attachment_name</a></code> | <code>str</code> | The name of the attachment file being uploaded. The name should include the file extension. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.s3PresignedUrl">s3_presigned_url</a></code> | <code>str</code> | The S3 Presigned URL for the attachment file. |

---

##### `attachment_id`<sup>Optional</sup> <a name="attachment_id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.attachmentId"></a>

```python
attachment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#attachment_id WisdomMessageTemplate#attachment_id}.

---

##### `attachment_name`<sup>Optional</sup> <a name="attachment_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.attachmentName"></a>

```python
attachment_name: str
```

- *Type:* str

The name of the attachment file being uploaded. The name should include the file extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#attachment_name WisdomMessageTemplate#attachment_name}

---

##### `s3_presigned_url`<sup>Optional</sup> <a name="s3_presigned_url" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.s3PresignedUrl"></a>

```python
s3_presigned_url: str
```

- *Type:* str

The S3 Presigned URL for the attachment file.

When generating the PreSignedUrl, please ensure that the expires-in time is set to 30 minutes. The URL can be generated through the AWS Console or through the AWS CLI (https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#s3_presigned_url WisdomMessageTemplate#s3_presigned_url}

---

### WisdomMessageTemplateTags <a name="WisdomMessageTemplateTags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#key WisdomMessageTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#value WisdomMessageTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resetContent">reset_content</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resetContent"></a>

```python
def reset_content() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a>

---


### WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putHtml">put_html</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putPlainText">put_plain_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resetHtml">reset_html</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resetPlainText">reset_plain_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_html` <a name="put_html" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putHtml"></a>

```python
def put_html(
  content: str = None
) -> None
```

###### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putHtml.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}.

---

##### `put_plain_text` <a name="put_plain_text" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putPlainText"></a>

```python
def put_plain_text(
  content: str = None
) -> None
```

###### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putPlainText.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}.

---

##### `reset_html` <a name="reset_html" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resetHtml"></a>

```python
def reset_html() -> None
```

##### `reset_plain_text` <a name="reset_plain_text" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resetPlainText"></a>

```python
def reset_plain_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.html">html</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.plainText">plain_text</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.htmlInput">html_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.plainTextInput">plain_text_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.html"></a>

```python
html: WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference</a>

---

##### `plain_text`<sup>Required</sup> <a name="plain_text" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.plainText"></a>

```python
plain_text: WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference</a>

---

##### `html_input`<sup>Optional</sup> <a name="html_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.htmlInput"></a>

```python
html_input: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a>

---

##### `plain_text_input`<sup>Optional</sup> <a name="plain_text_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.plainTextInput"></a>

```python
plain_text_input: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContentBody
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a>

---


### WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resetContent">reset_content</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resetContent"></a>

```python
def reset_content() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a>

---


### WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList <a name="WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WisdomMessageTemplateContentEmailMessageTemplateContentHeaders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>]

---


### WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContentHeaders
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>

---


### WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putBody">put_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetSubject">reset_subject</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_body` <a name="put_body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putBody"></a>

```python
def put_body(
  html: WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml = None,
  plain_text: WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText = None
) -> None
```

###### `html`<sup>Optional</sup> <a name="html" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putBody.parameter.html"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a>

The message body, in HTML format, to use in email messages that are based on the message template.

We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#html WisdomMessageTemplate#html}

---

###### `plain_text`<sup>Optional</sup> <a name="plain_text" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putBody.parameter.plainText"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a>

The message body, in plain text format, to use in email messages that are based on the message template.

We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#plain_text WisdomMessageTemplate#plain_text}

---

##### `put_headers` <a name="put_headers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putHeaders"></a>

```python
def put_headers(
  value: IResolvable | typing.List[WisdomMessageTemplateContentEmailMessageTemplateContentHeaders]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>]

---

##### `reset_body` <a name="reset_body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_subject` <a name="reset_subject" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetSubject"></a>

```python
def reset_subject() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.body">body</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList">WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.bodyInput">body_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.headersInput">headers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.body"></a>

```python
body: WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference</a>

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.headers"></a>

```python
headers: WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList">WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList</a>

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.bodyInput"></a>

```python
body_input: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContentBody
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a>

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.headersInput"></a>

```python
headers_input: IResolvable | typing.List[WisdomMessageTemplateContentEmailMessageTemplateContentHeaders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>]

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a>

---


### WisdomMessageTemplateContentOutputReference <a name="WisdomMessageTemplateContentOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putEmailMessageTemplateContent">put_email_message_template_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putSmsMessageTemplateContent">put_sms_message_template_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resetEmailMessageTemplateContent">reset_email_message_template_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resetSmsMessageTemplateContent">reset_sms_message_template_content</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_email_message_template_content` <a name="put_email_message_template_content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putEmailMessageTemplateContent"></a>

```python
def put_email_message_template_content(
  body: WisdomMessageTemplateContentEmailMessageTemplateContentBody = None,
  headers: IResolvable | typing.List[WisdomMessageTemplateContentEmailMessageTemplateContentHeaders] = None,
  subject: str = None
) -> None
```

###### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putEmailMessageTemplateContent.parameter.body"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a>

The body to use in email messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#body WisdomMessageTemplate#body}

---

###### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putEmailMessageTemplateContent.parameter.headers"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>]

The email headers to include in email messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#headers WisdomMessageTemplate#headers}

---

###### `subject`<sup>Optional</sup> <a name="subject" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putEmailMessageTemplateContent.parameter.subject"></a>

- *Type:* str

The subject line, or title, to use in email messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#subject WisdomMessageTemplate#subject}

---

##### `put_sms_message_template_content` <a name="put_sms_message_template_content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putSmsMessageTemplateContent"></a>

```python
def put_sms_message_template_content(
  body: WisdomMessageTemplateContentSmsMessageTemplateContentBody = None
) -> None
```

###### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putSmsMessageTemplateContent.parameter.body"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a>

The body to use in SMS messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#body WisdomMessageTemplate#body}

---

##### `reset_email_message_template_content` <a name="reset_email_message_template_content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resetEmailMessageTemplateContent"></a>

```python
def reset_email_message_template_content() -> None
```

##### `reset_sms_message_template_content` <a name="reset_sms_message_template_content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resetSmsMessageTemplateContent"></a>

```python
def reset_sms_message_template_content() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.emailMessageTemplateContent">email_message_template_content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.smsMessageTemplateContent">sms_message_template_content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.emailMessageTemplateContentInput">email_message_template_content_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.smsMessageTemplateContentInput">sms_message_template_content_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_message_template_content`<sup>Required</sup> <a name="email_message_template_content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.emailMessageTemplateContent"></a>

```python
email_message_template_content: WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference</a>

---

##### `sms_message_template_content`<sup>Required</sup> <a name="sms_message_template_content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.smsMessageTemplateContent"></a>

```python
sms_message_template_content: WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference</a>

---

##### `email_message_template_content_input`<sup>Optional</sup> <a name="email_message_template_content_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.emailMessageTemplateContentInput"></a>

```python
email_message_template_content_input: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a>

---

##### `sms_message_template_content_input`<sup>Optional</sup> <a name="sms_message_template_content_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.smsMessageTemplateContentInput"></a>

```python
sms_message_template_content_input: IResolvable | WisdomMessageTemplateContentSmsMessageTemplateContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomMessageTemplateContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a>

---


### WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference <a name="WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.putPlainText">put_plain_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resetPlainText">reset_plain_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_plain_text` <a name="put_plain_text" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.putPlainText"></a>

```python
def put_plain_text(
  content: str = None
) -> None
```

###### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.putPlainText.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}.

---

##### `reset_plain_text` <a name="reset_plain_text" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resetPlainText"></a>

```python
def reset_plain_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.plainText">plain_text</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.plainTextInput">plain_text_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plain_text`<sup>Required</sup> <a name="plain_text" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.plainText"></a>

```python
plain_text: WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference</a>

---

##### `plain_text_input`<sup>Optional</sup> <a name="plain_text_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.plainTextInput"></a>

```python
plain_text_input: IResolvable | WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomMessageTemplateContentSmsMessageTemplateContentBody
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a>

---


### WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference <a name="WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resetContent">reset_content</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resetContent"></a>

```python
def reset_content() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a>

---


### WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference <a name="WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.putBody">put_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resetBody">reset_body</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_body` <a name="put_body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.putBody"></a>

```python
def put_body(
  plain_text: WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText = None
) -> None
```

###### `plain_text`<sup>Optional</sup> <a name="plain_text" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.putBody.parameter.plainText"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a>

The container of message template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#plain_text WisdomMessageTemplate#plain_text}

---

##### `reset_body` <a name="reset_body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resetBody"></a>

```python
def reset_body() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.body">body</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.bodyInput">body_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.body"></a>

```python
body: WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference</a>

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.bodyInput"></a>

```python
body_input: IResolvable | WisdomMessageTemplateContentSmsMessageTemplateContentBody
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomMessageTemplateContentSmsMessageTemplateContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a>

---


### WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference <a name="WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resetLastName">reset_last_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_first_name` <a name="reset_first_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resetLastName"></a>

```python
def reset_last_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomMessageTemplateDefaultAttributesAgentAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a>

---


### WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference <a name="WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAccountNumber">reset_account_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAdditionalInformation">reset_additional_information</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress1">reset_address1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress2">reset_address2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress3">reset_address3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress4">reset_address4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress1">reset_billing_address1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress2">reset_billing_address2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress3">reset_billing_address3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress4">reset_billing_address4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCity">reset_billing_city</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCountry">reset_billing_country</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCounty">reset_billing_county</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingPostalCode">reset_billing_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingProvince">reset_billing_province</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingState">reset_billing_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBirthDate">reset_birth_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessEmailAddress">reset_business_email_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessName">reset_business_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessPhoneNumber">reset_business_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCounty">reset_county</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCustom">reset_custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetEmailAddress">reset_email_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetGender">reset_gender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetHomePhoneNumber">reset_home_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetLastName">reset_last_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress1">reset_mailing_address1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress2">reset_mailing_address2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress3">reset_mailing_address3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress4">reset_mailing_address4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCity">reset_mailing_city</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCountry">reset_mailing_country</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCounty">reset_mailing_county</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingPostalCode">reset_mailing_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingProvince">reset_mailing_province</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingState">reset_mailing_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMiddleName">reset_middle_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMobilePhoneNumber">reset_mobile_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPartyType">reset_party_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProfileArn">reset_profile_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProfileId">reset_profile_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProvince">reset_province</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress1">reset_shipping_address1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress2">reset_shipping_address2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress3">reset_shipping_address3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress4">reset_shipping_address4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCity">reset_shipping_city</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCountry">reset_shipping_country</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCounty">reset_shipping_county</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingPostalCode">reset_shipping_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingProvince">reset_shipping_province</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingState">reset_shipping_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account_number` <a name="reset_account_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAccountNumber"></a>

```python
def reset_account_number() -> None
```

##### `reset_additional_information` <a name="reset_additional_information" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAdditionalInformation"></a>

```python
def reset_additional_information() -> None
```

##### `reset_address1` <a name="reset_address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress1"></a>

```python
def reset_address1() -> None
```

##### `reset_address2` <a name="reset_address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress2"></a>

```python
def reset_address2() -> None
```

##### `reset_address3` <a name="reset_address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress3"></a>

```python
def reset_address3() -> None
```

##### `reset_address4` <a name="reset_address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress4"></a>

```python
def reset_address4() -> None
```

##### `reset_billing_address1` <a name="reset_billing_address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress1"></a>

```python
def reset_billing_address1() -> None
```

##### `reset_billing_address2` <a name="reset_billing_address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress2"></a>

```python
def reset_billing_address2() -> None
```

##### `reset_billing_address3` <a name="reset_billing_address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress3"></a>

```python
def reset_billing_address3() -> None
```

##### `reset_billing_address4` <a name="reset_billing_address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress4"></a>

```python
def reset_billing_address4() -> None
```

##### `reset_billing_city` <a name="reset_billing_city" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCity"></a>

```python
def reset_billing_city() -> None
```

##### `reset_billing_country` <a name="reset_billing_country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCountry"></a>

```python
def reset_billing_country() -> None
```

##### `reset_billing_county` <a name="reset_billing_county" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCounty"></a>

```python
def reset_billing_county() -> None
```

##### `reset_billing_postal_code` <a name="reset_billing_postal_code" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingPostalCode"></a>

```python
def reset_billing_postal_code() -> None
```

##### `reset_billing_province` <a name="reset_billing_province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingProvince"></a>

```python
def reset_billing_province() -> None
```

##### `reset_billing_state` <a name="reset_billing_state" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingState"></a>

```python
def reset_billing_state() -> None
```

##### `reset_birth_date` <a name="reset_birth_date" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBirthDate"></a>

```python
def reset_birth_date() -> None
```

##### `reset_business_email_address` <a name="reset_business_email_address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessEmailAddress"></a>

```python
def reset_business_email_address() -> None
```

##### `reset_business_name` <a name="reset_business_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessName"></a>

```python
def reset_business_name() -> None
```

##### `reset_business_phone_number` <a name="reset_business_phone_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessPhoneNumber"></a>

```python
def reset_business_phone_number() -> None
```

##### `reset_city` <a name="reset_city" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_county` <a name="reset_county" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCounty"></a>

```python
def reset_county() -> None
```

##### `reset_custom` <a name="reset_custom" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCustom"></a>

```python
def reset_custom() -> None
```

##### `reset_email_address` <a name="reset_email_address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetEmailAddress"></a>

```python
def reset_email_address() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_gender` <a name="reset_gender" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetGender"></a>

```python
def reset_gender() -> None
```

##### `reset_home_phone_number` <a name="reset_home_phone_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetHomePhoneNumber"></a>

```python
def reset_home_phone_number() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetLastName"></a>

```python
def reset_last_name() -> None
```

##### `reset_mailing_address1` <a name="reset_mailing_address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress1"></a>

```python
def reset_mailing_address1() -> None
```

##### `reset_mailing_address2` <a name="reset_mailing_address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress2"></a>

```python
def reset_mailing_address2() -> None
```

##### `reset_mailing_address3` <a name="reset_mailing_address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress3"></a>

```python
def reset_mailing_address3() -> None
```

##### `reset_mailing_address4` <a name="reset_mailing_address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress4"></a>

```python
def reset_mailing_address4() -> None
```

##### `reset_mailing_city` <a name="reset_mailing_city" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCity"></a>

```python
def reset_mailing_city() -> None
```

##### `reset_mailing_country` <a name="reset_mailing_country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCountry"></a>

```python
def reset_mailing_country() -> None
```

##### `reset_mailing_county` <a name="reset_mailing_county" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCounty"></a>

```python
def reset_mailing_county() -> None
```

##### `reset_mailing_postal_code` <a name="reset_mailing_postal_code" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingPostalCode"></a>

```python
def reset_mailing_postal_code() -> None
```

##### `reset_mailing_province` <a name="reset_mailing_province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingProvince"></a>

```python
def reset_mailing_province() -> None
```

##### `reset_mailing_state` <a name="reset_mailing_state" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingState"></a>

```python
def reset_mailing_state() -> None
```

##### `reset_middle_name` <a name="reset_middle_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMiddleName"></a>

```python
def reset_middle_name() -> None
```

##### `reset_mobile_phone_number` <a name="reset_mobile_phone_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMobilePhoneNumber"></a>

```python
def reset_mobile_phone_number() -> None
```

##### `reset_party_type` <a name="reset_party_type" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPartyType"></a>

```python
def reset_party_type() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_profile_arn` <a name="reset_profile_arn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProfileArn"></a>

```python
def reset_profile_arn() -> None
```

##### `reset_profile_id` <a name="reset_profile_id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProfileId"></a>

```python
def reset_profile_id() -> None
```

##### `reset_province` <a name="reset_province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProvince"></a>

```python
def reset_province() -> None
```

##### `reset_shipping_address1` <a name="reset_shipping_address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress1"></a>

```python
def reset_shipping_address1() -> None
```

##### `reset_shipping_address2` <a name="reset_shipping_address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress2"></a>

```python
def reset_shipping_address2() -> None
```

##### `reset_shipping_address3` <a name="reset_shipping_address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress3"></a>

```python
def reset_shipping_address3() -> None
```

##### `reset_shipping_address4` <a name="reset_shipping_address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress4"></a>

```python
def reset_shipping_address4() -> None
```

##### `reset_shipping_city` <a name="reset_shipping_city" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCity"></a>

```python
def reset_shipping_city() -> None
```

##### `reset_shipping_country` <a name="reset_shipping_country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCountry"></a>

```python
def reset_shipping_country() -> None
```

##### `reset_shipping_county` <a name="reset_shipping_county" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCounty"></a>

```python
def reset_shipping_county() -> None
```

##### `reset_shipping_postal_code` <a name="reset_shipping_postal_code" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingPostalCode"></a>

```python
def reset_shipping_postal_code() -> None
```

##### `reset_shipping_province` <a name="reset_shipping_province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingProvince"></a>

```python
def reset_shipping_province() -> None
```

##### `reset_shipping_state` <a name="reset_shipping_state" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingState"></a>

```python
def reset_shipping_state() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.accountNumberInput">account_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.additionalInformationInput">additional_information_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address1Input">address1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address2Input">address2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address3Input">address3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address4Input">address4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress1Input">billing_address1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress2Input">billing_address2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress3Input">billing_address3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress4Input">billing_address4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCityInput">billing_city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountryInput">billing_country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountyInput">billing_county_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingPostalCodeInput">billing_postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingProvinceInput">billing_province_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingStateInput">billing_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.birthDateInput">birth_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessEmailAddressInput">business_email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessNameInput">business_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessPhoneNumberInput">business_phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.countyInput">county_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.customInput">custom_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.genderInput">gender_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.homePhoneNumberInput">home_phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress1Input">mailing_address1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress2Input">mailing_address2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress3Input">mailing_address3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress4Input">mailing_address4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCityInput">mailing_city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountryInput">mailing_country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountyInput">mailing_county_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingPostalCodeInput">mailing_postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingProvinceInput">mailing_province_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingStateInput">mailing_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.middleNameInput">middle_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mobilePhoneNumberInput">mobile_phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.partyTypeInput">party_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileArnInput">profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileIdInput">profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.provinceInput">province_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress1Input">shipping_address1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress2Input">shipping_address2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress3Input">shipping_address3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress4Input">shipping_address4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCityInput">shipping_city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountryInput">shipping_country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountyInput">shipping_county_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingPostalCodeInput">shipping_postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingProvinceInput">shipping_province_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingStateInput">shipping_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.accountNumber">account_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.additionalInformation">additional_information</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address1">address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address2">address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address3">address3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address4">address4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress1">billing_address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress2">billing_address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress3">billing_address3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress4">billing_address4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCity">billing_city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountry">billing_country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCounty">billing_county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingPostalCode">billing_postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingProvince">billing_province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingState">billing_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.birthDate">birth_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessEmailAddress">business_email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessName">business_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessPhoneNumber">business_phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.county">county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.custom">custom</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.gender">gender</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.homePhoneNumber">home_phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress1">mailing_address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress2">mailing_address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress3">mailing_address3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress4">mailing_address4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCity">mailing_city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountry">mailing_country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCounty">mailing_county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingPostalCode">mailing_postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingProvince">mailing_province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingState">mailing_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.middleName">middle_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mobilePhoneNumber">mobile_phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.partyType">party_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileArn">profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress1">shipping_address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress2">shipping_address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress3">shipping_address3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress4">shipping_address4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCity">shipping_city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountry">shipping_country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCounty">shipping_county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingPostalCode">shipping_postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingProvince">shipping_province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingState">shipping_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_number_input`<sup>Optional</sup> <a name="account_number_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.accountNumberInput"></a>

```python
account_number_input: str
```

- *Type:* str

---

##### `additional_information_input`<sup>Optional</sup> <a name="additional_information_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.additionalInformationInput"></a>

```python
additional_information_input: str
```

- *Type:* str

---

##### `address1_input`<sup>Optional</sup> <a name="address1_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address1Input"></a>

```python
address1_input: str
```

- *Type:* str

---

##### `address2_input`<sup>Optional</sup> <a name="address2_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address2Input"></a>

```python
address2_input: str
```

- *Type:* str

---

##### `address3_input`<sup>Optional</sup> <a name="address3_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address3Input"></a>

```python
address3_input: str
```

- *Type:* str

---

##### `address4_input`<sup>Optional</sup> <a name="address4_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address4Input"></a>

```python
address4_input: str
```

- *Type:* str

---

##### `billing_address1_input`<sup>Optional</sup> <a name="billing_address1_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress1Input"></a>

```python
billing_address1_input: str
```

- *Type:* str

---

##### `billing_address2_input`<sup>Optional</sup> <a name="billing_address2_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress2Input"></a>

```python
billing_address2_input: str
```

- *Type:* str

---

##### `billing_address3_input`<sup>Optional</sup> <a name="billing_address3_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress3Input"></a>

```python
billing_address3_input: str
```

- *Type:* str

---

##### `billing_address4_input`<sup>Optional</sup> <a name="billing_address4_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress4Input"></a>

```python
billing_address4_input: str
```

- *Type:* str

---

##### `billing_city_input`<sup>Optional</sup> <a name="billing_city_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCityInput"></a>

```python
billing_city_input: str
```

- *Type:* str

---

##### `billing_country_input`<sup>Optional</sup> <a name="billing_country_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountryInput"></a>

```python
billing_country_input: str
```

- *Type:* str

---

##### `billing_county_input`<sup>Optional</sup> <a name="billing_county_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountyInput"></a>

```python
billing_county_input: str
```

- *Type:* str

---

##### `billing_postal_code_input`<sup>Optional</sup> <a name="billing_postal_code_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingPostalCodeInput"></a>

```python
billing_postal_code_input: str
```

- *Type:* str

---

##### `billing_province_input`<sup>Optional</sup> <a name="billing_province_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingProvinceInput"></a>

```python
billing_province_input: str
```

- *Type:* str

---

##### `billing_state_input`<sup>Optional</sup> <a name="billing_state_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingStateInput"></a>

```python
billing_state_input: str
```

- *Type:* str

---

##### `birth_date_input`<sup>Optional</sup> <a name="birth_date_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.birthDateInput"></a>

```python
birth_date_input: str
```

- *Type:* str

---

##### `business_email_address_input`<sup>Optional</sup> <a name="business_email_address_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessEmailAddressInput"></a>

```python
business_email_address_input: str
```

- *Type:* str

---

##### `business_name_input`<sup>Optional</sup> <a name="business_name_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessNameInput"></a>

```python
business_name_input: str
```

- *Type:* str

---

##### `business_phone_number_input`<sup>Optional</sup> <a name="business_phone_number_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessPhoneNumberInput"></a>

```python
business_phone_number_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `county_input`<sup>Optional</sup> <a name="county_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.countyInput"></a>

```python
county_input: str
```

- *Type:* str

---

##### `custom_input`<sup>Optional</sup> <a name="custom_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.customInput"></a>

```python
custom_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `gender_input`<sup>Optional</sup> <a name="gender_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.genderInput"></a>

```python
gender_input: str
```

- *Type:* str

---

##### `home_phone_number_input`<sup>Optional</sup> <a name="home_phone_number_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.homePhoneNumberInput"></a>

```python
home_phone_number_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `mailing_address1_input`<sup>Optional</sup> <a name="mailing_address1_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress1Input"></a>

```python
mailing_address1_input: str
```

- *Type:* str

---

##### `mailing_address2_input`<sup>Optional</sup> <a name="mailing_address2_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress2Input"></a>

```python
mailing_address2_input: str
```

- *Type:* str

---

##### `mailing_address3_input`<sup>Optional</sup> <a name="mailing_address3_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress3Input"></a>

```python
mailing_address3_input: str
```

- *Type:* str

---

##### `mailing_address4_input`<sup>Optional</sup> <a name="mailing_address4_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress4Input"></a>

```python
mailing_address4_input: str
```

- *Type:* str

---

##### `mailing_city_input`<sup>Optional</sup> <a name="mailing_city_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCityInput"></a>

```python
mailing_city_input: str
```

- *Type:* str

---

##### `mailing_country_input`<sup>Optional</sup> <a name="mailing_country_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountryInput"></a>

```python
mailing_country_input: str
```

- *Type:* str

---

##### `mailing_county_input`<sup>Optional</sup> <a name="mailing_county_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountyInput"></a>

```python
mailing_county_input: str
```

- *Type:* str

---

##### `mailing_postal_code_input`<sup>Optional</sup> <a name="mailing_postal_code_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingPostalCodeInput"></a>

```python
mailing_postal_code_input: str
```

- *Type:* str

---

##### `mailing_province_input`<sup>Optional</sup> <a name="mailing_province_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingProvinceInput"></a>

```python
mailing_province_input: str
```

- *Type:* str

---

##### `mailing_state_input`<sup>Optional</sup> <a name="mailing_state_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingStateInput"></a>

```python
mailing_state_input: str
```

- *Type:* str

---

##### `middle_name_input`<sup>Optional</sup> <a name="middle_name_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.middleNameInput"></a>

```python
middle_name_input: str
```

- *Type:* str

---

##### `mobile_phone_number_input`<sup>Optional</sup> <a name="mobile_phone_number_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mobilePhoneNumberInput"></a>

```python
mobile_phone_number_input: str
```

- *Type:* str

---

##### `party_type_input`<sup>Optional</sup> <a name="party_type_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.partyTypeInput"></a>

```python
party_type_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `profile_arn_input`<sup>Optional</sup> <a name="profile_arn_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileArnInput"></a>

```python
profile_arn_input: str
```

- *Type:* str

---

##### `profile_id_input`<sup>Optional</sup> <a name="profile_id_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileIdInput"></a>

```python
profile_id_input: str
```

- *Type:* str

---

##### `province_input`<sup>Optional</sup> <a name="province_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.provinceInput"></a>

```python
province_input: str
```

- *Type:* str

---

##### `shipping_address1_input`<sup>Optional</sup> <a name="shipping_address1_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress1Input"></a>

```python
shipping_address1_input: str
```

- *Type:* str

---

##### `shipping_address2_input`<sup>Optional</sup> <a name="shipping_address2_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress2Input"></a>

```python
shipping_address2_input: str
```

- *Type:* str

---

##### `shipping_address3_input`<sup>Optional</sup> <a name="shipping_address3_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress3Input"></a>

```python
shipping_address3_input: str
```

- *Type:* str

---

##### `shipping_address4_input`<sup>Optional</sup> <a name="shipping_address4_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress4Input"></a>

```python
shipping_address4_input: str
```

- *Type:* str

---

##### `shipping_city_input`<sup>Optional</sup> <a name="shipping_city_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCityInput"></a>

```python
shipping_city_input: str
```

- *Type:* str

---

##### `shipping_country_input`<sup>Optional</sup> <a name="shipping_country_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountryInput"></a>

```python
shipping_country_input: str
```

- *Type:* str

---

##### `shipping_county_input`<sup>Optional</sup> <a name="shipping_county_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountyInput"></a>

```python
shipping_county_input: str
```

- *Type:* str

---

##### `shipping_postal_code_input`<sup>Optional</sup> <a name="shipping_postal_code_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingPostalCodeInput"></a>

```python
shipping_postal_code_input: str
```

- *Type:* str

---

##### `shipping_province_input`<sup>Optional</sup> <a name="shipping_province_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingProvinceInput"></a>

```python
shipping_province_input: str
```

- *Type:* str

---

##### `shipping_state_input`<sup>Optional</sup> <a name="shipping_state_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingStateInput"></a>

```python
shipping_state_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `account_number`<sup>Required</sup> <a name="account_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.accountNumber"></a>

```python
account_number: str
```

- *Type:* str

---

##### `additional_information`<sup>Required</sup> <a name="additional_information" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.additionalInformation"></a>

```python
additional_information: str
```

- *Type:* str

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address1"></a>

```python
address1: str
```

- *Type:* str

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address2"></a>

```python
address2: str
```

- *Type:* str

---

##### `address3`<sup>Required</sup> <a name="address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address3"></a>

```python
address3: str
```

- *Type:* str

---

##### `address4`<sup>Required</sup> <a name="address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address4"></a>

```python
address4: str
```

- *Type:* str

---

##### `billing_address1`<sup>Required</sup> <a name="billing_address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress1"></a>

```python
billing_address1: str
```

- *Type:* str

---

##### `billing_address2`<sup>Required</sup> <a name="billing_address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress2"></a>

```python
billing_address2: str
```

- *Type:* str

---

##### `billing_address3`<sup>Required</sup> <a name="billing_address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress3"></a>

```python
billing_address3: str
```

- *Type:* str

---

##### `billing_address4`<sup>Required</sup> <a name="billing_address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress4"></a>

```python
billing_address4: str
```

- *Type:* str

---

##### `billing_city`<sup>Required</sup> <a name="billing_city" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCity"></a>

```python
billing_city: str
```

- *Type:* str

---

##### `billing_country`<sup>Required</sup> <a name="billing_country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountry"></a>

```python
billing_country: str
```

- *Type:* str

---

##### `billing_county`<sup>Required</sup> <a name="billing_county" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCounty"></a>

```python
billing_county: str
```

- *Type:* str

---

##### `billing_postal_code`<sup>Required</sup> <a name="billing_postal_code" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingPostalCode"></a>

```python
billing_postal_code: str
```

- *Type:* str

---

##### `billing_province`<sup>Required</sup> <a name="billing_province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingProvince"></a>

```python
billing_province: str
```

- *Type:* str

---

##### `billing_state`<sup>Required</sup> <a name="billing_state" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingState"></a>

```python
billing_state: str
```

- *Type:* str

---

##### `birth_date`<sup>Required</sup> <a name="birth_date" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.birthDate"></a>

```python
birth_date: str
```

- *Type:* str

---

##### `business_email_address`<sup>Required</sup> <a name="business_email_address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessEmailAddress"></a>

```python
business_email_address: str
```

- *Type:* str

---

##### `business_name`<sup>Required</sup> <a name="business_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessName"></a>

```python
business_name: str
```

- *Type:* str

---

##### `business_phone_number`<sup>Required</sup> <a name="business_phone_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessPhoneNumber"></a>

```python
business_phone_number: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `county`<sup>Required</sup> <a name="county" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.county"></a>

```python
county: str
```

- *Type:* str

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.custom"></a>

```python
custom: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `gender`<sup>Required</sup> <a name="gender" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.gender"></a>

```python
gender: str
```

- *Type:* str

---

##### `home_phone_number`<sup>Required</sup> <a name="home_phone_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.homePhoneNumber"></a>

```python
home_phone_number: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `mailing_address1`<sup>Required</sup> <a name="mailing_address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress1"></a>

```python
mailing_address1: str
```

- *Type:* str

---

##### `mailing_address2`<sup>Required</sup> <a name="mailing_address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress2"></a>

```python
mailing_address2: str
```

- *Type:* str

---

##### `mailing_address3`<sup>Required</sup> <a name="mailing_address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress3"></a>

```python
mailing_address3: str
```

- *Type:* str

---

##### `mailing_address4`<sup>Required</sup> <a name="mailing_address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress4"></a>

```python
mailing_address4: str
```

- *Type:* str

---

##### `mailing_city`<sup>Required</sup> <a name="mailing_city" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCity"></a>

```python
mailing_city: str
```

- *Type:* str

---

##### `mailing_country`<sup>Required</sup> <a name="mailing_country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountry"></a>

```python
mailing_country: str
```

- *Type:* str

---

##### `mailing_county`<sup>Required</sup> <a name="mailing_county" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCounty"></a>

```python
mailing_county: str
```

- *Type:* str

---

##### `mailing_postal_code`<sup>Required</sup> <a name="mailing_postal_code" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingPostalCode"></a>

```python
mailing_postal_code: str
```

- *Type:* str

---

##### `mailing_province`<sup>Required</sup> <a name="mailing_province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingProvince"></a>

```python
mailing_province: str
```

- *Type:* str

---

##### `mailing_state`<sup>Required</sup> <a name="mailing_state" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingState"></a>

```python
mailing_state: str
```

- *Type:* str

---

##### `middle_name`<sup>Required</sup> <a name="middle_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

---

##### `mobile_phone_number`<sup>Required</sup> <a name="mobile_phone_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mobilePhoneNumber"></a>

```python
mobile_phone_number: str
```

- *Type:* str

---

##### `party_type`<sup>Required</sup> <a name="party_type" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.partyType"></a>

```python
party_type: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `profile_arn`<sup>Required</sup> <a name="profile_arn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileArn"></a>

```python
profile_arn: str
```

- *Type:* str

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `shipping_address1`<sup>Required</sup> <a name="shipping_address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress1"></a>

```python
shipping_address1: str
```

- *Type:* str

---

##### `shipping_address2`<sup>Required</sup> <a name="shipping_address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress2"></a>

```python
shipping_address2: str
```

- *Type:* str

---

##### `shipping_address3`<sup>Required</sup> <a name="shipping_address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress3"></a>

```python
shipping_address3: str
```

- *Type:* str

---

##### `shipping_address4`<sup>Required</sup> <a name="shipping_address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress4"></a>

```python
shipping_address4: str
```

- *Type:* str

---

##### `shipping_city`<sup>Required</sup> <a name="shipping_city" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCity"></a>

```python
shipping_city: str
```

- *Type:* str

---

##### `shipping_country`<sup>Required</sup> <a name="shipping_country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountry"></a>

```python
shipping_country: str
```

- *Type:* str

---

##### `shipping_county`<sup>Required</sup> <a name="shipping_county" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCounty"></a>

```python
shipping_county: str
```

- *Type:* str

---

##### `shipping_postal_code`<sup>Required</sup> <a name="shipping_postal_code" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingPostalCode"></a>

```python
shipping_postal_code: str
```

- *Type:* str

---

##### `shipping_province`<sup>Required</sup> <a name="shipping_province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingProvince"></a>

```python
shipping_province: str
```

- *Type:* str

---

##### `shipping_state`<sup>Required</sup> <a name="shipping_state" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingState"></a>

```python
shipping_state: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a>

---


### WisdomMessageTemplateDefaultAttributesOutputReference <a name="WisdomMessageTemplateDefaultAttributesOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putAgentAttributes">put_agent_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes">put_customer_profile_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putSystemAttributes">put_system_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetAgentAttributes">reset_agent_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetCustomerProfileAttributes">reset_customer_profile_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetSystemAttributes">reset_system_attributes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_agent_attributes` <a name="put_agent_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putAgentAttributes"></a>

```python
def put_agent_attributes(
  first_name: str = None,
  last_name: str = None
) -> None
```

###### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putAgentAttributes.parameter.firstName"></a>

- *Type:* str

The agent?s first name as entered in their Amazon Connect user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#first_name WisdomMessageTemplate#first_name}

---

###### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putAgentAttributes.parameter.lastName"></a>

- *Type:* str

The agent?s last name as entered in their Amazon Connect user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#last_name WisdomMessageTemplate#last_name}

---

##### `put_customer_profile_attributes` <a name="put_customer_profile_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes"></a>

```python
def put_customer_profile_attributes(
  account_number: str = None,
  additional_information: str = None,
  address1: str = None,
  address2: str = None,
  address3: str = None,
  address4: str = None,
  billing_address1: str = None,
  billing_address2: str = None,
  billing_address3: str = None,
  billing_address4: str = None,
  billing_city: str = None,
  billing_country: str = None,
  billing_county: str = None,
  billing_postal_code: str = None,
  billing_province: str = None,
  billing_state: str = None,
  birth_date: str = None,
  business_email_address: str = None,
  business_name: str = None,
  business_phone_number: str = None,
  city: str = None,
  country: str = None,
  county: str = None,
  custom: typing.Mapping[str] = None,
  email_address: str = None,
  first_name: str = None,
  gender: str = None,
  home_phone_number: str = None,
  last_name: str = None,
  mailing_address1: str = None,
  mailing_address2: str = None,
  mailing_address3: str = None,
  mailing_address4: str = None,
  mailing_city: str = None,
  mailing_country: str = None,
  mailing_county: str = None,
  mailing_postal_code: str = None,
  mailing_province: str = None,
  mailing_state: str = None,
  middle_name: str = None,
  mobile_phone_number: str = None,
  party_type: str = None,
  phone_number: str = None,
  postal_code: str = None,
  profile_arn: str = None,
  profile_id: str = None,
  province: str = None,
  shipping_address1: str = None,
  shipping_address2: str = None,
  shipping_address3: str = None,
  shipping_address4: str = None,
  shipping_city: str = None,
  shipping_country: str = None,
  shipping_county: str = None,
  shipping_postal_code: str = None,
  shipping_province: str = None,
  shipping_state: str = None,
  state: str = None
) -> None
```

###### `account_number`<sup>Optional</sup> <a name="account_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.accountNumber"></a>

- *Type:* str

A unique account number that you have given to the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#account_number WisdomMessageTemplate#account_number}

---

###### `additional_information`<sup>Optional</sup> <a name="additional_information" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.additionalInformation"></a>

- *Type:* str

Any additional information relevant to the customer's profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#additional_information WisdomMessageTemplate#additional_information}

---

###### `address1`<sup>Optional</sup> <a name="address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.address1"></a>

- *Type:* str

The first line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#address_1 WisdomMessageTemplate#address_1}

---

###### `address2`<sup>Optional</sup> <a name="address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.address2"></a>

- *Type:* str

The second line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#address_2 WisdomMessageTemplate#address_2}

---

###### `address3`<sup>Optional</sup> <a name="address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.address3"></a>

- *Type:* str

The third line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#address_3 WisdomMessageTemplate#address_3}

---

###### `address4`<sup>Optional</sup> <a name="address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.address4"></a>

- *Type:* str

The fourth line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#address_4 WisdomMessageTemplate#address_4}

---

###### `billing_address1`<sup>Optional</sup> <a name="billing_address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.billingAddress1"></a>

- *Type:* str

The first line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_address_1 WisdomMessageTemplate#billing_address_1}

---

###### `billing_address2`<sup>Optional</sup> <a name="billing_address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.billingAddress2"></a>

- *Type:* str

The second line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_address_2 WisdomMessageTemplate#billing_address_2}

---

###### `billing_address3`<sup>Optional</sup> <a name="billing_address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.billingAddress3"></a>

- *Type:* str

The third line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_address_3 WisdomMessageTemplate#billing_address_3}

---

###### `billing_address4`<sup>Optional</sup> <a name="billing_address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.billingAddress4"></a>

- *Type:* str

The fourth line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_address_4 WisdomMessageTemplate#billing_address_4}

---

###### `billing_city`<sup>Optional</sup> <a name="billing_city" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.billingCity"></a>

- *Type:* str

The city of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_city WisdomMessageTemplate#billing_city}

---

###### `billing_country`<sup>Optional</sup> <a name="billing_country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.billingCountry"></a>

- *Type:* str

The country of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_country WisdomMessageTemplate#billing_country}

---

###### `billing_county`<sup>Optional</sup> <a name="billing_county" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.billingCounty"></a>

- *Type:* str

The county of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_county WisdomMessageTemplate#billing_county}

---

###### `billing_postal_code`<sup>Optional</sup> <a name="billing_postal_code" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.billingPostalCode"></a>

- *Type:* str

The postal code of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_postal_code WisdomMessageTemplate#billing_postal_code}

---

###### `billing_province`<sup>Optional</sup> <a name="billing_province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.billingProvince"></a>

- *Type:* str

The province of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_province WisdomMessageTemplate#billing_province}

---

###### `billing_state`<sup>Optional</sup> <a name="billing_state" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.billingState"></a>

- *Type:* str

The state of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_state WisdomMessageTemplate#billing_state}

---

###### `birth_date`<sup>Optional</sup> <a name="birth_date" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.birthDate"></a>

- *Type:* str

The customer's birth date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#birth_date WisdomMessageTemplate#birth_date}

---

###### `business_email_address`<sup>Optional</sup> <a name="business_email_address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.businessEmailAddress"></a>

- *Type:* str

The customer's business email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#business_email_address WisdomMessageTemplate#business_email_address}

---

###### `business_name`<sup>Optional</sup> <a name="business_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.businessName"></a>

- *Type:* str

The name of the customer's business.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#business_name WisdomMessageTemplate#business_name}

---

###### `business_phone_number`<sup>Optional</sup> <a name="business_phone_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.businessPhoneNumber"></a>

- *Type:* str

The customer's business phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#business_phone_number WisdomMessageTemplate#business_phone_number}

---

###### `city`<sup>Optional</sup> <a name="city" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.city"></a>

- *Type:* str

The city in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#city WisdomMessageTemplate#city}

---

###### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.country"></a>

- *Type:* str

The country in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#country WisdomMessageTemplate#country}

---

###### `county`<sup>Optional</sup> <a name="county" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.county"></a>

- *Type:* str

The county in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#county WisdomMessageTemplate#county}

---

###### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.custom"></a>

- *Type:* typing.Mapping[str]

The custom attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#custom WisdomMessageTemplate#custom}

---

###### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.emailAddress"></a>

- *Type:* str

The customer's email address, which has not been specified as a personal or business address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#email_address WisdomMessageTemplate#email_address}

---

###### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.firstName"></a>

- *Type:* str

The customer's first name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#first_name WisdomMessageTemplate#first_name}

---

###### `gender`<sup>Optional</sup> <a name="gender" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.gender"></a>

- *Type:* str

The customer's gender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#gender WisdomMessageTemplate#gender}

---

###### `home_phone_number`<sup>Optional</sup> <a name="home_phone_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.homePhoneNumber"></a>

- *Type:* str

The customer's home phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#home_phone_number WisdomMessageTemplate#home_phone_number}

---

###### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.lastName"></a>

- *Type:* str

The customer's last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#last_name WisdomMessageTemplate#last_name}

---

###### `mailing_address1`<sup>Optional</sup> <a name="mailing_address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.mailingAddress1"></a>

- *Type:* str

The first line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_address_1 WisdomMessageTemplate#mailing_address_1}

---

###### `mailing_address2`<sup>Optional</sup> <a name="mailing_address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.mailingAddress2"></a>

- *Type:* str

The second line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_address_2 WisdomMessageTemplate#mailing_address_2}

---

###### `mailing_address3`<sup>Optional</sup> <a name="mailing_address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.mailingAddress3"></a>

- *Type:* str

The third line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_address_3 WisdomMessageTemplate#mailing_address_3}

---

###### `mailing_address4`<sup>Optional</sup> <a name="mailing_address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.mailingAddress4"></a>

- *Type:* str

The fourth line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_address_4 WisdomMessageTemplate#mailing_address_4}

---

###### `mailing_city`<sup>Optional</sup> <a name="mailing_city" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.mailingCity"></a>

- *Type:* str

The city of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_city WisdomMessageTemplate#mailing_city}

---

###### `mailing_country`<sup>Optional</sup> <a name="mailing_country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.mailingCountry"></a>

- *Type:* str

The country of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_country WisdomMessageTemplate#mailing_country}

---

###### `mailing_county`<sup>Optional</sup> <a name="mailing_county" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.mailingCounty"></a>

- *Type:* str

The county of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_county WisdomMessageTemplate#mailing_county}

---

###### `mailing_postal_code`<sup>Optional</sup> <a name="mailing_postal_code" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.mailingPostalCode"></a>

- *Type:* str

The postal code of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_postal_code WisdomMessageTemplate#mailing_postal_code}

---

###### `mailing_province`<sup>Optional</sup> <a name="mailing_province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.mailingProvince"></a>

- *Type:* str

The province of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_province WisdomMessageTemplate#mailing_province}

---

###### `mailing_state`<sup>Optional</sup> <a name="mailing_state" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.mailingState"></a>

- *Type:* str

The state of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_state WisdomMessageTemplate#mailing_state}

---

###### `middle_name`<sup>Optional</sup> <a name="middle_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.middleName"></a>

- *Type:* str

The customer's middle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#middle_name WisdomMessageTemplate#middle_name}

---

###### `mobile_phone_number`<sup>Optional</sup> <a name="mobile_phone_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.mobilePhoneNumber"></a>

- *Type:* str

The customer's mobile phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mobile_phone_number WisdomMessageTemplate#mobile_phone_number}

---

###### `party_type`<sup>Optional</sup> <a name="party_type" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.partyType"></a>

- *Type:* str

The customer's party type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#party_type WisdomMessageTemplate#party_type}

---

###### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.phoneNumber"></a>

- *Type:* str

The customer's phone number, which has not been specified as a mobile, home, or business number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#phone_number WisdomMessageTemplate#phone_number}

---

###### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.postalCode"></a>

- *Type:* str

The postal code of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#postal_code WisdomMessageTemplate#postal_code}

---

###### `profile_arn`<sup>Optional</sup> <a name="profile_arn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.profileArn"></a>

- *Type:* str

The ARN of a customer profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#profile_arn WisdomMessageTemplate#profile_arn}

---

###### `profile_id`<sup>Optional</sup> <a name="profile_id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.profileId"></a>

- *Type:* str

The unique identifier of a customer profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#profile_id WisdomMessageTemplate#profile_id}

---

###### `province`<sup>Optional</sup> <a name="province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.province"></a>

- *Type:* str

The province in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#province WisdomMessageTemplate#province}

---

###### `shipping_address1`<sup>Optional</sup> <a name="shipping_address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.shippingAddress1"></a>

- *Type:* str

The first line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_address_1 WisdomMessageTemplate#shipping_address_1}

---

###### `shipping_address2`<sup>Optional</sup> <a name="shipping_address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.shippingAddress2"></a>

- *Type:* str

The second line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_address_2 WisdomMessageTemplate#shipping_address_2}

---

###### `shipping_address3`<sup>Optional</sup> <a name="shipping_address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.shippingAddress3"></a>

- *Type:* str

The third line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_address_3 WisdomMessageTemplate#shipping_address_3}

---

###### `shipping_address4`<sup>Optional</sup> <a name="shipping_address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.shippingAddress4"></a>

- *Type:* str

The fourth line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_address_4 WisdomMessageTemplate#shipping_address_4}

---

###### `shipping_city`<sup>Optional</sup> <a name="shipping_city" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.shippingCity"></a>

- *Type:* str

The city of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_city WisdomMessageTemplate#shipping_city}

---

###### `shipping_country`<sup>Optional</sup> <a name="shipping_country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.shippingCountry"></a>

- *Type:* str

The country of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_country WisdomMessageTemplate#shipping_country}

---

###### `shipping_county`<sup>Optional</sup> <a name="shipping_county" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.shippingCounty"></a>

- *Type:* str

The county of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_county WisdomMessageTemplate#shipping_county}

---

###### `shipping_postal_code`<sup>Optional</sup> <a name="shipping_postal_code" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.shippingPostalCode"></a>

- *Type:* str

The postal code of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_postal_code WisdomMessageTemplate#shipping_postal_code}

---

###### `shipping_province`<sup>Optional</sup> <a name="shipping_province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.shippingProvince"></a>

- *Type:* str

The province of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_province WisdomMessageTemplate#shipping_province}

---

###### `shipping_state`<sup>Optional</sup> <a name="shipping_state" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.shippingState"></a>

- *Type:* str

The state of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_state WisdomMessageTemplate#shipping_state}

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.state"></a>

- *Type:* str

The state in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#state WisdomMessageTemplate#state}

---

##### `put_system_attributes` <a name="put_system_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putSystemAttributes"></a>

```python
def put_system_attributes(
  customer_endpoint: WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint = None,
  name: str = None,
  system_endpoint: WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint = None
) -> None
```

###### `customer_endpoint`<sup>Optional</sup> <a name="customer_endpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putSystemAttributes.parameter.customerEndpoint"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a>

The CustomerEndpoint attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#customer_endpoint WisdomMessageTemplate#customer_endpoint}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putSystemAttributes.parameter.name"></a>

- *Type:* str

The name of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#name WisdomMessageTemplate#name}

---

###### `system_endpoint`<sup>Optional</sup> <a name="system_endpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putSystemAttributes.parameter.systemEndpoint"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a>

The SystemEndpoint attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#system_endpoint WisdomMessageTemplate#system_endpoint}

---

##### `reset_agent_attributes` <a name="reset_agent_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetAgentAttributes"></a>

```python
def reset_agent_attributes() -> None
```

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_customer_profile_attributes` <a name="reset_customer_profile_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetCustomerProfileAttributes"></a>

```python
def reset_customer_profile_attributes() -> None
```

##### `reset_system_attributes` <a name="reset_system_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetSystemAttributes"></a>

```python
def reset_system_attributes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.agentAttributes">agent_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference">WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customerProfileAttributes">customer_profile_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.systemAttributes">system_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.agentAttributesInput">agent_attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customAttributesInput">custom_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customerProfileAttributesInput">customer_profile_attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.systemAttributesInput">system_attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_attributes`<sup>Required</sup> <a name="agent_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.agentAttributes"></a>

```python
agent_attributes: WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference">WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference</a>

---

##### `customer_profile_attributes`<sup>Required</sup> <a name="customer_profile_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customerProfileAttributes"></a>

```python
customer_profile_attributes: WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference</a>

---

##### `system_attributes`<sup>Required</sup> <a name="system_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.systemAttributes"></a>

```python
system_attributes: WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference</a>

---

##### `agent_attributes_input`<sup>Optional</sup> <a name="agent_attributes_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.agentAttributesInput"></a>

```python
agent_attributes_input: IResolvable | WisdomMessageTemplateDefaultAttributesAgentAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a>

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customAttributesInput"></a>

```python
custom_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `customer_profile_attributes_input`<sup>Optional</sup> <a name="customer_profile_attributes_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customerProfileAttributesInput"></a>

```python
customer_profile_attributes_input: IResolvable | WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a>

---

##### `system_attributes_input`<sup>Optional</sup> <a name="system_attributes_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.systemAttributesInput"></a>

```python
system_attributes_input: IResolvable | WisdomMessageTemplateDefaultAttributesSystemAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a>

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomMessageTemplateDefaultAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a>

---


### WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resetAddress">reset_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a>

---


### WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putCustomerEndpoint">put_customer_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putSystemEndpoint">put_system_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetCustomerEndpoint">reset_customer_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetSystemEndpoint">reset_system_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_customer_endpoint` <a name="put_customer_endpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putCustomerEndpoint"></a>

```python
def put_customer_endpoint(
  address: str = None
) -> None
```

###### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putCustomerEndpoint.parameter.address"></a>

- *Type:* str

The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#address WisdomMessageTemplate#address}

---

##### `put_system_endpoint` <a name="put_system_endpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putSystemEndpoint"></a>

```python
def put_system_endpoint(
  address: str = None
) -> None
```

###### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putSystemEndpoint.parameter.address"></a>

- *Type:* str

The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#address WisdomMessageTemplate#address}

---

##### `reset_customer_endpoint` <a name="reset_customer_endpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetCustomerEndpoint"></a>

```python
def reset_customer_endpoint() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_system_endpoint` <a name="reset_system_endpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetSystemEndpoint"></a>

```python
def reset_system_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.customerEndpoint">customer_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.systemEndpoint">system_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.customerEndpointInput">customer_endpoint_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.systemEndpointInput">system_endpoint_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_endpoint`<sup>Required</sup> <a name="customer_endpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.customerEndpoint"></a>

```python
customer_endpoint: WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference</a>

---

##### `system_endpoint`<sup>Required</sup> <a name="system_endpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.systemEndpoint"></a>

```python
system_endpoint: WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference</a>

---

##### `customer_endpoint_input`<sup>Optional</sup> <a name="customer_endpoint_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.customerEndpointInput"></a>

```python
customer_endpoint_input: IResolvable | WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `system_endpoint_input`<sup>Optional</sup> <a name="system_endpoint_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.systemEndpointInput"></a>

```python
system_endpoint_input: IResolvable | WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomMessageTemplateDefaultAttributesSystemAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a>

---


### WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resetAddress">reset_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a>

---


### WisdomMessageTemplateGroupingConfigurationOutputReference <a name="WisdomMessageTemplateGroupingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resetCriteria">reset_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_criteria` <a name="reset_criteria" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resetCriteria"></a>

```python
def reset_criteria() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.criteriaInput">criteria_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.criteria">criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criteria_input`<sup>Optional</sup> <a name="criteria_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.criteriaInput"></a>

```python
criteria_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.criteria"></a>

```python
criteria: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomMessageTemplateGroupingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a>

---


### WisdomMessageTemplateMessageTemplateAttachmentsList <a name="WisdomMessageTemplateMessageTemplateAttachmentsList" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WisdomMessageTemplateMessageTemplateAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WisdomMessageTemplateMessageTemplateAttachments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>]

---


### WisdomMessageTemplateMessageTemplateAttachmentsOutputReference <a name="WisdomMessageTemplateMessageTemplateAttachmentsOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetAttachmentId">reset_attachment_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetAttachmentName">reset_attachment_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetS3PresignedUrl">reset_s3_presigned_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attachment_id` <a name="reset_attachment_id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetAttachmentId"></a>

```python
def reset_attachment_id() -> None
```

##### `reset_attachment_name` <a name="reset_attachment_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetAttachmentName"></a>

```python
def reset_attachment_name() -> None
```

##### `reset_s3_presigned_url` <a name="reset_s3_presigned_url" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetS3PresignedUrl"></a>

```python
def reset_s3_presigned_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentIdInput">attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentNameInput">attachment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.s3PresignedUrlInput">s3_presigned_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentId">attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentName">attachment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.s3PresignedUrl">s3_presigned_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachment_id_input`<sup>Optional</sup> <a name="attachment_id_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentIdInput"></a>

```python
attachment_id_input: str
```

- *Type:* str

---

##### `attachment_name_input`<sup>Optional</sup> <a name="attachment_name_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentNameInput"></a>

```python
attachment_name_input: str
```

- *Type:* str

---

##### `s3_presigned_url_input`<sup>Optional</sup> <a name="s3_presigned_url_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.s3PresignedUrlInput"></a>

```python
s3_presigned_url_input: str
```

- *Type:* str

---

##### `attachment_id`<sup>Required</sup> <a name="attachment_id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentId"></a>

```python
attachment_id: str
```

- *Type:* str

---

##### `attachment_name`<sup>Required</sup> <a name="attachment_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentName"></a>

```python
attachment_name: str
```

- *Type:* str

---

##### `s3_presigned_url`<sup>Required</sup> <a name="s3_presigned_url" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.s3PresignedUrl"></a>

```python
s3_presigned_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomMessageTemplateMessageTemplateAttachments
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>

---


### WisdomMessageTemplateTagsList <a name="WisdomMessageTemplateTagsList" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WisdomMessageTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WisdomMessageTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>]

---


### WisdomMessageTemplateTagsOutputReference <a name="WisdomMessageTemplateTagsOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_message_template

wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomMessageTemplateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>

---



