# `bedrockIntelligentPromptRouter` Submodule <a name="`bedrockIntelligentPromptRouter` Submodule" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockIntelligentPromptRouter <a name="BedrockIntelligentPromptRouter" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router awscc_bedrock_intelligent_prompt_router}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_intelligent_prompt_router

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  fallback_model: BedrockIntelligentPromptRouterFallbackModel,
  models: IResolvable | typing.List[BedrockIntelligentPromptRouterModels],
  prompt_router_name: str,
  routing_criteria: BedrockIntelligentPromptRouterRoutingCriteria,
  description: str = None,
  tags: IResolvable | typing.List[BedrockIntelligentPromptRouterTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.fallbackModel">fallback_model</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a></code> | Model configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.models">models</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>]</code> | List of model configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.promptRouterName">prompt_router_name</a></code> | <code>str</code> | Name of the Prompt Router. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.routingCriteria">routing_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a></code> | Represents the criteria used for routing requests. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the Prompt Router. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>]</code> | List of Tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `fallback_model`<sup>Required</sup> <a name="fallback_model" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.fallbackModel"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

Model configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#fallback_model BedrockIntelligentPromptRouter#fallback_model}

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.models"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>]

List of model configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#models BedrockIntelligentPromptRouter#models}

---

##### `prompt_router_name`<sup>Required</sup> <a name="prompt_router_name" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.promptRouterName"></a>

- *Type:* str

Name of the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#prompt_router_name BedrockIntelligentPromptRouter#prompt_router_name}

---

##### `routing_criteria`<sup>Required</sup> <a name="routing_criteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.routingCriteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

Represents the criteria used for routing requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#routing_criteria BedrockIntelligentPromptRouter#routing_criteria}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.description"></a>

- *Type:* str

Description of the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#description BedrockIntelligentPromptRouter#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>]

List of Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#tags BedrockIntelligentPromptRouter#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putFallbackModel">put_fallback_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putModels">put_models</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putRoutingCriteria">put_routing_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_fallback_model` <a name="put_fallback_model" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putFallbackModel"></a>

```python
def put_fallback_model(
  model_arn: str
) -> None
```

###### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putFallbackModel.parameter.modelArn"></a>

- *Type:* str

Arn of underlying model which are added in the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#model_arn BedrockIntelligentPromptRouter#model_arn}

---

##### `put_models` <a name="put_models" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putModels"></a>

```python
def put_models(
  value: IResolvable | typing.List[BedrockIntelligentPromptRouterModels]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putModels.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>]

---

##### `put_routing_criteria` <a name="put_routing_criteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putRoutingCriteria"></a>

```python
def put_routing_criteria(
  response_quality_difference: typing.Union[int, float]
) -> None
```

###### `response_quality_difference`<sup>Required</sup> <a name="response_quality_difference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putRoutingCriteria.parameter.responseQualityDifference"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#response_quality_difference BedrockIntelligentPromptRouter#response_quality_difference}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BedrockIntelligentPromptRouterTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockIntelligentPromptRouter resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isConstruct"></a>

```python
from cdktn_provider_awscc import bedrock_intelligent_prompt_router

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bedrock_intelligent_prompt_router

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bedrock_intelligent_prompt_router

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bedrock_intelligent_prompt_router

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockIntelligentPromptRouter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockIntelligentPromptRouter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockIntelligentPromptRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockIntelligentPromptRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModel">fallback_model</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference">BedrockIntelligentPromptRouterFallbackModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.models">models</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList">BedrockIntelligentPromptRouterModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterArn">prompt_router_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteria">routing_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference">BedrockIntelligentPromptRouterRoutingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList">BedrockIntelligentPromptRouterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModelInput">fallback_model_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.modelsInput">models_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterNameInput">prompt_router_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteriaInput">routing_criteria_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterName">prompt_router_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `fallback_model`<sup>Required</sup> <a name="fallback_model" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModel"></a>

```python
fallback_model: BedrockIntelligentPromptRouterFallbackModelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference">BedrockIntelligentPromptRouterFallbackModelOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.models"></a>

```python
models: BedrockIntelligentPromptRouterModelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList">BedrockIntelligentPromptRouterModelsList</a>

---

##### `prompt_router_arn`<sup>Required</sup> <a name="prompt_router_arn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterArn"></a>

```python
prompt_router_arn: str
```

- *Type:* str

---

##### `routing_criteria`<sup>Required</sup> <a name="routing_criteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteria"></a>

```python
routing_criteria: BedrockIntelligentPromptRouterRoutingCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference">BedrockIntelligentPromptRouterRoutingCriteriaOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tags"></a>

```python
tags: BedrockIntelligentPromptRouterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList">BedrockIntelligentPromptRouterTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `fallback_model_input`<sup>Optional</sup> <a name="fallback_model_input" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModelInput"></a>

```python
fallback_model_input: IResolvable | BedrockIntelligentPromptRouterFallbackModel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

---

##### `models_input`<sup>Optional</sup> <a name="models_input" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.modelsInput"></a>

```python
models_input: IResolvable | typing.List[BedrockIntelligentPromptRouterModels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>]

---

##### `prompt_router_name_input`<sup>Optional</sup> <a name="prompt_router_name_input" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterNameInput"></a>

```python
prompt_router_name_input: str
```

- *Type:* str

---

##### `routing_criteria_input`<sup>Optional</sup> <a name="routing_criteria_input" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteriaInput"></a>

```python
routing_criteria_input: IResolvable | BedrockIntelligentPromptRouterRoutingCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BedrockIntelligentPromptRouterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `prompt_router_name`<sup>Required</sup> <a name="prompt_router_name" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterName"></a>

```python
prompt_router_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockIntelligentPromptRouterConfig <a name="BedrockIntelligentPromptRouterConfig" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_intelligent_prompt_router

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  fallback_model: BedrockIntelligentPromptRouterFallbackModel,
  models: IResolvable | typing.List[BedrockIntelligentPromptRouterModels],
  prompt_router_name: str,
  routing_criteria: BedrockIntelligentPromptRouterRoutingCriteria,
  description: str = None,
  tags: IResolvable | typing.List[BedrockIntelligentPromptRouterTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.fallbackModel">fallback_model</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a></code> | Model configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.models">models</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>]</code> | List of model configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.promptRouterName">prompt_router_name</a></code> | <code>str</code> | Name of the Prompt Router. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.routingCriteria">routing_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a></code> | Represents the criteria used for routing requests. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.description">description</a></code> | <code>str</code> | Description of the Prompt Router. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>]</code> | List of Tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `fallback_model`<sup>Required</sup> <a name="fallback_model" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.fallbackModel"></a>

```python
fallback_model: BedrockIntelligentPromptRouterFallbackModel
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

Model configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#fallback_model BedrockIntelligentPromptRouter#fallback_model}

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.models"></a>

```python
models: IResolvable | typing.List[BedrockIntelligentPromptRouterModels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>]

List of model configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#models BedrockIntelligentPromptRouter#models}

---

##### `prompt_router_name`<sup>Required</sup> <a name="prompt_router_name" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.promptRouterName"></a>

```python
prompt_router_name: str
```

- *Type:* str

Name of the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#prompt_router_name BedrockIntelligentPromptRouter#prompt_router_name}

---

##### `routing_criteria`<sup>Required</sup> <a name="routing_criteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.routingCriteria"></a>

```python
routing_criteria: BedrockIntelligentPromptRouterRoutingCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

Represents the criteria used for routing requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#routing_criteria BedrockIntelligentPromptRouter#routing_criteria}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#description BedrockIntelligentPromptRouter#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BedrockIntelligentPromptRouterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>]

List of Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#tags BedrockIntelligentPromptRouter#tags}

---

### BedrockIntelligentPromptRouterFallbackModel <a name="BedrockIntelligentPromptRouterFallbackModel" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_intelligent_prompt_router

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel(
  model_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel.property.modelArn">model_arn</a></code> | <code>str</code> | Arn of underlying model which are added in the Prompt Router. |

---

##### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel.property.modelArn"></a>

```python
model_arn: str
```

- *Type:* str

Arn of underlying model which are added in the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#model_arn BedrockIntelligentPromptRouter#model_arn}

---

### BedrockIntelligentPromptRouterModels <a name="BedrockIntelligentPromptRouterModels" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_intelligent_prompt_router

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels(
  model_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels.property.modelArn">model_arn</a></code> | <code>str</code> | Arn of underlying model which are added in the Prompt Router. |

---

##### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels.property.modelArn"></a>

```python
model_arn: str
```

- *Type:* str

Arn of underlying model which are added in the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#model_arn BedrockIntelligentPromptRouter#model_arn}

---

### BedrockIntelligentPromptRouterRoutingCriteria <a name="BedrockIntelligentPromptRouterRoutingCriteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_intelligent_prompt_router

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria(
  response_quality_difference: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria.property.responseQualityDifference">response_quality_difference</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#response_quality_difference BedrockIntelligentPromptRouter#response_quality_difference}. |

---

##### `response_quality_difference`<sup>Required</sup> <a name="response_quality_difference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria.property.responseQualityDifference"></a>

```python
response_quality_difference: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#response_quality_difference BedrockIntelligentPromptRouter#response_quality_difference}.

---

### BedrockIntelligentPromptRouterTags <a name="BedrockIntelligentPromptRouterTags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_intelligent_prompt_router

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.key">key</a></code> | <code>str</code> | Tag Key. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.value">value</a></code> | <code>str</code> | Tag Value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.key"></a>

```python
key: str
```

- *Type:* str

Tag Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#key BedrockIntelligentPromptRouter#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.value"></a>

```python
value: str
```

- *Type:* str

Tag Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_intelligent_prompt_router#value BedrockIntelligentPromptRouter#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockIntelligentPromptRouterFallbackModelOutputReference <a name="BedrockIntelligentPromptRouterFallbackModelOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_intelligent_prompt_router

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArnInput">model_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArn">model_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_arn_input`<sup>Optional</sup> <a name="model_arn_input" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArnInput"></a>

```python
model_arn_input: str
```

- *Type:* str

---

##### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArn"></a>

```python
model_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockIntelligentPromptRouterFallbackModel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

---


### BedrockIntelligentPromptRouterModelsList <a name="BedrockIntelligentPromptRouterModelsList" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_intelligent_prompt_router

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockIntelligentPromptRouterModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockIntelligentPromptRouterModels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>]

---


### BedrockIntelligentPromptRouterModelsOutputReference <a name="BedrockIntelligentPromptRouterModelsOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_intelligent_prompt_router

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArnInput">model_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArn">model_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_arn_input`<sup>Optional</sup> <a name="model_arn_input" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArnInput"></a>

```python
model_arn_input: str
```

- *Type:* str

---

##### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArn"></a>

```python
model_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockIntelligentPromptRouterModels
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>

---


### BedrockIntelligentPromptRouterRoutingCriteriaOutputReference <a name="BedrockIntelligentPromptRouterRoutingCriteriaOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_intelligent_prompt_router

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifferenceInput">response_quality_difference_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifference">response_quality_difference</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `response_quality_difference_input`<sup>Optional</sup> <a name="response_quality_difference_input" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifferenceInput"></a>

```python
response_quality_difference_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `response_quality_difference`<sup>Required</sup> <a name="response_quality_difference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifference"></a>

```python
response_quality_difference: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockIntelligentPromptRouterRoutingCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

---


### BedrockIntelligentPromptRouterTagsList <a name="BedrockIntelligentPromptRouterTagsList" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_intelligent_prompt_router

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockIntelligentPromptRouterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockIntelligentPromptRouterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>]

---


### BedrockIntelligentPromptRouterTagsOutputReference <a name="BedrockIntelligentPromptRouterTagsOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_intelligent_prompt_router

bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockIntelligentPromptRouterTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>

---



