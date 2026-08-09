# `wisdomQuickResponse` Submodule <a name="`wisdomQuickResponse` Submodule" id="@cdktn/provider-awscc.wisdomQuickResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomQuickResponse <a name="WisdomQuickResponse" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response awscc_wisdom_quick_response}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponse(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content: WisdomQuickResponseContent,
  knowledge_base_arn: str,
  name: str,
  channels: typing.List[str] = None,
  content_type: str = None,
  description: str = None,
  grouping_configuration: WisdomQuickResponseGroupingConfiguration = None,
  is_active: bool | IResolvable = None,
  language: str = None,
  shortcut_key: str = None,
  tags: IResolvable | typing.List[WisdomQuickResponseTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a></code> | The container of quick response content. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.knowledgeBaseArn">knowledge_base_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the knowledge base. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the quick response. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.channels">channels</a></code> | <code>typing.List[str]</code> | The Amazon Connect contact channels this quick response applies to. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | The media type of the quick response content. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the quick response. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.groupingConfiguration">grouping_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a></code> | The configuration information of the user groups that the quick response is accessible to. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.isActive">is_active</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the quick response is active. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.language">language</a></code> | <code>str</code> | The language code value for the language in which the quick response is written. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.shortcutKey">shortcut_key</a></code> | <code>str</code> | The shortcut key of the quick response. The value should be unique across the knowledge base. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.content"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a>

The container of quick response content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#content WisdomQuickResponse#content}

---

##### `knowledge_base_arn`<sup>Required</sup> <a name="knowledge_base_arn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.knowledgeBaseArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#knowledge_base_arn WisdomQuickResponse#knowledge_base_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.name"></a>

- *Type:* str

The name of the quick response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#name WisdomQuickResponse#name}

---

##### `channels`<sup>Optional</sup> <a name="channels" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.channels"></a>

- *Type:* typing.List[str]

The Amazon Connect contact channels this quick response applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#channels WisdomQuickResponse#channels}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.contentType"></a>

- *Type:* str

The media type of the quick response content.

* Use application/x.quickresponse;format=plain for quick response written in plain text.
* Use application/x.quickresponse;format=markdown for quick response written in richtext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#content_type WisdomQuickResponse#content_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.description"></a>

- *Type:* str

The description of the quick response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#description WisdomQuickResponse#description}

---

##### `grouping_configuration`<sup>Optional</sup> <a name="grouping_configuration" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.groupingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a>

The configuration information of the user groups that the quick response is accessible to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#grouping_configuration WisdomQuickResponse#grouping_configuration}

---

##### `is_active`<sup>Optional</sup> <a name="is_active" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.isActive"></a>

- *Type:* bool | cdktn.IResolvable

Whether the quick response is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#is_active WisdomQuickResponse#is_active}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.language"></a>

- *Type:* str

The language code value for the language in which the quick response is written.

The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#language WisdomQuickResponse#language}

---

##### `shortcut_key`<sup>Optional</sup> <a name="shortcut_key" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.shortcutKey"></a>

- *Type:* str

The shortcut key of the quick response. The value should be unique across the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#shortcut_key WisdomQuickResponse#shortcut_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#tags WisdomQuickResponse#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putContent">put_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putGroupingConfiguration">put_grouping_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetChannels">reset_channels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetGroupingConfiguration">reset_grouping_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetIsActive">reset_is_active</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetLanguage">reset_language</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetShortcutKey">reset_shortcut_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_content` <a name="put_content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putContent"></a>

```python
def put_content(
  content: str = None
) -> None
```

###### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putContent.parameter.content"></a>

- *Type:* str

The content of the quick response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#content WisdomQuickResponse#content}

---

##### `put_grouping_configuration` <a name="put_grouping_configuration" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putGroupingConfiguration"></a>

```python
def put_grouping_configuration(
  criteria: str = None,
  values: typing.List[str] = None
) -> None
```

###### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putGroupingConfiguration.parameter.criteria"></a>

- *Type:* str

The criteria used for grouping Amazon Q in Connect users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#criteria WisdomQuickResponse#criteria}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putGroupingConfiguration.parameter.values"></a>

- *Type:* typing.List[str]

The list of values that define different groups of Amazon Q in Connect users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#values WisdomQuickResponse#values}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[WisdomQuickResponseTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>]

---

##### `reset_channels` <a name="reset_channels" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetChannels"></a>

```python
def reset_channels() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_grouping_configuration` <a name="reset_grouping_configuration" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetGroupingConfiguration"></a>

```python
def reset_grouping_configuration() -> None
```

##### `reset_is_active` <a name="reset_is_active" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetIsActive"></a>

```python
def reset_is_active() -> None
```

##### `reset_language` <a name="reset_language" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetLanguage"></a>

```python
def reset_language() -> None
```

##### `reset_shortcut_key` <a name="reset_shortcut_key" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetShortcutKey"></a>

```python
def reset_shortcut_key() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WisdomQuickResponse resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isConstruct"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponse.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isTerraformElement"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponse.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isTerraformResource"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponse.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponse.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WisdomQuickResponse resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WisdomQuickResponse to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WisdomQuickResponse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WisdomQuickResponse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference">WisdomQuickResponseContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contents">contents</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference">WisdomQuickResponseContentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.groupingConfiguration">grouping_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference">WisdomQuickResponseGroupingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.quickResponseArn">quick_response_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.quickResponseId">quick_response_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList">WisdomQuickResponseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.channelsInput">channels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contentInput">content_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.groupingConfigurationInput">grouping_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.isActiveInput">is_active_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.knowledgeBaseArnInput">knowledge_base_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.shortcutKeyInput">shortcut_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.channels">channels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.isActive">is_active</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.knowledgeBaseArn">knowledge_base_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.shortcutKey">shortcut_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.content"></a>

```python
content: WisdomQuickResponseContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference">WisdomQuickResponseContentOutputReference</a>

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contents"></a>

```python
contents: WisdomQuickResponseContentsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference">WisdomQuickResponseContentsOutputReference</a>

---

##### `grouping_configuration`<sup>Required</sup> <a name="grouping_configuration" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.groupingConfiguration"></a>

```python
grouping_configuration: WisdomQuickResponseGroupingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference">WisdomQuickResponseGroupingConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `quick_response_arn`<sup>Required</sup> <a name="quick_response_arn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.quickResponseArn"></a>

```python
quick_response_arn: str
```

- *Type:* str

---

##### `quick_response_id`<sup>Required</sup> <a name="quick_response_id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.quickResponseId"></a>

```python
quick_response_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.tags"></a>

```python
tags: WisdomQuickResponseTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList">WisdomQuickResponseTagsList</a>

---

##### `channels_input`<sup>Optional</sup> <a name="channels_input" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.channelsInput"></a>

```python
channels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contentInput"></a>

```python
content_input: IResolvable | WisdomQuickResponseContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a>

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `grouping_configuration_input`<sup>Optional</sup> <a name="grouping_configuration_input" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.groupingConfigurationInput"></a>

```python
grouping_configuration_input: IResolvable | WisdomQuickResponseGroupingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a>

---

##### `is_active_input`<sup>Optional</sup> <a name="is_active_input" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.isActiveInput"></a>

```python
is_active_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `knowledge_base_arn_input`<sup>Optional</sup> <a name="knowledge_base_arn_input" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.knowledgeBaseArnInput"></a>

```python
knowledge_base_arn_input: str
```

- *Type:* str

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `shortcut_key_input`<sup>Optional</sup> <a name="shortcut_key_input" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.shortcutKeyInput"></a>

```python
shortcut_key_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[WisdomQuickResponseTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>]

---

##### `channels`<sup>Required</sup> <a name="channels" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.channels"></a>

```python
channels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.isActive"></a>

```python
is_active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `knowledge_base_arn`<sup>Required</sup> <a name="knowledge_base_arn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.knowledgeBaseArn"></a>

```python
knowledge_base_arn: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `shortcut_key`<sup>Required</sup> <a name="shortcut_key" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.shortcutKey"></a>

```python
shortcut_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomQuickResponseConfig <a name="WisdomQuickResponseConfig" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponseConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content: WisdomQuickResponseContent,
  knowledge_base_arn: str,
  name: str,
  channels: typing.List[str] = None,
  content_type: str = None,
  description: str = None,
  grouping_configuration: WisdomQuickResponseGroupingConfiguration = None,
  is_active: bool | IResolvable = None,
  language: str = None,
  shortcut_key: str = None,
  tags: IResolvable | typing.List[WisdomQuickResponseTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a></code> | The container of quick response content. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.knowledgeBaseArn">knowledge_base_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the knowledge base. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.name">name</a></code> | <code>str</code> | The name of the quick response. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.channels">channels</a></code> | <code>typing.List[str]</code> | The Amazon Connect contact channels this quick response applies to. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.contentType">content_type</a></code> | <code>str</code> | The media type of the quick response content. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.description">description</a></code> | <code>str</code> | The description of the quick response. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.groupingConfiguration">grouping_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a></code> | The configuration information of the user groups that the quick response is accessible to. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.isActive">is_active</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the quick response is active. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.language">language</a></code> | <code>str</code> | The language code value for the language in which the quick response is written. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.shortcutKey">shortcut_key</a></code> | <code>str</code> | The shortcut key of the quick response. The value should be unique across the knowledge base. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.content"></a>

```python
content: WisdomQuickResponseContent
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a>

The container of quick response content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#content WisdomQuickResponse#content}

---

##### `knowledge_base_arn`<sup>Required</sup> <a name="knowledge_base_arn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.knowledgeBaseArn"></a>

```python
knowledge_base_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#knowledge_base_arn WisdomQuickResponse#knowledge_base_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the quick response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#name WisdomQuickResponse#name}

---

##### `channels`<sup>Optional</sup> <a name="channels" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.channels"></a>

```python
channels: typing.List[str]
```

- *Type:* typing.List[str]

The Amazon Connect contact channels this quick response applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#channels WisdomQuickResponse#channels}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

The media type of the quick response content.

* Use application/x.quickresponse;format=plain for quick response written in plain text.
* Use application/x.quickresponse;format=markdown for quick response written in richtext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#content_type WisdomQuickResponse#content_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the quick response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#description WisdomQuickResponse#description}

---

##### `grouping_configuration`<sup>Optional</sup> <a name="grouping_configuration" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.groupingConfiguration"></a>

```python
grouping_configuration: WisdomQuickResponseGroupingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a>

The configuration information of the user groups that the quick response is accessible to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#grouping_configuration WisdomQuickResponse#grouping_configuration}

---

##### `is_active`<sup>Optional</sup> <a name="is_active" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.isActive"></a>

```python
is_active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the quick response is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#is_active WisdomQuickResponse#is_active}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.language"></a>

```python
language: str
```

- *Type:* str

The language code value for the language in which the quick response is written.

The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#language WisdomQuickResponse#language}

---

##### `shortcut_key`<sup>Optional</sup> <a name="shortcut_key" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.shortcutKey"></a>

```python
shortcut_key: str
```

- *Type:* str

The shortcut key of the quick response. The value should be unique across the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#shortcut_key WisdomQuickResponse#shortcut_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[WisdomQuickResponseTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#tags WisdomQuickResponse#tags}

---

### WisdomQuickResponseContent <a name="WisdomQuickResponseContent" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponseContent(
  content: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent.property.content">content</a></code> | <code>str</code> | The content of the quick response. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent.property.content"></a>

```python
content: str
```

- *Type:* str

The content of the quick response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#content WisdomQuickResponse#content}

---

### WisdomQuickResponseContents <a name="WisdomQuickResponseContents" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContents.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponseContents()
```


### WisdomQuickResponseContentsMarkdown <a name="WisdomQuickResponseContentsMarkdown" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdown"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdown.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponseContentsMarkdown()
```


### WisdomQuickResponseContentsPlainText <a name="WisdomQuickResponseContentsPlainText" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainText.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponseContentsPlainText()
```


### WisdomQuickResponseGroupingConfiguration <a name="WisdomQuickResponseGroupingConfiguration" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration(
  criteria: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration.property.criteria">criteria</a></code> | <code>str</code> | The criteria used for grouping Amazon Q in Connect users. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration.property.values">values</a></code> | <code>typing.List[str]</code> | The list of values that define different groups of Amazon Q in Connect users. |

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration.property.criteria"></a>

```python
criteria: str
```

- *Type:* str

The criteria used for grouping Amazon Q in Connect users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#criteria WisdomQuickResponse#criteria}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The list of values that define different groups of Amazon Q in Connect users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#values WisdomQuickResponse#values}

---

### WisdomQuickResponseTags <a name="WisdomQuickResponseTags" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponseTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#key WisdomQuickResponse#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_quick_response#value WisdomQuickResponse#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomQuickResponseContentOutputReference <a name="WisdomQuickResponseContentOutputReference" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponseContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.resetContent">reset_content</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.resetContent"></a>

```python
def reset_content() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomQuickResponseContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a>

---


### WisdomQuickResponseContentsMarkdownOutputReference <a name="WisdomQuickResponseContentsMarkdownOutputReference" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdown">WisdomQuickResponseContentsMarkdown</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.internalValue"></a>

```python
internal_value: WisdomQuickResponseContentsMarkdown
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdown">WisdomQuickResponseContentsMarkdown</a>

---


### WisdomQuickResponseContentsOutputReference <a name="WisdomQuickResponseContentsOutputReference" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponseContentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.markdown">markdown</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference">WisdomQuickResponseContentsMarkdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.plainText">plain_text</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference">WisdomQuickResponseContentsPlainTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContents">WisdomQuickResponseContents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `markdown`<sup>Required</sup> <a name="markdown" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.markdown"></a>

```python
markdown: WisdomQuickResponseContentsMarkdownOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference">WisdomQuickResponseContentsMarkdownOutputReference</a>

---

##### `plain_text`<sup>Required</sup> <a name="plain_text" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.plainText"></a>

```python
plain_text: WisdomQuickResponseContentsPlainTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference">WisdomQuickResponseContentsPlainTextOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.internalValue"></a>

```python
internal_value: WisdomQuickResponseContents
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContents">WisdomQuickResponseContents</a>

---


### WisdomQuickResponseContentsPlainTextOutputReference <a name="WisdomQuickResponseContentsPlainTextOutputReference" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainText">WisdomQuickResponseContentsPlainText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.internalValue"></a>

```python
internal_value: WisdomQuickResponseContentsPlainText
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainText">WisdomQuickResponseContentsPlainText</a>

---


### WisdomQuickResponseGroupingConfigurationOutputReference <a name="WisdomQuickResponseGroupingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resetCriteria">reset_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_criteria` <a name="reset_criteria" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resetCriteria"></a>

```python
def reset_criteria() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.criteriaInput">criteria_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.criteria">criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criteria_input`<sup>Optional</sup> <a name="criteria_input" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.criteriaInput"></a>

```python
criteria_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.criteria"></a>

```python
criteria: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomQuickResponseGroupingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a>

---


### WisdomQuickResponseTagsList <a name="WisdomQuickResponseTagsList" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponseTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WisdomQuickResponseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WisdomQuickResponseTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>]

---


### WisdomQuickResponseTagsOutputReference <a name="WisdomQuickResponseTagsOutputReference" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_quick_response

wisdomQuickResponse.WisdomQuickResponseTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomQuickResponseTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>

---



