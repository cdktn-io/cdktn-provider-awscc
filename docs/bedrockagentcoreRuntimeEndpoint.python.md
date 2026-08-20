# `bedrockagentcoreRuntimeEndpoint` Submodule <a name="`bedrockagentcoreRuntimeEndpoint` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreRuntimeEndpoint <a name="BedrockagentcoreRuntimeEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_runtime_endpoint awscc_bedrockagentcore_runtime_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_runtime_endpoint

bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_runtime_id: str,
  name: str,
  agent_runtime_version: str = None,
  description: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.agentRuntimeId">agent_runtime_id</a></code> | <code>str</code> | The ID of the parent Agent Runtime (required for creation). |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Agent Runtime Endpoint. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.agentRuntimeVersion">agent_runtime_version</a></code> | <code>str</code> | The version of the AgentCore Runtime to use for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the AgentCore Runtime endpoint. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A map of tag keys and values. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_runtime_id`<sup>Required</sup> <a name="agent_runtime_id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.agentRuntimeId"></a>

- *Type:* str

The ID of the parent Agent Runtime (required for creation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_runtime_endpoint#agent_runtime_id BedrockagentcoreRuntimeEndpoint#agent_runtime_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.name"></a>

- *Type:* str

The name of the Agent Runtime Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_runtime_endpoint#name BedrockagentcoreRuntimeEndpoint#name}

---

##### `agent_runtime_version`<sup>Optional</sup> <a name="agent_runtime_version" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.agentRuntimeVersion"></a>

- *Type:* str

The version of the AgentCore Runtime to use for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_runtime_endpoint#agent_runtime_version BedrockagentcoreRuntimeEndpoint#agent_runtime_version}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.description"></a>

- *Type:* str

The description of the AgentCore Runtime endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_runtime_endpoint#description BedrockagentcoreRuntimeEndpoint#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_runtime_endpoint#tags BedrockagentcoreRuntimeEndpoint#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetAgentRuntimeVersion">reset_agent_runtime_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_agent_runtime_version` <a name="reset_agent_runtime_version" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetAgentRuntimeVersion"></a>

```python
def reset_agent_runtime_version() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockagentcoreRuntimeEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_runtime_endpoint

bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_runtime_endpoint

bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_runtime_endpoint

bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_runtime_endpoint

bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockagentcoreRuntimeEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentcoreRuntimeEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentcoreRuntimeEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_runtime_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreRuntimeEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeArn">agent_runtime_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeEndpointArn">agent_runtime_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.liveVersion">live_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.runtimeEndpointId">runtime_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.targetVersion">target_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeIdInput">agent_runtime_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeVersionInput">agent_runtime_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeId">agent_runtime_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeVersion">agent_runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_runtime_arn`<sup>Required</sup> <a name="agent_runtime_arn" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeArn"></a>

```python
agent_runtime_arn: str
```

- *Type:* str

---

##### `agent_runtime_endpoint_arn`<sup>Required</sup> <a name="agent_runtime_endpoint_arn" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeEndpointArn"></a>

```python
agent_runtime_endpoint_arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `live_version`<sup>Required</sup> <a name="live_version" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.liveVersion"></a>

```python
live_version: str
```

- *Type:* str

---

##### `runtime_endpoint_id`<sup>Required</sup> <a name="runtime_endpoint_id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.runtimeEndpointId"></a>

```python
runtime_endpoint_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `target_version`<sup>Required</sup> <a name="target_version" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.targetVersion"></a>

```python
target_version: str
```

- *Type:* str

---

##### `agent_runtime_id_input`<sup>Optional</sup> <a name="agent_runtime_id_input" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeIdInput"></a>

```python
agent_runtime_id_input: str
```

- *Type:* str

---

##### `agent_runtime_version_input`<sup>Optional</sup> <a name="agent_runtime_version_input" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeVersionInput"></a>

```python
agent_runtime_version_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `agent_runtime_id`<sup>Required</sup> <a name="agent_runtime_id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeId"></a>

```python
agent_runtime_id: str
```

- *Type:* str

---

##### `agent_runtime_version`<sup>Required</sup> <a name="agent_runtime_version" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeVersion"></a>

```python
agent_runtime_version: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreRuntimeEndpointConfig <a name="BedrockagentcoreRuntimeEndpointConfig" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_runtime_endpoint

bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_runtime_id: str,
  name: str,
  agent_runtime_version: str = None,
  description: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.agentRuntimeId">agent_runtime_id</a></code> | <code>str</code> | The ID of the parent Agent Runtime (required for creation). |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.name">name</a></code> | <code>str</code> | The name of the Agent Runtime Endpoint. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.agentRuntimeVersion">agent_runtime_version</a></code> | <code>str</code> | The version of the AgentCore Runtime to use for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.description">description</a></code> | <code>str</code> | The description of the AgentCore Runtime endpoint. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A map of tag keys and values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_runtime_id`<sup>Required</sup> <a name="agent_runtime_id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.agentRuntimeId"></a>

```python
agent_runtime_id: str
```

- *Type:* str

The ID of the parent Agent Runtime (required for creation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_runtime_endpoint#agent_runtime_id BedrockagentcoreRuntimeEndpoint#agent_runtime_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Agent Runtime Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_runtime_endpoint#name BedrockagentcoreRuntimeEndpoint#name}

---

##### `agent_runtime_version`<sup>Optional</sup> <a name="agent_runtime_version" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.agentRuntimeVersion"></a>

```python
agent_runtime_version: str
```

- *Type:* str

The version of the AgentCore Runtime to use for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_runtime_endpoint#agent_runtime_version BedrockagentcoreRuntimeEndpoint#agent_runtime_version}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the AgentCore Runtime endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_runtime_endpoint#description BedrockagentcoreRuntimeEndpoint#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_runtime_endpoint#tags BedrockagentcoreRuntimeEndpoint#tags}

---



