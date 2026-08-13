# `bedrockAgentAlias` Submodule <a name="`bedrockAgentAlias` Submodule" id="@cdktn/provider-awscc.bedrockAgentAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockAgentAlias <a name="BedrockAgentAlias" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent_alias awscc_bedrock_agent_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent_alias

bedrockAgentAlias.BedrockAgentAlias(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_alias_name: str,
  agent_id: str,
  description: str = None,
  routing_configuration: IResolvable | typing.List[BedrockAgentAliasRoutingConfiguration] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.agentAliasName">agent_alias_name</a></code> | <code>str</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.agentId">agent_id</a></code> | <code>str</code> | Identifier for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the Resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.routingConfiguration">routing_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>]</code> | Routing configuration for an Agent alias. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A map of tag keys and values. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_alias_name`<sup>Required</sup> <a name="agent_alias_name" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.agentAliasName"></a>

- *Type:* str

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent_alias#agent_alias_name BedrockAgentAlias#agent_alias_name}

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.agentId"></a>

- *Type:* str

Identifier for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent_alias#agent_id BedrockAgentAlias#agent_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.description"></a>

- *Type:* str

Description of the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent_alias#description BedrockAgentAlias#description}

---

##### `routing_configuration`<sup>Optional</sup> <a name="routing_configuration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.routingConfiguration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>]

Routing configuration for an Agent alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent_alias#routing_configuration BedrockAgentAlias#routing_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent_alias#tags BedrockAgentAlias#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.putRoutingConfiguration">put_routing_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetRoutingConfiguration">reset_routing_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_routing_configuration` <a name="put_routing_configuration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.putRoutingConfiguration"></a>

```python
def put_routing_configuration(
  value: IResolvable | typing.List[BedrockAgentAliasRoutingConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.putRoutingConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_routing_configuration` <a name="reset_routing_configuration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetRoutingConfiguration"></a>

```python
def reset_routing_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockAgentAlias resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isConstruct"></a>

```python
from cdktn_provider_awscc import bedrock_agent_alias

bedrockAgentAlias.BedrockAgentAlias.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bedrock_agent_alias

bedrockAgentAlias.BedrockAgentAlias.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bedrock_agent_alias

bedrockAgentAlias.BedrockAgentAlias.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bedrock_agent_alias

bedrockAgentAlias.BedrockAgentAlias.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockAgentAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockAgentAlias to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockAgentAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockAgentAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasArn">agent_alias_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasHistoryEvents">agent_alias_history_events</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList">BedrockAgentAliasAgentAliasHistoryEventsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasId">agent_alias_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasStatus">agent_alias_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.routingConfiguration">routing_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList">BedrockAgentAliasRoutingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasNameInput">agent_alias_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentIdInput">agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.routingConfigurationInput">routing_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasName">agent_alias_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_alias_arn`<sup>Required</sup> <a name="agent_alias_arn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasArn"></a>

```python
agent_alias_arn: str
```

- *Type:* str

---

##### `agent_alias_history_events`<sup>Required</sup> <a name="agent_alias_history_events" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasHistoryEvents"></a>

```python
agent_alias_history_events: BedrockAgentAliasAgentAliasHistoryEventsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList">BedrockAgentAliasAgentAliasHistoryEventsList</a>

---

##### `agent_alias_id`<sup>Required</sup> <a name="agent_alias_id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasId"></a>

```python
agent_alias_id: str
```

- *Type:* str

---

##### `agent_alias_status`<sup>Required</sup> <a name="agent_alias_status" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasStatus"></a>

```python
agent_alias_status: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `routing_configuration`<sup>Required</sup> <a name="routing_configuration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.routingConfiguration"></a>

```python
routing_configuration: BedrockAgentAliasRoutingConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList">BedrockAgentAliasRoutingConfigurationList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `agent_alias_name_input`<sup>Optional</sup> <a name="agent_alias_name_input" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasNameInput"></a>

```python
agent_alias_name_input: str
```

- *Type:* str

---

##### `agent_id_input`<sup>Optional</sup> <a name="agent_id_input" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentIdInput"></a>

```python
agent_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `routing_configuration_input`<sup>Optional</sup> <a name="routing_configuration_input" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.routingConfigurationInput"></a>

```python
routing_configuration_input: IResolvable | typing.List[BedrockAgentAliasRoutingConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `agent_alias_name`<sup>Required</sup> <a name="agent_alias_name" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasName"></a>

```python
agent_alias_name: str
```

- *Type:* str

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockAgentAliasAgentAliasHistoryEvents <a name="BedrockAgentAliasAgentAliasHistoryEvents" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEvents.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent_alias

bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEvents()
```


### BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration <a name="BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent_alias

bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration()
```


### BedrockAgentAliasConfig <a name="BedrockAgentAliasConfig" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent_alias

bedrockAgentAlias.BedrockAgentAliasConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_alias_name: str,
  agent_id: str,
  description: str = None,
  routing_configuration: IResolvable | typing.List[BedrockAgentAliasRoutingConfiguration] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.agentAliasName">agent_alias_name</a></code> | <code>str</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.agentId">agent_id</a></code> | <code>str</code> | Identifier for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.description">description</a></code> | <code>str</code> | Description of the Resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.routingConfiguration">routing_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>]</code> | Routing configuration for an Agent alias. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A map of tag keys and values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_alias_name`<sup>Required</sup> <a name="agent_alias_name" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.agentAliasName"></a>

```python
agent_alias_name: str
```

- *Type:* str

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent_alias#agent_alias_name BedrockAgentAlias#agent_alias_name}

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

Identifier for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent_alias#agent_id BedrockAgentAlias#agent_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent_alias#description BedrockAgentAlias#description}

---

##### `routing_configuration`<sup>Optional</sup> <a name="routing_configuration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.routingConfiguration"></a>

```python
routing_configuration: IResolvable | typing.List[BedrockAgentAliasRoutingConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>]

Routing configuration for an Agent alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent_alias#routing_configuration BedrockAgentAlias#routing_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent_alias#tags BedrockAgentAlias#tags}

---

### BedrockAgentAliasRoutingConfiguration <a name="BedrockAgentAliasRoutingConfiguration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent_alias

bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration(
  agent_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration.property.agentVersion">agent_version</a></code> | <code>str</code> | Agent Version. |

---

##### `agent_version`<sup>Optional</sup> <a name="agent_version" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

Agent Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent_alias#agent_version BedrockAgentAlias#agent_version}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockAgentAliasAgentAliasHistoryEventsList <a name="BedrockAgentAliasAgentAliasHistoryEventsList" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent_alias

bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockAgentAliasAgentAliasHistoryEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockAgentAliasAgentAliasHistoryEventsOutputReference <a name="BedrockAgentAliasAgentAliasHistoryEventsOutputReference" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent_alias

bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.routingConfiguration">routing_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList">BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEvents">BedrockAgentAliasAgentAliasHistoryEvents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `routing_configuration`<sup>Required</sup> <a name="routing_configuration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.routingConfiguration"></a>

```python
routing_configuration: BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList">BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList</a>

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.internalValue"></a>

```python
internal_value: BedrockAgentAliasAgentAliasHistoryEvents
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEvents">BedrockAgentAliasAgentAliasHistoryEvents</a>

---


### BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList <a name="BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent_alias

bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference <a name="BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent_alias

bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.agentVersion">agent_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration">BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_version`<sup>Required</sup> <a name="agent_version" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration">BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration</a>

---


### BedrockAgentAliasRoutingConfigurationList <a name="BedrockAgentAliasRoutingConfigurationList" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent_alias

bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockAgentAliasRoutingConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockAgentAliasRoutingConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>]

---


### BedrockAgentAliasRoutingConfigurationOutputReference <a name="BedrockAgentAliasRoutingConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent_alias

bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.resetAgentVersion">reset_agent_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_agent_version` <a name="reset_agent_version" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.resetAgentVersion"></a>

```python
def reset_agent_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.agentVersionInput">agent_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.agentVersion">agent_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_version_input`<sup>Optional</sup> <a name="agent_version_input" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.agentVersionInput"></a>

```python
agent_version_input: str
```

- *Type:* str

---

##### `agent_version`<sup>Required</sup> <a name="agent_version" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentAliasRoutingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>

---



