# `chatbotCustomAction` Submodule <a name="`chatbotCustomAction` Submodule" id="@cdktn/provider-awscc.chatbotCustomAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChatbotCustomAction <a name="ChatbotCustomAction" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action awscc_chatbot_custom_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer"></a>

```python
from cdktn_provider_awscc import chatbot_custom_action

chatbotCustomAction.ChatbotCustomAction(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action_name: str,
  definition: ChatbotCustomActionDefinition,
  alias_name: str = None,
  attachments: IResolvable | typing.List[ChatbotCustomActionAttachments] = None,
  tags: IResolvable | typing.List[ChatbotCustomActionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.actionName">action_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#action_name ChatbotCustomAction#action_name}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition">ChatbotCustomActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#definition ChatbotCustomAction#definition}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.aliasName">alias_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#alias_name ChatbotCustomAction#alias_name}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.attachments">attachments</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#attachments ChatbotCustomAction#attachments}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#tags ChatbotCustomAction#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.actionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#action_name ChatbotCustomAction#action_name}.

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.definition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition">ChatbotCustomActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#definition ChatbotCustomAction#definition}.

---

##### `alias_name`<sup>Optional</sup> <a name="alias_name" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.aliasName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#alias_name ChatbotCustomAction#alias_name}.

---

##### `attachments`<sup>Optional</sup> <a name="attachments" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.attachments"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#attachments ChatbotCustomAction#attachments}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#tags ChatbotCustomAction#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.putAttachments">put_attachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.putDefinition">put_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.resetAliasName">reset_alias_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.resetAttachments">reset_attachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attachments` <a name="put_attachments" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.putAttachments"></a>

```python
def put_attachments(
  value: IResolvable | typing.List[ChatbotCustomActionAttachments]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.putAttachments.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a>]

---

##### `put_definition` <a name="put_definition" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.putDefinition"></a>

```python
def put_definition(
  command_text: str
) -> None
```

###### `command_text`<sup>Required</sup> <a name="command_text" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.putDefinition.parameter.commandText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#command_text ChatbotCustomAction#command_text}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ChatbotCustomActionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a>]

---

##### `reset_alias_name` <a name="reset_alias_name" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.resetAliasName"></a>

```python
def reset_alias_name() -> None
```

##### `reset_attachments` <a name="reset_attachments" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.resetAttachments"></a>

```python
def reset_attachments() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ChatbotCustomAction resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.isConstruct"></a>

```python
from cdktn_provider_awscc import chatbot_custom_action

chatbotCustomAction.ChatbotCustomAction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.isTerraformElement"></a>

```python
from cdktn_provider_awscc import chatbot_custom_action

chatbotCustomAction.ChatbotCustomAction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.isTerraformResource"></a>

```python
from cdktn_provider_awscc import chatbot_custom_action

chatbotCustomAction.ChatbotCustomAction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import chatbot_custom_action

chatbotCustomAction.ChatbotCustomAction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ChatbotCustomAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChatbotCustomAction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChatbotCustomAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChatbotCustomAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.attachments">attachments</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList">ChatbotCustomActionAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.customActionArn">custom_action_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference">ChatbotCustomActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList">ChatbotCustomActionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.actionNameInput">action_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.aliasNameInput">alias_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.attachmentsInput">attachments_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.definitionInput">definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition">ChatbotCustomActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.aliasName">alias_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.attachments"></a>

```python
attachments: ChatbotCustomActionAttachmentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList">ChatbotCustomActionAttachmentsList</a>

---

##### `custom_action_arn`<sup>Required</sup> <a name="custom_action_arn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.customActionArn"></a>

```python
custom_action_arn: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.definition"></a>

```python
definition: ChatbotCustomActionDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference">ChatbotCustomActionDefinitionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.tags"></a>

```python
tags: ChatbotCustomActionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList">ChatbotCustomActionTagsList</a>

---

##### `action_name_input`<sup>Optional</sup> <a name="action_name_input" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.actionNameInput"></a>

```python
action_name_input: str
```

- *Type:* str

---

##### `alias_name_input`<sup>Optional</sup> <a name="alias_name_input" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.aliasNameInput"></a>

```python
alias_name_input: str
```

- *Type:* str

---

##### `attachments_input`<sup>Optional</sup> <a name="attachments_input" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.attachmentsInput"></a>

```python
attachments_input: IResolvable | typing.List[ChatbotCustomActionAttachments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a>]

---

##### `definition_input`<sup>Optional</sup> <a name="definition_input" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.definitionInput"></a>

```python
definition_input: IResolvable | ChatbotCustomActionDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition">ChatbotCustomActionDefinition</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ChatbotCustomActionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a>]

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `alias_name`<sup>Required</sup> <a name="alias_name" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.aliasName"></a>

```python
alias_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChatbotCustomActionAttachments <a name="ChatbotCustomActionAttachments" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments.Initializer"></a>

```python
from cdktn_provider_awscc import chatbot_custom_action

chatbotCustomAction.ChatbotCustomActionAttachments(
  button_text: str = None,
  criteria: IResolvable | typing.List[ChatbotCustomActionAttachmentsCriteria] = None,
  notification_type: str = None,
  variables: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments.property.buttonText">button_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#button_text ChatbotCustomAction#button_text}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments.property.criteria">criteria</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria">ChatbotCustomActionAttachmentsCriteria</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#criteria ChatbotCustomAction#criteria}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments.property.notificationType">notification_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#notification_type ChatbotCustomAction#notification_type}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments.property.variables">variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#variables ChatbotCustomAction#variables}. |

---

##### `button_text`<sup>Optional</sup> <a name="button_text" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments.property.buttonText"></a>

```python
button_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#button_text ChatbotCustomAction#button_text}.

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments.property.criteria"></a>

```python
criteria: IResolvable | typing.List[ChatbotCustomActionAttachmentsCriteria]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria">ChatbotCustomActionAttachmentsCriteria</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#criteria ChatbotCustomAction#criteria}.

---

##### `notification_type`<sup>Optional</sup> <a name="notification_type" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments.property.notificationType"></a>

```python
notification_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#notification_type ChatbotCustomAction#notification_type}.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments.property.variables"></a>

```python
variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#variables ChatbotCustomAction#variables}.

---

### ChatbotCustomActionAttachmentsCriteria <a name="ChatbotCustomActionAttachmentsCriteria" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import chatbot_custom_action

chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria(
  operator: str = None,
  value: str = None,
  variable_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#operator ChatbotCustomAction#operator}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#value ChatbotCustomAction#value}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria.property.variableName">variable_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#variable_name ChatbotCustomAction#variable_name}. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#operator ChatbotCustomAction#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#value ChatbotCustomAction#value}.

---

##### `variable_name`<sup>Optional</sup> <a name="variable_name" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria.property.variableName"></a>

```python
variable_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#variable_name ChatbotCustomAction#variable_name}.

---

### ChatbotCustomActionConfig <a name="ChatbotCustomActionConfig" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import chatbot_custom_action

chatbotCustomAction.ChatbotCustomActionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action_name: str,
  definition: ChatbotCustomActionDefinition,
  alias_name: str = None,
  attachments: IResolvable | typing.List[ChatbotCustomActionAttachments] = None,
  tags: IResolvable | typing.List[ChatbotCustomActionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.actionName">action_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#action_name ChatbotCustomAction#action_name}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition">ChatbotCustomActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#definition ChatbotCustomAction#definition}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.aliasName">alias_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#alias_name ChatbotCustomAction#alias_name}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.attachments">attachments</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#attachments ChatbotCustomAction#attachments}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#tags ChatbotCustomAction#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#action_name ChatbotCustomAction#action_name}.

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.definition"></a>

```python
definition: ChatbotCustomActionDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition">ChatbotCustomActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#definition ChatbotCustomAction#definition}.

---

##### `alias_name`<sup>Optional</sup> <a name="alias_name" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.aliasName"></a>

```python
alias_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#alias_name ChatbotCustomAction#alias_name}.

---

##### `attachments`<sup>Optional</sup> <a name="attachments" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.attachments"></a>

```python
attachments: IResolvable | typing.List[ChatbotCustomActionAttachments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#attachments ChatbotCustomAction#attachments}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ChatbotCustomActionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#tags ChatbotCustomAction#tags}.

---

### ChatbotCustomActionDefinition <a name="ChatbotCustomActionDefinition" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import chatbot_custom_action

chatbotCustomAction.ChatbotCustomActionDefinition(
  command_text: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition.property.commandText">command_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#command_text ChatbotCustomAction#command_text}. |

---

##### `command_text`<sup>Required</sup> <a name="command_text" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition.property.commandText"></a>

```python
command_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#command_text ChatbotCustomAction#command_text}.

---

### ChatbotCustomActionTags <a name="ChatbotCustomActionTags" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags.Initializer"></a>

```python
from cdktn_provider_awscc import chatbot_custom_action

chatbotCustomAction.ChatbotCustomActionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#key ChatbotCustomAction#key}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#value ChatbotCustomAction#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#key ChatbotCustomAction#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#value ChatbotCustomAction#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChatbotCustomActionAttachmentsCriteriaList <a name="ChatbotCustomActionAttachmentsCriteriaList" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.Initializer"></a>

```python
from cdktn_provider_awscc import chatbot_custom_action

chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChatbotCustomActionAttachmentsCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria">ChatbotCustomActionAttachmentsCriteria</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChatbotCustomActionAttachmentsCriteria]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria">ChatbotCustomActionAttachmentsCriteria</a>]

---


### ChatbotCustomActionAttachmentsCriteriaOutputReference <a name="ChatbotCustomActionAttachmentsCriteriaOutputReference" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chatbot_custom_action

chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.resetVariableName">reset_variable_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_variable_name` <a name="reset_variable_name" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.resetVariableName"></a>

```python
def reset_variable_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.variableNameInput">variable_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.variableName">variable_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria">ChatbotCustomActionAttachmentsCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `variable_name_input`<sup>Optional</sup> <a name="variable_name_input" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.variableNameInput"></a>

```python
variable_name_input: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `variable_name`<sup>Required</sup> <a name="variable_name" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.variableName"></a>

```python
variable_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChatbotCustomActionAttachmentsCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria">ChatbotCustomActionAttachmentsCriteria</a>

---


### ChatbotCustomActionAttachmentsList <a name="ChatbotCustomActionAttachmentsList" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.Initializer"></a>

```python
from cdktn_provider_awscc import chatbot_custom_action

chatbotCustomAction.ChatbotCustomActionAttachmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChatbotCustomActionAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChatbotCustomActionAttachments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a>]

---


### ChatbotCustomActionAttachmentsOutputReference <a name="ChatbotCustomActionAttachmentsOutputReference" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chatbot_custom_action

chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.putCriteria">put_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resetButtonText">reset_button_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resetCriteria">reset_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resetNotificationType">reset_notification_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resetVariables">reset_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_criteria` <a name="put_criteria" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.putCriteria"></a>

```python
def put_criteria(
  value: IResolvable | typing.List[ChatbotCustomActionAttachmentsCriteria]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.putCriteria.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria">ChatbotCustomActionAttachmentsCriteria</a>]

---

##### `reset_button_text` <a name="reset_button_text" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resetButtonText"></a>

```python
def reset_button_text() -> None
```

##### `reset_criteria` <a name="reset_criteria" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resetCriteria"></a>

```python
def reset_criteria() -> None
```

##### `reset_notification_type` <a name="reset_notification_type" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resetNotificationType"></a>

```python
def reset_notification_type() -> None
```

##### `reset_variables` <a name="reset_variables" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resetVariables"></a>

```python
def reset_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList">ChatbotCustomActionAttachmentsCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.buttonTextInput">button_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.criteriaInput">criteria_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria">ChatbotCustomActionAttachmentsCriteria</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.notificationTypeInput">notification_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.variablesInput">variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.buttonText">button_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.notificationType">notification_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.variables">variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.criteria"></a>

```python
criteria: ChatbotCustomActionAttachmentsCriteriaList
```

- *Type:* <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList">ChatbotCustomActionAttachmentsCriteriaList</a>

---

##### `button_text_input`<sup>Optional</sup> <a name="button_text_input" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.buttonTextInput"></a>

```python
button_text_input: str
```

- *Type:* str

---

##### `criteria_input`<sup>Optional</sup> <a name="criteria_input" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.criteriaInput"></a>

```python
criteria_input: IResolvable | typing.List[ChatbotCustomActionAttachmentsCriteria]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria">ChatbotCustomActionAttachmentsCriteria</a>]

---

##### `notification_type_input`<sup>Optional</sup> <a name="notification_type_input" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.notificationTypeInput"></a>

```python
notification_type_input: str
```

- *Type:* str

---

##### `variables_input`<sup>Optional</sup> <a name="variables_input" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.variablesInput"></a>

```python
variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `button_text`<sup>Required</sup> <a name="button_text" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.buttonText"></a>

```python
button_text: str
```

- *Type:* str

---

##### `notification_type`<sup>Required</sup> <a name="notification_type" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.notificationType"></a>

```python
notification_type: str
```

- *Type:* str

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.variables"></a>

```python
variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChatbotCustomActionAttachments
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a>

---


### ChatbotCustomActionDefinitionOutputReference <a name="ChatbotCustomActionDefinitionOutputReference" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chatbot_custom_action

chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.commandTextInput">command_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.commandText">command_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition">ChatbotCustomActionDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_text_input`<sup>Optional</sup> <a name="command_text_input" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.commandTextInput"></a>

```python
command_text_input: str
```

- *Type:* str

---

##### `command_text`<sup>Required</sup> <a name="command_text" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.commandText"></a>

```python
command_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChatbotCustomActionDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition">ChatbotCustomActionDefinition</a>

---


### ChatbotCustomActionTagsList <a name="ChatbotCustomActionTagsList" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import chatbot_custom_action

chatbotCustomAction.ChatbotCustomActionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChatbotCustomActionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChatbotCustomActionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a>]

---


### ChatbotCustomActionTagsOutputReference <a name="ChatbotCustomActionTagsOutputReference" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chatbot_custom_action

chatbotCustomAction.ChatbotCustomActionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChatbotCustomActionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a>

---



