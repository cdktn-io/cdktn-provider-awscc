# `wisdomAiPrompt` Submodule <a name="`wisdomAiPrompt` Submodule" id="@cdktn/provider-awscc.wisdomAiPrompt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomAiPrompt <a name="WisdomAiPrompt" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt awscc_wisdom_ai_prompt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_prompt

wisdomAiPrompt.WisdomAiPrompt(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_format: str,
  model_id: str,
  template_configuration: WisdomAiPromptTemplateConfiguration,
  template_type: str,
  type: str,
  assistant_id: str = None,
  description: str = None,
  name: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.apiFormat">api_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#api_format WisdomAiPrompt#api_format}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#model_id WisdomAiPrompt#model_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.templateConfiguration">template_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#template_configuration WisdomAiPrompt#template_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.templateType">template_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#template_type WisdomAiPrompt#template_type}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#type WisdomAiPrompt#type}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.assistantId">assistant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#assistant_id WisdomAiPrompt#assistant_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#description WisdomAiPrompt#description}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#name WisdomAiPrompt#name}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#tags WisdomAiPrompt#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_format`<sup>Required</sup> <a name="api_format" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.apiFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#api_format WisdomAiPrompt#api_format}.

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.modelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#model_id WisdomAiPrompt#model_id}.

---

##### `template_configuration`<sup>Required</sup> <a name="template_configuration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.templateConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#template_configuration WisdomAiPrompt#template_configuration}.

---

##### `template_type`<sup>Required</sup> <a name="template_type" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.templateType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#template_type WisdomAiPrompt#template_type}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#type WisdomAiPrompt#type}.

---

##### `assistant_id`<sup>Optional</sup> <a name="assistant_id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.assistantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#assistant_id WisdomAiPrompt#assistant_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#description WisdomAiPrompt#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#name WisdomAiPrompt#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#tags WisdomAiPrompt#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.putTemplateConfiguration">put_template_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetAssistantId">reset_assistant_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_template_configuration` <a name="put_template_configuration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.putTemplateConfiguration"></a>

```python
def put_template_configuration(
  text_full_ai_prompt_edit_template_configuration: WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration = None
) -> None
```

###### `text_full_ai_prompt_edit_template_configuration`<sup>Optional</sup> <a name="text_full_ai_prompt_edit_template_configuration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.putTemplateConfiguration.parameter.textFullAiPromptEditTemplateConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#text_full_ai_prompt_edit_template_configuration WisdomAiPrompt#text_full_ai_prompt_edit_template_configuration}.

---

##### `reset_assistant_id` <a name="reset_assistant_id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetAssistantId"></a>

```python
def reset_assistant_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WisdomAiPrompt resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isConstruct"></a>

```python
from cdktn_provider_awscc import wisdom_ai_prompt

wisdomAiPrompt.WisdomAiPrompt.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isTerraformElement"></a>

```python
from cdktn_provider_awscc import wisdom_ai_prompt

wisdomAiPrompt.WisdomAiPrompt.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isTerraformResource"></a>

```python
from cdktn_provider_awscc import wisdom_ai_prompt

wisdomAiPrompt.WisdomAiPrompt.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import wisdom_ai_prompt

wisdomAiPrompt.WisdomAiPrompt.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WisdomAiPrompt resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WisdomAiPrompt to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WisdomAiPrompt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WisdomAiPrompt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.aiPromptArn">ai_prompt_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.aiPromptId">ai_prompt_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.assistantArn">assistant_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.modifiedTimeSeconds">modified_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateConfiguration">template_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference">WisdomAiPromptTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.apiFormatInput">api_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.assistantIdInput">assistant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.modelIdInput">model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateConfigurationInput">template_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateTypeInput">template_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.apiFormat">api_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.assistantId">assistant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateType">template_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ai_prompt_arn`<sup>Required</sup> <a name="ai_prompt_arn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.aiPromptArn"></a>

```python
ai_prompt_arn: str
```

- *Type:* str

---

##### `ai_prompt_id`<sup>Required</sup> <a name="ai_prompt_id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.aiPromptId"></a>

```python
ai_prompt_id: str
```

- *Type:* str

---

##### `assistant_arn`<sup>Required</sup> <a name="assistant_arn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.assistantArn"></a>

```python
assistant_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_time_seconds`<sup>Required</sup> <a name="modified_time_seconds" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.modifiedTimeSeconds"></a>

```python
modified_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `template_configuration`<sup>Required</sup> <a name="template_configuration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateConfiguration"></a>

```python
template_configuration: WisdomAiPromptTemplateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference">WisdomAiPromptTemplateConfigurationOutputReference</a>

---

##### `api_format_input`<sup>Optional</sup> <a name="api_format_input" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.apiFormatInput"></a>

```python
api_format_input: str
```

- *Type:* str

---

##### `assistant_id_input`<sup>Optional</sup> <a name="assistant_id_input" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.assistantIdInput"></a>

```python
assistant_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `model_id_input`<sup>Optional</sup> <a name="model_id_input" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.modelIdInput"></a>

```python
model_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_configuration_input`<sup>Optional</sup> <a name="template_configuration_input" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateConfigurationInput"></a>

```python
template_configuration_input: IResolvable | WisdomAiPromptTemplateConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a>

---

##### `template_type_input`<sup>Optional</sup> <a name="template_type_input" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateTypeInput"></a>

```python
template_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `api_format`<sup>Required</sup> <a name="api_format" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.apiFormat"></a>

```python
api_format: str
```

- *Type:* str

---

##### `assistant_id`<sup>Required</sup> <a name="assistant_id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.assistantId"></a>

```python
assistant_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_type`<sup>Required</sup> <a name="template_type" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateType"></a>

```python
template_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomAiPromptConfig <a name="WisdomAiPromptConfig" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_prompt

wisdomAiPrompt.WisdomAiPromptConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_format: str,
  model_id: str,
  template_configuration: WisdomAiPromptTemplateConfiguration,
  template_type: str,
  type: str,
  assistant_id: str = None,
  description: str = None,
  name: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.apiFormat">api_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#api_format WisdomAiPrompt#api_format}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#model_id WisdomAiPrompt#model_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.templateConfiguration">template_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#template_configuration WisdomAiPrompt#template_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.templateType">template_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#template_type WisdomAiPrompt#template_type}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#type WisdomAiPrompt#type}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.assistantId">assistant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#assistant_id WisdomAiPrompt#assistant_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#description WisdomAiPrompt#description}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#name WisdomAiPrompt#name}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#tags WisdomAiPrompt#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_format`<sup>Required</sup> <a name="api_format" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.apiFormat"></a>

```python
api_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#api_format WisdomAiPrompt#api_format}.

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#model_id WisdomAiPrompt#model_id}.

---

##### `template_configuration`<sup>Required</sup> <a name="template_configuration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.templateConfiguration"></a>

```python
template_configuration: WisdomAiPromptTemplateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#template_configuration WisdomAiPrompt#template_configuration}.

---

##### `template_type`<sup>Required</sup> <a name="template_type" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.templateType"></a>

```python
template_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#template_type WisdomAiPrompt#template_type}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#type WisdomAiPrompt#type}.

---

##### `assistant_id`<sup>Optional</sup> <a name="assistant_id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.assistantId"></a>

```python
assistant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#assistant_id WisdomAiPrompt#assistant_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#description WisdomAiPrompt#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#name WisdomAiPrompt#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#tags WisdomAiPrompt#tags}.

---

### WisdomAiPromptTemplateConfiguration <a name="WisdomAiPromptTemplateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_prompt

wisdomAiPrompt.WisdomAiPromptTemplateConfiguration(
  text_full_ai_prompt_edit_template_configuration: WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration.property.textFullAiPromptEditTemplateConfiguration">text_full_ai_prompt_edit_template_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#text_full_ai_prompt_edit_template_configuration WisdomAiPrompt#text_full_ai_prompt_edit_template_configuration}. |

---

##### `text_full_ai_prompt_edit_template_configuration`<sup>Optional</sup> <a name="text_full_ai_prompt_edit_template_configuration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration.property.textFullAiPromptEditTemplateConfiguration"></a>

```python
text_full_ai_prompt_edit_template_configuration: WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#text_full_ai_prompt_edit_template_configuration WisdomAiPrompt#text_full_ai_prompt_edit_template_configuration}.

---

### WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration <a name="WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_prompt

wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration(
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration.property.text">text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#text WisdomAiPrompt#text}. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration.property.text"></a>

```python
text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#text WisdomAiPrompt#text}.

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomAiPromptTemplateConfigurationOutputReference <a name="WisdomAiPromptTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_prompt

wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.putTextFullAiPromptEditTemplateConfiguration">put_text_full_ai_prompt_edit_template_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.resetTextFullAiPromptEditTemplateConfiguration">reset_text_full_ai_prompt_edit_template_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_text_full_ai_prompt_edit_template_configuration` <a name="put_text_full_ai_prompt_edit_template_configuration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.putTextFullAiPromptEditTemplateConfiguration"></a>

```python
def put_text_full_ai_prompt_edit_template_configuration(
  text: str = None
) -> None
```

###### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.putTextFullAiPromptEditTemplateConfiguration.parameter.text"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#text WisdomAiPrompt#text}.

---

##### `reset_text_full_ai_prompt_edit_template_configuration` <a name="reset_text_full_ai_prompt_edit_template_configuration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.resetTextFullAiPromptEditTemplateConfiguration"></a>

```python
def reset_text_full_ai_prompt_edit_template_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.textFullAiPromptEditTemplateConfiguration">text_full_ai_prompt_edit_template_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.textFullAiPromptEditTemplateConfigurationInput">text_full_ai_prompt_edit_template_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text_full_ai_prompt_edit_template_configuration`<sup>Required</sup> <a name="text_full_ai_prompt_edit_template_configuration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.textFullAiPromptEditTemplateConfiguration"></a>

```python
text_full_ai_prompt_edit_template_configuration: WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference</a>

---

##### `text_full_ai_prompt_edit_template_configuration_input`<sup>Optional</sup> <a name="text_full_ai_prompt_edit_template_configuration_input" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.textFullAiPromptEditTemplateConfigurationInput"></a>

```python
text_full_ai_prompt_edit_template_configuration_input: IResolvable | WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomAiPromptTemplateConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a>

---


### WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference <a name="WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_ai_prompt

wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_text` <a name="reset_text" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a>

---



