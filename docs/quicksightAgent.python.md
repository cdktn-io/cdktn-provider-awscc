# `quicksightAgent` Submodule <a name="`quicksightAgent` Submodule" id="@cdktn/provider-awscc.quicksightAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightAgent <a name="QuicksightAgent" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent awscc_quicksight_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_agent

quicksightAgent.QuicksightAgent(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_id: str,
  aws_account_id: str,
  name: str,
  action_connectors: typing.List[str] = None,
  agent_lifecycle: str = None,
  custom_prompt_input: QuicksightAgentCustomPromptInput = None,
  description: str = None,
  icon_id: str = None,
  spaces: typing.List[str] = None,
  starter_prompts: typing.List[str] = None,
  tags: IResolvable | typing.List[QuicksightAgentTags] = None,
  welcome_message: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.agentId">agent_id</a></code> | <code>str</code> | The unique identifier for the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | The ID of the Amazon Web Services account where the agent is being created. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.name">name</a></code> | <code>str</code> | The display name of the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.actionConnectors">action_connectors</a></code> | <code>typing.List[str]</code> | A list of ActionConnector ARNs (max 10) attached to the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.agentLifecycle">agent_lifecycle</a></code> | <code>str</code> | The lifecycle stage of the agent. PREVIEW or PUBLISHED. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.customPromptInput">custom_prompt_input</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a></code> | Custom prompt configuration. Specify either ExistingPrompt or NewPrompt. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.iconId">icon_id</a></code> | <code>str</code> | The icon identifier for the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.spaces">spaces</a></code> | <code>typing.List[str]</code> | A list of Space ARNs (max 10) attached to the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.starterPrompts">starter_prompts</a></code> | <code>typing.List[str]</code> | A list of up to 3 starter prompts displayed to users. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>]</code> | A list of key-value pairs to associate with the agent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.welcomeMessage">welcome_message</a></code> | <code>str</code> | The welcome message displayed when a user opens the agent. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.agentId"></a>

- *Type:* str

The unique identifier for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#agent_id QuicksightAgent#agent_id}

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.awsAccountId"></a>

- *Type:* str

The ID of the Amazon Web Services account where the agent is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#aws_account_id QuicksightAgent#aws_account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.name"></a>

- *Type:* str

The display name of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#name QuicksightAgent#name}

---

##### `action_connectors`<sup>Optional</sup> <a name="action_connectors" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.actionConnectors"></a>

- *Type:* typing.List[str]

A list of ActionConnector ARNs (max 10) attached to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#action_connectors QuicksightAgent#action_connectors}

---

##### `agent_lifecycle`<sup>Optional</sup> <a name="agent_lifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.agentLifecycle"></a>

- *Type:* str

The lifecycle stage of the agent. PREVIEW or PUBLISHED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#agent_lifecycle QuicksightAgent#agent_lifecycle}

---

##### `custom_prompt_input`<sup>Optional</sup> <a name="custom_prompt_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.customPromptInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a>

Custom prompt configuration. Specify either ExistingPrompt or NewPrompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#custom_prompt_input QuicksightAgent#custom_prompt_input}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.description"></a>

- *Type:* str

A description of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#description QuicksightAgent#description}

---

##### `icon_id`<sup>Optional</sup> <a name="icon_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.iconId"></a>

- *Type:* str

The icon identifier for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#icon_id QuicksightAgent#icon_id}

---

##### `spaces`<sup>Optional</sup> <a name="spaces" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.spaces"></a>

- *Type:* typing.List[str]

A list of Space ARNs (max 10) attached to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#spaces QuicksightAgent#spaces}

---

##### `starter_prompts`<sup>Optional</sup> <a name="starter_prompts" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.starterPrompts"></a>

- *Type:* typing.List[str]

A list of up to 3 starter prompts displayed to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#starter_prompts QuicksightAgent#starter_prompts}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>]

A list of key-value pairs to associate with the agent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#tags QuicksightAgent#tags}

---

##### `welcome_message`<sup>Optional</sup> <a name="welcome_message" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.welcomeMessage"></a>

- *Type:* str

The welcome message displayed when a user opens the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#welcome_message QuicksightAgent#welcome_message}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putCustomPromptInput">put_custom_prompt_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetActionConnectors">reset_action_connectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetAgentLifecycle">reset_agent_lifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetCustomPromptInput">reset_custom_prompt_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetIconId">reset_icon_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetSpaces">reset_spaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetStarterPrompts">reset_starter_prompts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetWelcomeMessage">reset_welcome_message</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_prompt_input` <a name="put_custom_prompt_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putCustomPromptInput"></a>

```python
def put_custom_prompt_input(
  existing_prompt: QuicksightAgentCustomPromptInputExistingPrompt = None,
  new_prompt: QuicksightAgentCustomPromptInputNewPrompt = None
) -> None
```

###### `existing_prompt`<sup>Optional</sup> <a name="existing_prompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putCustomPromptInput.parameter.existingPrompt"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a>

Reference to an existing custom prompt profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#existing_prompt QuicksightAgent#existing_prompt}

---

###### `new_prompt`<sup>Optional</sup> <a name="new_prompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putCustomPromptInput.parameter.newPrompt"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a>

Parameters for creating a new custom prompt configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#new_prompt QuicksightAgent#new_prompt}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[QuicksightAgentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>]

---

##### `reset_action_connectors` <a name="reset_action_connectors" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetActionConnectors"></a>

```python
def reset_action_connectors() -> None
```

##### `reset_agent_lifecycle` <a name="reset_agent_lifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetAgentLifecycle"></a>

```python
def reset_agent_lifecycle() -> None
```

##### `reset_custom_prompt_input` <a name="reset_custom_prompt_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetCustomPromptInput"></a>

```python
def reset_custom_prompt_input() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_icon_id` <a name="reset_icon_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetIconId"></a>

```python
def reset_icon_id() -> None
```

##### `reset_spaces` <a name="reset_spaces" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetSpaces"></a>

```python
def reset_spaces() -> None
```

##### `reset_starter_prompts` <a name="reset_starter_prompts" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetStarterPrompts"></a>

```python
def reset_starter_prompts() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_welcome_message` <a name="reset_welcome_message" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetWelcomeMessage"></a>

```python
def reset_welcome_message() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a QuicksightAgent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isConstruct"></a>

```python
from cdktn_provider_awscc import quicksight_agent

quicksightAgent.QuicksightAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformElement"></a>

```python
from cdktn_provider_awscc import quicksight_agent

quicksightAgent.QuicksightAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformResource"></a>

```python
from cdktn_provider_awscc import quicksight_agent

quicksightAgent.QuicksightAgent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import quicksight_agent

quicksightAgent.QuicksightAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a QuicksightAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QuicksightAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QuicksightAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentStatus">agent_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInput">custom_prompt_input</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference">QuicksightAgentCustomPromptInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInterface">custom_prompt_interface</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference">QuicksightAgentCustomPromptInterfaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList">QuicksightAgentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.actionConnectorsInput">action_connectors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentIdInput">agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentLifecycleInput">agent_lifecycle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInputInput">custom_prompt_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.iconIdInput">icon_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.spacesInput">spaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.starterPromptsInput">starter_prompts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.welcomeMessageInput">welcome_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.actionConnectors">action_connectors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentLifecycle">agent_lifecycle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.iconId">icon_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.spaces">spaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.starterPrompts">starter_prompts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.welcomeMessage">welcome_message</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_status`<sup>Required</sup> <a name="agent_status" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentStatus"></a>

```python
agent_status: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `custom_prompt_input`<sup>Required</sup> <a name="custom_prompt_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInput"></a>

```python
custom_prompt_input: QuicksightAgentCustomPromptInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference">QuicksightAgentCustomPromptInputOutputReference</a>

---

##### `custom_prompt_interface`<sup>Required</sup> <a name="custom_prompt_interface" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInterface"></a>

```python
custom_prompt_interface: QuicksightAgentCustomPromptInterfaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference">QuicksightAgentCustomPromptInterfaceOutputReference</a>

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tags"></a>

```python
tags: QuicksightAgentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList">QuicksightAgentTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `action_connectors_input`<sup>Optional</sup> <a name="action_connectors_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.actionConnectorsInput"></a>

```python
action_connectors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `agent_id_input`<sup>Optional</sup> <a name="agent_id_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentIdInput"></a>

```python
agent_id_input: str
```

- *Type:* str

---

##### `agent_lifecycle_input`<sup>Optional</sup> <a name="agent_lifecycle_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentLifecycleInput"></a>

```python
agent_lifecycle_input: str
```

- *Type:* str

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `custom_prompt_input_input`<sup>Optional</sup> <a name="custom_prompt_input_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInputInput"></a>

```python
custom_prompt_input_input: IResolvable | QuicksightAgentCustomPromptInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `icon_id_input`<sup>Optional</sup> <a name="icon_id_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.iconIdInput"></a>

```python
icon_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `spaces_input`<sup>Optional</sup> <a name="spaces_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.spacesInput"></a>

```python
spaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `starter_prompts_input`<sup>Optional</sup> <a name="starter_prompts_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.starterPromptsInput"></a>

```python
starter_prompts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[QuicksightAgentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>]

---

##### `welcome_message_input`<sup>Optional</sup> <a name="welcome_message_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.welcomeMessageInput"></a>

```python
welcome_message_input: str
```

- *Type:* str

---

##### `action_connectors`<sup>Required</sup> <a name="action_connectors" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.actionConnectors"></a>

```python
action_connectors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `agent_lifecycle`<sup>Required</sup> <a name="agent_lifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentLifecycle"></a>

```python
agent_lifecycle: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `icon_id`<sup>Required</sup> <a name="icon_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.iconId"></a>

```python
icon_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `spaces`<sup>Required</sup> <a name="spaces" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.spaces"></a>

```python
spaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `starter_prompts`<sup>Required</sup> <a name="starter_prompts" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.starterPrompts"></a>

```python
starter_prompts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `welcome_message`<sup>Required</sup> <a name="welcome_message" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.welcomeMessage"></a>

```python
welcome_message: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightAgentConfig <a name="QuicksightAgentConfig" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_agent

quicksightAgent.QuicksightAgentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_id: str,
  aws_account_id: str,
  name: str,
  action_connectors: typing.List[str] = None,
  agent_lifecycle: str = None,
  custom_prompt_input: QuicksightAgentCustomPromptInput = None,
  description: str = None,
  icon_id: str = None,
  spaces: typing.List[str] = None,
  starter_prompts: typing.List[str] = None,
  tags: IResolvable | typing.List[QuicksightAgentTags] = None,
  welcome_message: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.agentId">agent_id</a></code> | <code>str</code> | The unique identifier for the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | The ID of the Amazon Web Services account where the agent is being created. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.name">name</a></code> | <code>str</code> | The display name of the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.actionConnectors">action_connectors</a></code> | <code>typing.List[str]</code> | A list of ActionConnector ARNs (max 10) attached to the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.agentLifecycle">agent_lifecycle</a></code> | <code>str</code> | The lifecycle stage of the agent. PREVIEW or PUBLISHED. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.customPromptInput">custom_prompt_input</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a></code> | Custom prompt configuration. Specify either ExistingPrompt or NewPrompt. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.description">description</a></code> | <code>str</code> | A description of the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.iconId">icon_id</a></code> | <code>str</code> | The icon identifier for the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.spaces">spaces</a></code> | <code>typing.List[str]</code> | A list of Space ARNs (max 10) attached to the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.starterPrompts">starter_prompts</a></code> | <code>typing.List[str]</code> | A list of up to 3 starter prompts displayed to users. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>]</code> | A list of key-value pairs to associate with the agent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.welcomeMessage">welcome_message</a></code> | <code>str</code> | The welcome message displayed when a user opens the agent. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

The unique identifier for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#agent_id QuicksightAgent#agent_id}

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

The ID of the Amazon Web Services account where the agent is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#aws_account_id QuicksightAgent#aws_account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The display name of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#name QuicksightAgent#name}

---

##### `action_connectors`<sup>Optional</sup> <a name="action_connectors" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.actionConnectors"></a>

```python
action_connectors: typing.List[str]
```

- *Type:* typing.List[str]

A list of ActionConnector ARNs (max 10) attached to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#action_connectors QuicksightAgent#action_connectors}

---

##### `agent_lifecycle`<sup>Optional</sup> <a name="agent_lifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.agentLifecycle"></a>

```python
agent_lifecycle: str
```

- *Type:* str

The lifecycle stage of the agent. PREVIEW or PUBLISHED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#agent_lifecycle QuicksightAgent#agent_lifecycle}

---

##### `custom_prompt_input`<sup>Optional</sup> <a name="custom_prompt_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.customPromptInput"></a>

```python
custom_prompt_input: QuicksightAgentCustomPromptInput
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a>

Custom prompt configuration. Specify either ExistingPrompt or NewPrompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#custom_prompt_input QuicksightAgent#custom_prompt_input}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#description QuicksightAgent#description}

---

##### `icon_id`<sup>Optional</sup> <a name="icon_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.iconId"></a>

```python
icon_id: str
```

- *Type:* str

The icon identifier for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#icon_id QuicksightAgent#icon_id}

---

##### `spaces`<sup>Optional</sup> <a name="spaces" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.spaces"></a>

```python
spaces: typing.List[str]
```

- *Type:* typing.List[str]

A list of Space ARNs (max 10) attached to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#spaces QuicksightAgent#spaces}

---

##### `starter_prompts`<sup>Optional</sup> <a name="starter_prompts" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.starterPrompts"></a>

```python
starter_prompts: typing.List[str]
```

- *Type:* typing.List[str]

A list of up to 3 starter prompts displayed to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#starter_prompts QuicksightAgent#starter_prompts}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[QuicksightAgentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>]

A list of key-value pairs to associate with the agent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#tags QuicksightAgent#tags}

---

##### `welcome_message`<sup>Optional</sup> <a name="welcome_message" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.welcomeMessage"></a>

```python
welcome_message: str
```

- *Type:* str

The welcome message displayed when a user opens the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#welcome_message QuicksightAgent#welcome_message}

---

### QuicksightAgentCustomPromptInput <a name="QuicksightAgentCustomPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_agent

quicksightAgent.QuicksightAgentCustomPromptInput(
  existing_prompt: QuicksightAgentCustomPromptInputExistingPrompt = None,
  new_prompt: QuicksightAgentCustomPromptInputNewPrompt = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.property.existingPrompt">existing_prompt</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a></code> | Reference to an existing custom prompt profile. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.property.newPrompt">new_prompt</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a></code> | Parameters for creating a new custom prompt configuration. |

---

##### `existing_prompt`<sup>Optional</sup> <a name="existing_prompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.property.existingPrompt"></a>

```python
existing_prompt: QuicksightAgentCustomPromptInputExistingPrompt
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a>

Reference to an existing custom prompt profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#existing_prompt QuicksightAgent#existing_prompt}

---

##### `new_prompt`<sup>Optional</sup> <a name="new_prompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.property.newPrompt"></a>

```python
new_prompt: QuicksightAgentCustomPromptInputNewPrompt
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a>

Parameters for creating a new custom prompt configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#new_prompt QuicksightAgent#new_prompt}

---

### QuicksightAgentCustomPromptInputExistingPrompt <a name="QuicksightAgentCustomPromptInputExistingPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_agent

quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt(
  model_profile_id: str = None,
  qbs_aws_account_id: str = None,
  subscription_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.modelProfileId">model_profile_id</a></code> | <code>str</code> | The identifier of the model profile. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.qbsAwsAccountId">qbs_aws_account_id</a></code> | <code>str</code> | The QBS AWS account identifier. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.subscriptionId">subscription_id</a></code> | <code>str</code> | The subscription identifier. |

---

##### `model_profile_id`<sup>Optional</sup> <a name="model_profile_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.modelProfileId"></a>

```python
model_profile_id: str
```

- *Type:* str

The identifier of the model profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#model_profile_id QuicksightAgent#model_profile_id}

---

##### `qbs_aws_account_id`<sup>Optional</sup> <a name="qbs_aws_account_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.qbsAwsAccountId"></a>

```python
qbs_aws_account_id: str
```

- *Type:* str

The QBS AWS account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#qbs_aws_account_id QuicksightAgent#qbs_aws_account_id}

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

The subscription identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#subscription_id QuicksightAgent#subscription_id}

---

### QuicksightAgentCustomPromptInputNewPrompt <a name="QuicksightAgentCustomPromptInputNewPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_agent

quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt(
  custom_instructions: str = None,
  identity: str = None,
  output_style: str = None,
  response_length: str = None,
  tone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.customInstructions">custom_instructions</a></code> | <code>str</code> | Custom instructions for the agent behavior. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.identity">identity</a></code> | <code>str</code> | The identity or persona of the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.outputStyle">output_style</a></code> | <code>str</code> | The output style for the agent responses. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.responseLength">response_length</a></code> | <code>str</code> | The desired response length for the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.tone">tone</a></code> | <code>str</code> | The tone used in agent responses. |

---

##### `custom_instructions`<sup>Optional</sup> <a name="custom_instructions" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.customInstructions"></a>

```python
custom_instructions: str
```

- *Type:* str

Custom instructions for the agent behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#custom_instructions QuicksightAgent#custom_instructions}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.identity"></a>

```python
identity: str
```

- *Type:* str

The identity or persona of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#identity QuicksightAgent#identity}

---

##### `output_style`<sup>Optional</sup> <a name="output_style" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.outputStyle"></a>

```python
output_style: str
```

- *Type:* str

The output style for the agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#output_style QuicksightAgent#output_style}

---

##### `response_length`<sup>Optional</sup> <a name="response_length" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.responseLength"></a>

```python
response_length: str
```

- *Type:* str

The desired response length for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#response_length QuicksightAgent#response_length}

---

##### `tone`<sup>Optional</sup> <a name="tone" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.tone"></a>

```python
tone: str
```

- *Type:* str

The tone used in agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#tone QuicksightAgent#tone}

---

### QuicksightAgentCustomPromptInterface <a name="QuicksightAgentCustomPromptInterface" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterface.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_agent

quicksightAgent.QuicksightAgentCustomPromptInterface()
```


### QuicksightAgentTags <a name="QuicksightAgentTags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_agent

quicksightAgent.QuicksightAgentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#key QuicksightAgent#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#value QuicksightAgent#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightAgentCustomPromptInputExistingPromptOutputReference <a name="QuicksightAgentCustomPromptInputExistingPromptOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_agent

quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetModelProfileId">reset_model_profile_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetQbsAwsAccountId">reset_qbs_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model_profile_id` <a name="reset_model_profile_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetModelProfileId"></a>

```python
def reset_model_profile_id() -> None
```

##### `reset_qbs_aws_account_id` <a name="reset_qbs_aws_account_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetQbsAwsAccountId"></a>

```python
def reset_qbs_aws_account_id() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileIdInput">model_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountIdInput">qbs_aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileId">model_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountId">qbs_aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_profile_id_input`<sup>Optional</sup> <a name="model_profile_id_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileIdInput"></a>

```python
model_profile_id_input: str
```

- *Type:* str

---

##### `qbs_aws_account_id_input`<sup>Optional</sup> <a name="qbs_aws_account_id_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountIdInput"></a>

```python
qbs_aws_account_id_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `model_profile_id`<sup>Required</sup> <a name="model_profile_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileId"></a>

```python
model_profile_id: str
```

- *Type:* str

---

##### `qbs_aws_account_id`<sup>Required</sup> <a name="qbs_aws_account_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountId"></a>

```python
qbs_aws_account_id: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightAgentCustomPromptInputExistingPrompt
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a>

---


### QuicksightAgentCustomPromptInputNewPromptOutputReference <a name="QuicksightAgentCustomPromptInputNewPromptOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_agent

quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetCustomInstructions">reset_custom_instructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetOutputStyle">reset_output_style</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetResponseLength">reset_response_length</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetTone">reset_tone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_instructions` <a name="reset_custom_instructions" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetCustomInstructions"></a>

```python
def reset_custom_instructions() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_output_style` <a name="reset_output_style" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetOutputStyle"></a>

```python
def reset_output_style() -> None
```

##### `reset_response_length` <a name="reset_response_length" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetResponseLength"></a>

```python
def reset_response_length() -> None
```

##### `reset_tone` <a name="reset_tone" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetTone"></a>

```python
def reset_tone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructionsInput">custom_instructions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.identityInput">identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyleInput">output_style_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLengthInput">response_length_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.toneInput">tone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructions">custom_instructions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyle">output_style</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLength">response_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.tone">tone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_instructions_input`<sup>Optional</sup> <a name="custom_instructions_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructionsInput"></a>

```python
custom_instructions_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.identityInput"></a>

```python
identity_input: str
```

- *Type:* str

---

##### `output_style_input`<sup>Optional</sup> <a name="output_style_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyleInput"></a>

```python
output_style_input: str
```

- *Type:* str

---

##### `response_length_input`<sup>Optional</sup> <a name="response_length_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLengthInput"></a>

```python
response_length_input: str
```

- *Type:* str

---

##### `tone_input`<sup>Optional</sup> <a name="tone_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.toneInput"></a>

```python
tone_input: str
```

- *Type:* str

---

##### `custom_instructions`<sup>Required</sup> <a name="custom_instructions" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructions"></a>

```python
custom_instructions: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `output_style`<sup>Required</sup> <a name="output_style" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyle"></a>

```python
output_style: str
```

- *Type:* str

---

##### `response_length`<sup>Required</sup> <a name="response_length" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLength"></a>

```python
response_length: str
```

- *Type:* str

---

##### `tone`<sup>Required</sup> <a name="tone" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.tone"></a>

```python
tone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightAgentCustomPromptInputNewPrompt
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a>

---


### QuicksightAgentCustomPromptInputOutputReference <a name="QuicksightAgentCustomPromptInputOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_agent

quicksightAgent.QuicksightAgentCustomPromptInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putExistingPrompt">put_existing_prompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putNewPrompt">put_new_prompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resetExistingPrompt">reset_existing_prompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resetNewPrompt">reset_new_prompt</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_existing_prompt` <a name="put_existing_prompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putExistingPrompt"></a>

```python
def put_existing_prompt(
  model_profile_id: str = None,
  qbs_aws_account_id: str = None,
  subscription_id: str = None
) -> None
```

###### `model_profile_id`<sup>Optional</sup> <a name="model_profile_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putExistingPrompt.parameter.modelProfileId"></a>

- *Type:* str

The identifier of the model profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#model_profile_id QuicksightAgent#model_profile_id}

---

###### `qbs_aws_account_id`<sup>Optional</sup> <a name="qbs_aws_account_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putExistingPrompt.parameter.qbsAwsAccountId"></a>

- *Type:* str

The QBS AWS account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#qbs_aws_account_id QuicksightAgent#qbs_aws_account_id}

---

###### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putExistingPrompt.parameter.subscriptionId"></a>

- *Type:* str

The subscription identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#subscription_id QuicksightAgent#subscription_id}

---

##### `put_new_prompt` <a name="put_new_prompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putNewPrompt"></a>

```python
def put_new_prompt(
  custom_instructions: str = None,
  identity: str = None,
  output_style: str = None,
  response_length: str = None,
  tone: str = None
) -> None
```

###### `custom_instructions`<sup>Optional</sup> <a name="custom_instructions" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putNewPrompt.parameter.customInstructions"></a>

- *Type:* str

Custom instructions for the agent behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#custom_instructions QuicksightAgent#custom_instructions}

---

###### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putNewPrompt.parameter.identity"></a>

- *Type:* str

The identity or persona of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#identity QuicksightAgent#identity}

---

###### `output_style`<sup>Optional</sup> <a name="output_style" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putNewPrompt.parameter.outputStyle"></a>

- *Type:* str

The output style for the agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#output_style QuicksightAgent#output_style}

---

###### `response_length`<sup>Optional</sup> <a name="response_length" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putNewPrompt.parameter.responseLength"></a>

- *Type:* str

The desired response length for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#response_length QuicksightAgent#response_length}

---

###### `tone`<sup>Optional</sup> <a name="tone" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putNewPrompt.parameter.tone"></a>

- *Type:* str

The tone used in agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_agent#tone QuicksightAgent#tone}

---

##### `reset_existing_prompt` <a name="reset_existing_prompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resetExistingPrompt"></a>

```python
def reset_existing_prompt() -> None
```

##### `reset_new_prompt` <a name="reset_new_prompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resetNewPrompt"></a>

```python
def reset_new_prompt() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.existingPrompt">existing_prompt</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference">QuicksightAgentCustomPromptInputExistingPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.newPrompt">new_prompt</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference">QuicksightAgentCustomPromptInputNewPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.existingPromptInput">existing_prompt_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.newPromptInput">new_prompt_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `existing_prompt`<sup>Required</sup> <a name="existing_prompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.existingPrompt"></a>

```python
existing_prompt: QuicksightAgentCustomPromptInputExistingPromptOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference">QuicksightAgentCustomPromptInputExistingPromptOutputReference</a>

---

##### `new_prompt`<sup>Required</sup> <a name="new_prompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.newPrompt"></a>

```python
new_prompt: QuicksightAgentCustomPromptInputNewPromptOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference">QuicksightAgentCustomPromptInputNewPromptOutputReference</a>

---

##### `existing_prompt_input`<sup>Optional</sup> <a name="existing_prompt_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.existingPromptInput"></a>

```python
existing_prompt_input: IResolvable | QuicksightAgentCustomPromptInputExistingPrompt
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a>

---

##### `new_prompt_input`<sup>Optional</sup> <a name="new_prompt_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.newPromptInput"></a>

```python
new_prompt_input: IResolvable | QuicksightAgentCustomPromptInputNewPrompt
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightAgentCustomPromptInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a>

---


### QuicksightAgentCustomPromptInterfaceOutputReference <a name="QuicksightAgentCustomPromptInterfaceOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_agent

quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.customInstructions">custom_instructions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.modelProfileId">model_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.outputStyle">output_style</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.promptSummary">prompt_summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.qbsAwsAccountId">qbs_aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.responseLength">response_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.tone">tone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterface">QuicksightAgentCustomPromptInterface</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_instructions`<sup>Required</sup> <a name="custom_instructions" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.customInstructions"></a>

```python
custom_instructions: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `model_profile_id`<sup>Required</sup> <a name="model_profile_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.modelProfileId"></a>

```python
model_profile_id: str
```

- *Type:* str

---

##### `output_style`<sup>Required</sup> <a name="output_style" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.outputStyle"></a>

```python
output_style: str
```

- *Type:* str

---

##### `prompt_summary`<sup>Required</sup> <a name="prompt_summary" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.promptSummary"></a>

```python
prompt_summary: str
```

- *Type:* str

---

##### `qbs_aws_account_id`<sup>Required</sup> <a name="qbs_aws_account_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.qbsAwsAccountId"></a>

```python
qbs_aws_account_id: str
```

- *Type:* str

---

##### `response_length`<sup>Required</sup> <a name="response_length" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.responseLength"></a>

```python
response_length: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `tone`<sup>Required</sup> <a name="tone" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.tone"></a>

```python
tone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightAgentCustomPromptInterface
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterface">QuicksightAgentCustomPromptInterface</a>

---


### QuicksightAgentTagsList <a name="QuicksightAgentTagsList" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_agent

quicksightAgent.QuicksightAgentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightAgentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightAgentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>]

---


### QuicksightAgentTagsOutputReference <a name="QuicksightAgentTagsOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_agent

quicksightAgent.QuicksightAgentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightAgentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>

---



