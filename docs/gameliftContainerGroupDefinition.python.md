# `gameliftContainerGroupDefinition` Submodule <a name="`gameliftContainerGroupDefinition` Submodule" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftContainerGroupDefinition <a name="GameliftContainerGroupDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition awscc_gamelift_container_group_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  operating_system: str,
  total_memory_limit_mebibytes: typing.Union[int, float],
  total_vcpu_limit: typing.Union[int, float],
  container_group_type: str = None,
  game_server_container_definition: GameliftContainerGroupDefinitionGameServerContainerDefinition = None,
  source_version_number: typing.Union[int, float] = None,
  support_container_definitions: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitions] = None,
  tags: IResolvable | typing.List[GameliftContainerGroupDefinitionTags] = None,
  version_description: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.name">name</a></code> | <code>str</code> | A descriptive label for the container group definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.operatingSystem">operating_system</a></code> | <code>str</code> | The operating system of the container group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.totalMemoryLimitMebibytes">total_memory_limit_mebibytes</a></code> | <code>typing.Union[int, float]</code> | The total memory limit of container groups following this definition in MiB. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.totalVcpuLimit">total_vcpu_limit</a></code> | <code>typing.Union[int, float]</code> | The total amount of virtual CPUs on the container group definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.containerGroupType">container_group_type</a></code> | <code>str</code> | The scope of the container group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.gameServerContainerDefinition">game_server_container_definition</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a></code> | Specifies the information required to run game servers with this container group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.sourceVersionNumber">source_version_number</a></code> | <code>typing.Union[int, float]</code> | A specific ContainerGroupDefinition version to be updated. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.supportContainerDefinitions">support_container_definitions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>]</code> | A collection of support container definitions that define the containers in this group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.versionDescription">version_description</a></code> | <code>str</code> | The description of this version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.name"></a>

- *Type:* str

A descriptive label for the container group definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#name GameliftContainerGroupDefinition#name}

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.operatingSystem"></a>

- *Type:* str

The operating system of the container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#operating_system GameliftContainerGroupDefinition#operating_system}

---

##### `total_memory_limit_mebibytes`<sup>Required</sup> <a name="total_memory_limit_mebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.totalMemoryLimitMebibytes"></a>

- *Type:* typing.Union[int, float]

The total memory limit of container groups following this definition in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#total_memory_limit_mebibytes GameliftContainerGroupDefinition#total_memory_limit_mebibytes}

---

##### `total_vcpu_limit`<sup>Required</sup> <a name="total_vcpu_limit" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.totalVcpuLimit"></a>

- *Type:* typing.Union[int, float]

The total amount of virtual CPUs on the container group definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#total_vcpu_limit GameliftContainerGroupDefinition#total_vcpu_limit}

---

##### `container_group_type`<sup>Optional</sup> <a name="container_group_type" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.containerGroupType"></a>

- *Type:* str

The scope of the container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_group_type GameliftContainerGroupDefinition#container_group_type}

---

##### `game_server_container_definition`<sup>Optional</sup> <a name="game_server_container_definition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.gameServerContainerDefinition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a>

Specifies the information required to run game servers with this container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#game_server_container_definition GameliftContainerGroupDefinition#game_server_container_definition}

---

##### `source_version_number`<sup>Optional</sup> <a name="source_version_number" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.sourceVersionNumber"></a>

- *Type:* typing.Union[int, float]

A specific ContainerGroupDefinition version to be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#source_version_number GameliftContainerGroupDefinition#source_version_number}

---

##### `support_container_definitions`<sup>Optional</sup> <a name="support_container_definitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.supportContainerDefinitions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>]

A collection of support container definitions that define the containers in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#support_container_definitions GameliftContainerGroupDefinition#support_container_definitions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#tags GameliftContainerGroupDefinition#tags}

---

##### `version_description`<sup>Optional</sup> <a name="version_description" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.versionDescription"></a>

- *Type:* str

The description of this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#version_description GameliftContainerGroupDefinition#version_description}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition">put_game_server_container_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putSupportContainerDefinitions">put_support_container_definitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetContainerGroupType">reset_container_group_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetGameServerContainerDefinition">reset_game_server_container_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetSourceVersionNumber">reset_source_version_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetSupportContainerDefinitions">reset_support_container_definitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetVersionDescription">reset_version_description</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_game_server_container_definition` <a name="put_game_server_container_definition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition"></a>

```python
def put_game_server_container_definition(
  container_name: str = None,
  depends_on: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn] = None,
  environment_override: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride] = None,
  image_uri: str = None,
  linux_capabilities: GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities = None,
  mount_points: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints] = None,
  port_configuration: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration = None,
  resolved_image_digest: str = None,
  server_sdk_version: str = None
) -> None
```

###### `container_name`<sup>Optional</sup> <a name="container_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition.parameter.containerName"></a>

- *Type:* str

A descriptive label for the container definition. Container definition names must be unique with a container group definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}

---

###### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition.parameter.dependsOn"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>]

A list of container dependencies that determines when this container starts up and shuts down.

For container groups with multiple containers, dependencies let you define a startup/shutdown sequence across the containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#depends_on GameliftContainerGroupDefinition#depends_on}

---

###### `environment_override`<sup>Optional</sup> <a name="environment_override" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition.parameter.environmentOverride"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>]

The environment variables to pass to a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#environment_override GameliftContainerGroupDefinition#environment_override}

---

###### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition.parameter.imageUri"></a>

- *Type:* str

Specifies the image URI of this container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#image_uri GameliftContainerGroupDefinition#image_uri}

---

###### `linux_capabilities`<sup>Optional</sup> <a name="linux_capabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition.parameter.linuxCapabilities"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a>

Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#linux_capabilities GameliftContainerGroupDefinition#linux_capabilities}

---

###### `mount_points`<sup>Optional</sup> <a name="mount_points" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition.parameter.mountPoints"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>]

A list of mount point configurations to be used in a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#mount_points GameliftContainerGroupDefinition#mount_points}

---

###### `port_configuration`<sup>Optional</sup> <a name="port_configuration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition.parameter.portConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a>

Defines the ports on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#port_configuration GameliftContainerGroupDefinition#port_configuration}

---

###### `resolved_image_digest`<sup>Optional</sup> <a name="resolved_image_digest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition.parameter.resolvedImageDigest"></a>

- *Type:* str

The digest of the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#resolved_image_digest GameliftContainerGroupDefinition#resolved_image_digest}

---

###### `server_sdk_version`<sup>Optional</sup> <a name="server_sdk_version" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition.parameter.serverSdkVersion"></a>

- *Type:* str

The version of the server SDK used in this container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#server_sdk_version GameliftContainerGroupDefinition#server_sdk_version}

---

##### `put_support_container_definitions` <a name="put_support_container_definitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putSupportContainerDefinitions"></a>

```python
def put_support_container_definitions(
  value: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putSupportContainerDefinitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[GameliftContainerGroupDefinitionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>]

---

##### `reset_container_group_type` <a name="reset_container_group_type" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetContainerGroupType"></a>

```python
def reset_container_group_type() -> None
```

##### `reset_game_server_container_definition` <a name="reset_game_server_container_definition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetGameServerContainerDefinition"></a>

```python
def reset_game_server_container_definition() -> None
```

##### `reset_source_version_number` <a name="reset_source_version_number" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetSourceVersionNumber"></a>

```python
def reset_source_version_number() -> None
```

##### `reset_support_container_definitions` <a name="reset_support_container_definitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetSupportContainerDefinitions"></a>

```python
def reset_support_container_definitions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_version_description` <a name="reset_version_description" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetVersionDescription"></a>

```python
def reset_version_description() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GameliftContainerGroupDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isConstruct"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformElement"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformResource"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GameliftContainerGroupDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GameliftContainerGroupDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GameliftContainerGroupDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GameliftContainerGroupDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupDefinitionArn">container_group_definition_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.gameServerContainerDefinition">game_server_container_definition</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.supportContainerDefinitions">support_container_definitions</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList">GameliftContainerGroupDefinitionSupportContainerDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList">GameliftContainerGroupDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionNumber">version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupTypeInput">container_group_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.gameServerContainerDefinitionInput">game_server_container_definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.operatingSystemInput">operating_system_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.sourceVersionNumberInput">source_version_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.supportContainerDefinitionsInput">support_container_definitions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalMemoryLimitMebibytesInput">total_memory_limit_mebibytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalVcpuLimitInput">total_vcpu_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionDescriptionInput">version_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupType">container_group_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.operatingSystem">operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.sourceVersionNumber">source_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalMemoryLimitMebibytes">total_memory_limit_mebibytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalVcpuLimit">total_vcpu_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionDescription">version_description</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `container_group_definition_arn`<sup>Required</sup> <a name="container_group_definition_arn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupDefinitionArn"></a>

```python
container_group_definition_arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `game_server_container_definition`<sup>Required</sup> <a name="game_server_container_definition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.gameServerContainerDefinition"></a>

```python
game_server_container_definition: GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `support_container_definitions`<sup>Required</sup> <a name="support_container_definitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.supportContainerDefinitions"></a>

```python
support_container_definitions: GameliftContainerGroupDefinitionSupportContainerDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList">GameliftContainerGroupDefinitionSupportContainerDefinitionsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tags"></a>

```python
tags: GameliftContainerGroupDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList">GameliftContainerGroupDefinitionTagsList</a>

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionNumber"></a>

```python
version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_group_type_input`<sup>Optional</sup> <a name="container_group_type_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupTypeInput"></a>

```python
container_group_type_input: str
```

- *Type:* str

---

##### `game_server_container_definition_input`<sup>Optional</sup> <a name="game_server_container_definition_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.gameServerContainerDefinitionInput"></a>

```python
game_server_container_definition_input: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operating_system_input`<sup>Optional</sup> <a name="operating_system_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.operatingSystemInput"></a>

```python
operating_system_input: str
```

- *Type:* str

---

##### `source_version_number_input`<sup>Optional</sup> <a name="source_version_number_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.sourceVersionNumberInput"></a>

```python
source_version_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `support_container_definitions_input`<sup>Optional</sup> <a name="support_container_definitions_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.supportContainerDefinitionsInput"></a>

```python
support_container_definitions_input: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[GameliftContainerGroupDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>]

---

##### `total_memory_limit_mebibytes_input`<sup>Optional</sup> <a name="total_memory_limit_mebibytes_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalMemoryLimitMebibytesInput"></a>

```python
total_memory_limit_mebibytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_vcpu_limit_input`<sup>Optional</sup> <a name="total_vcpu_limit_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalVcpuLimitInput"></a>

```python
total_vcpu_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_description_input`<sup>Optional</sup> <a name="version_description_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionDescriptionInput"></a>

```python
version_description_input: str
```

- *Type:* str

---

##### `container_group_type`<sup>Required</sup> <a name="container_group_type" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupType"></a>

```python
container_group_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

---

##### `source_version_number`<sup>Required</sup> <a name="source_version_number" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.sourceVersionNumber"></a>

```python
source_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_memory_limit_mebibytes`<sup>Required</sup> <a name="total_memory_limit_mebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalMemoryLimitMebibytes"></a>

```python
total_memory_limit_mebibytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_vcpu_limit`<sup>Required</sup> <a name="total_vcpu_limit" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalVcpuLimit"></a>

```python
total_vcpu_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_description`<sup>Required</sup> <a name="version_description" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftContainerGroupDefinitionConfig <a name="GameliftContainerGroupDefinitionConfig" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  operating_system: str,
  total_memory_limit_mebibytes: typing.Union[int, float],
  total_vcpu_limit: typing.Union[int, float],
  container_group_type: str = None,
  game_server_container_definition: GameliftContainerGroupDefinitionGameServerContainerDefinition = None,
  source_version_number: typing.Union[int, float] = None,
  support_container_definitions: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitions] = None,
  tags: IResolvable | typing.List[GameliftContainerGroupDefinitionTags] = None,
  version_description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.name">name</a></code> | <code>str</code> | A descriptive label for the container group definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.operatingSystem">operating_system</a></code> | <code>str</code> | The operating system of the container group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.totalMemoryLimitMebibytes">total_memory_limit_mebibytes</a></code> | <code>typing.Union[int, float]</code> | The total memory limit of container groups following this definition in MiB. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.totalVcpuLimit">total_vcpu_limit</a></code> | <code>typing.Union[int, float]</code> | The total amount of virtual CPUs on the container group definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.containerGroupType">container_group_type</a></code> | <code>str</code> | The scope of the container group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.gameServerContainerDefinition">game_server_container_definition</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a></code> | Specifies the information required to run game servers with this container group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.sourceVersionNumber">source_version_number</a></code> | <code>typing.Union[int, float]</code> | A specific ContainerGroupDefinition version to be updated. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.supportContainerDefinitions">support_container_definitions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>]</code> | A collection of support container definitions that define the containers in this group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.versionDescription">version_description</a></code> | <code>str</code> | The description of this version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A descriptive label for the container group definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#name GameliftContainerGroupDefinition#name}

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

The operating system of the container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#operating_system GameliftContainerGroupDefinition#operating_system}

---

##### `total_memory_limit_mebibytes`<sup>Required</sup> <a name="total_memory_limit_mebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.totalMemoryLimitMebibytes"></a>

```python
total_memory_limit_mebibytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The total memory limit of container groups following this definition in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#total_memory_limit_mebibytes GameliftContainerGroupDefinition#total_memory_limit_mebibytes}

---

##### `total_vcpu_limit`<sup>Required</sup> <a name="total_vcpu_limit" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.totalVcpuLimit"></a>

```python
total_vcpu_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The total amount of virtual CPUs on the container group definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#total_vcpu_limit GameliftContainerGroupDefinition#total_vcpu_limit}

---

##### `container_group_type`<sup>Optional</sup> <a name="container_group_type" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.containerGroupType"></a>

```python
container_group_type: str
```

- *Type:* str

The scope of the container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_group_type GameliftContainerGroupDefinition#container_group_type}

---

##### `game_server_container_definition`<sup>Optional</sup> <a name="game_server_container_definition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.gameServerContainerDefinition"></a>

```python
game_server_container_definition: GameliftContainerGroupDefinitionGameServerContainerDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a>

Specifies the information required to run game servers with this container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#game_server_container_definition GameliftContainerGroupDefinition#game_server_container_definition}

---

##### `source_version_number`<sup>Optional</sup> <a name="source_version_number" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.sourceVersionNumber"></a>

```python
source_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A specific ContainerGroupDefinition version to be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#source_version_number GameliftContainerGroupDefinition#source_version_number}

---

##### `support_container_definitions`<sup>Optional</sup> <a name="support_container_definitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.supportContainerDefinitions"></a>

```python
support_container_definitions: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>]

A collection of support container definitions that define the containers in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#support_container_definitions GameliftContainerGroupDefinition#support_container_definitions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[GameliftContainerGroupDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#tags GameliftContainerGroupDefinition#tags}

---

##### `version_description`<sup>Optional</sup> <a name="version_description" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

The description of this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#version_description GameliftContainerGroupDefinition#version_description}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinition <a name="GameliftContainerGroupDefinitionGameServerContainerDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition(
  container_name: str = None,
  depends_on: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn] = None,
  environment_override: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride] = None,
  image_uri: str = None,
  linux_capabilities: GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities = None,
  mount_points: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints] = None,
  port_configuration: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration = None,
  resolved_image_digest: str = None,
  server_sdk_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.containerName">container_name</a></code> | <code>str</code> | A descriptive label for the container definition. Container definition names must be unique with a container group definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.dependsOn">depends_on</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>]</code> | A list of container dependencies that determines when this container starts up and shuts down. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.environmentOverride">environment_override</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>]</code> | The environment variables to pass to a container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.imageUri">image_uri</a></code> | <code>str</code> | Specifies the image URI of this container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.linuxCapabilities">linux_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a></code> | Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.mountPoints">mount_points</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>]</code> | A list of mount point configurations to be used in a container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.portConfiguration">port_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a></code> | Defines the ports on the container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.resolvedImageDigest">resolved_image_digest</a></code> | <code>str</code> | The digest of the container image. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.serverSdkVersion">server_sdk_version</a></code> | <code>str</code> | The version of the server SDK used in this container group. |

---

##### `container_name`<sup>Optional</sup> <a name="container_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

A descriptive label for the container definition. Container definition names must be unique with a container group definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.dependsOn"></a>

```python
depends_on: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>]

A list of container dependencies that determines when this container starts up and shuts down.

For container groups with multiple containers, dependencies let you define a startup/shutdown sequence across the containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#depends_on GameliftContainerGroupDefinition#depends_on}

---

##### `environment_override`<sup>Optional</sup> <a name="environment_override" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.environmentOverride"></a>

```python
environment_override: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>]

The environment variables to pass to a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#environment_override GameliftContainerGroupDefinition#environment_override}

---

##### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

Specifies the image URI of this container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#image_uri GameliftContainerGroupDefinition#image_uri}

---

##### `linux_capabilities`<sup>Optional</sup> <a name="linux_capabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.linuxCapabilities"></a>

```python
linux_capabilities: GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a>

Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#linux_capabilities GameliftContainerGroupDefinition#linux_capabilities}

---

##### `mount_points`<sup>Optional</sup> <a name="mount_points" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.mountPoints"></a>

```python
mount_points: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>]

A list of mount point configurations to be used in a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#mount_points GameliftContainerGroupDefinition#mount_points}

---

##### `port_configuration`<sup>Optional</sup> <a name="port_configuration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.portConfiguration"></a>

```python
port_configuration: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a>

Defines the ports on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#port_configuration GameliftContainerGroupDefinition#port_configuration}

---

##### `resolved_image_digest`<sup>Optional</sup> <a name="resolved_image_digest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.resolvedImageDigest"></a>

```python
resolved_image_digest: str
```

- *Type:* str

The digest of the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#resolved_image_digest GameliftContainerGroupDefinition#resolved_image_digest}

---

##### `server_sdk_version`<sup>Optional</sup> <a name="server_sdk_version" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.serverSdkVersion"></a>

```python
server_sdk_version: str
```

- *Type:* str

The version of the server SDK used in this container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#server_sdk_version GameliftContainerGroupDefinition#server_sdk_version}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn(
  condition: str = None,
  container_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.property.condition">condition</a></code> | <code>str</code> | The type of dependency. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.property.containerName">container_name</a></code> | <code>str</code> | A descriptive label for the container definition. The container being defined depends on this container's condition. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.property.condition"></a>

```python
condition: str
```

- *Type:* str

The type of dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#condition GameliftContainerGroupDefinition#condition}

---

##### `container_name`<sup>Optional</sup> <a name="container_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

A descriptive label for the container definition. The container being defined depends on this container's condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.property.name">name</a></code> | <code>str</code> | The environment variable name. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.property.value">value</a></code> | <code>str</code> | The environment variable value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.property.name"></a>

```python
name: str
```

- *Type:* str

The environment variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#name GameliftContainerGroupDefinition#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.property.value"></a>

```python
value: str
```

- *Type:* str

The environment variable value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#value GameliftContainerGroupDefinition#value}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities(
  include: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities.property.include">include</a></code> | <code>typing.List[str]</code> | The list of Linux capabilities to add to the container's default configuration. |

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

The list of Linux capabilities to add to the container's default configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#include GameliftContainerGroupDefinition#include}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints(
  access_level: str = None,
  container_path: str = None,
  instance_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.accessLevel">access_level</a></code> | <code>str</code> | The access permissions for the mounted path. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.containerPath">container_path</a></code> | <code>str</code> | The path inside the container where the mount is accessible. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.instancePath">instance_path</a></code> | <code>str</code> | The path on the host that will be mounted in the container. |

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

The access permissions for the mounted path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#access_level GameliftContainerGroupDefinition#access_level}

---

##### `container_path`<sup>Optional</sup> <a name="container_path" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.containerPath"></a>

```python
container_path: str
```

- *Type:* str

The path inside the container where the mount is accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_path GameliftContainerGroupDefinition#container_path}

---

##### `instance_path`<sup>Optional</sup> <a name="instance_path" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.instancePath"></a>

```python
instance_path: str
```

- *Type:* str

The path on the host that will be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#instance_path GameliftContainerGroupDefinition#instance_path}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration(
  container_port_ranges: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration.property.containerPortRanges">container_port_ranges</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>]</code> | Specifies one or more ranges of ports on a container. |

---

##### `container_port_ranges`<sup>Optional</sup> <a name="container_port_ranges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration.property.containerPortRanges"></a>

```python
container_port_ranges: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>]

Specifies one or more ranges of ports on a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_port_ranges GameliftContainerGroupDefinition#container_port_ranges}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges(
  from_port: typing.Union[int, float] = None,
  protocol: str = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | A starting value for the range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.protocol">protocol</a></code> | <code>str</code> | Defines the protocol of these ports. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | An ending value for the range of allowed port numbers. |

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A starting value for the range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#from_port GameliftContainerGroupDefinition#from_port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Defines the protocol of these ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#protocol GameliftContainerGroupDefinition#protocol}

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An ending value for the range of allowed port numbers.

Port numbers are end-inclusive. This value must be equal to or greater than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#to_port GameliftContainerGroupDefinition#to_port}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitions <a name="GameliftContainerGroupDefinitionSupportContainerDefinitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions(
  container_name: str = None,
  depends_on: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn] = None,
  environment_override: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride] = None,
  essential: bool | IResolvable = None,
  health_check: GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck = None,
  image_uri: str = None,
  linux_capabilities: GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities = None,
  memory_hard_limit_mebibytes: typing.Union[int, float] = None,
  mount_points: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints] = None,
  port_configuration: GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration = None,
  resolved_image_digest: str = None,
  vcpu: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.containerName">container_name</a></code> | <code>str</code> | A descriptive label for the container definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.dependsOn">depends_on</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>]</code> | A list of container dependencies that determines when this container starts up and shuts down. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.environmentOverride">environment_override</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>]</code> | The environment variables to pass to a container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.essential">essential</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies if the container is essential. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.healthCheck">health_check</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a></code> | Specifies how the health of the containers will be checked. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.imageUri">image_uri</a></code> | <code>str</code> | Specifies the image URI of this container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.linuxCapabilities">linux_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a></code> | Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.memoryHardLimitMebibytes">memory_hard_limit_mebibytes</a></code> | <code>typing.Union[int, float]</code> | The total memory limit of container groups following this definition in MiB. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.mountPoints">mount_points</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>]</code> | A list of mount point configurations to be used in a container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.portConfiguration">port_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a></code> | Defines the ports on the container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.resolvedImageDigest">resolved_image_digest</a></code> | <code>str</code> | The digest of the container image. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.vcpu">vcpu</a></code> | <code>typing.Union[int, float]</code> | The number of virtual CPUs to give to the support group. |

---

##### `container_name`<sup>Optional</sup> <a name="container_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

A descriptive label for the container definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.dependsOn"></a>

```python
depends_on: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>]

A list of container dependencies that determines when this container starts up and shuts down.

For container groups with multiple containers, dependencies let you define a startup/shutdown sequence across the containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#depends_on GameliftContainerGroupDefinition#depends_on}

---

##### `environment_override`<sup>Optional</sup> <a name="environment_override" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.environmentOverride"></a>

```python
environment_override: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>]

The environment variables to pass to a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#environment_override GameliftContainerGroupDefinition#environment_override}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.essential"></a>

```python
essential: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies if the container is essential.

If an essential container fails a health check, then all containers in the container group will be restarted. You must specify exactly 1 essential container in a container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#essential GameliftContainerGroupDefinition#essential}

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.healthCheck"></a>

```python
health_check: GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a>

Specifies how the health of the containers will be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#health_check GameliftContainerGroupDefinition#health_check}

---

##### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

Specifies the image URI of this container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#image_uri GameliftContainerGroupDefinition#image_uri}

---

##### `linux_capabilities`<sup>Optional</sup> <a name="linux_capabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.linuxCapabilities"></a>

```python
linux_capabilities: GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a>

Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#linux_capabilities GameliftContainerGroupDefinition#linux_capabilities}

---

##### `memory_hard_limit_mebibytes`<sup>Optional</sup> <a name="memory_hard_limit_mebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.memoryHardLimitMebibytes"></a>

```python
memory_hard_limit_mebibytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The total memory limit of container groups following this definition in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#memory_hard_limit_mebibytes GameliftContainerGroupDefinition#memory_hard_limit_mebibytes}

---

##### `mount_points`<sup>Optional</sup> <a name="mount_points" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.mountPoints"></a>

```python
mount_points: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>]

A list of mount point configurations to be used in a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#mount_points GameliftContainerGroupDefinition#mount_points}

---

##### `port_configuration`<sup>Optional</sup> <a name="port_configuration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.portConfiguration"></a>

```python
port_configuration: GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a>

Defines the ports on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#port_configuration GameliftContainerGroupDefinition#port_configuration}

---

##### `resolved_image_digest`<sup>Optional</sup> <a name="resolved_image_digest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.resolvedImageDigest"></a>

```python
resolved_image_digest: str
```

- *Type:* str

The digest of the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#resolved_image_digest GameliftContainerGroupDefinition#resolved_image_digest}

---

##### `vcpu`<sup>Optional</sup> <a name="vcpu" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.vcpu"></a>

```python
vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of virtual CPUs to give to the support group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#vcpu GameliftContainerGroupDefinition#vcpu}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn(
  condition: str = None,
  container_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.property.condition">condition</a></code> | <code>str</code> | The type of dependency. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.property.containerName">container_name</a></code> | <code>str</code> | A descriptive label for the container definition. The container being defined depends on this container's condition. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.property.condition"></a>

```python
condition: str
```

- *Type:* str

The type of dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#condition GameliftContainerGroupDefinition#condition}

---

##### `container_name`<sup>Optional</sup> <a name="container_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

A descriptive label for the container definition. The container being defined depends on this container's condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.property.name">name</a></code> | <code>str</code> | The environment variable name. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.property.value">value</a></code> | <code>str</code> | The environment variable value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.property.name"></a>

```python
name: str
```

- *Type:* str

The environment variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#name GameliftContainerGroupDefinition#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.property.value"></a>

```python
value: str
```

- *Type:* str

The environment variable value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#value GameliftContainerGroupDefinition#value}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck(
  command: typing.List[str] = None,
  interval: typing.Union[int, float] = None,
  retries: typing.Union[int, float] = None,
  start_period: typing.Union[int, float] = None,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.command">command</a></code> | <code>typing.List[str]</code> | A string array representing the command that the container runs to determine if it is healthy. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | How often (in seconds) the health is checked. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | How many times the process manager will retry the command after a timeout. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.startPeriod">start_period</a></code> | <code>typing.Union[int, float]</code> | The optional grace period (in seconds) to give a container time to boostrap before teh health check is declared failed. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | How many seconds the process manager allows the command to run before canceling it. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

A string array representing the command that the container runs to determine if it is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#command GameliftContainerGroupDefinition#command}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often (in seconds) the health is checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#interval GameliftContainerGroupDefinition#interval}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many times the process manager will retry the command after a timeout.

(The first run of the command does not count as a retry.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#retries GameliftContainerGroupDefinition#retries}

---

##### `start_period`<sup>Optional</sup> <a name="start_period" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.startPeriod"></a>

```python
start_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The optional grace period (in seconds) to give a container time to boostrap before teh health check is declared failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#start_period GameliftContainerGroupDefinition#start_period}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many seconds the process manager allows the command to run before canceling it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#timeout GameliftContainerGroupDefinition#timeout}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities(
  include: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities.property.include">include</a></code> | <code>typing.List[str]</code> | The list of Linux capabilities to add to the container's default configuration. |

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

The list of Linux capabilities to add to the container's default configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#include GameliftContainerGroupDefinition#include}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints(
  access_level: str = None,
  container_path: str = None,
  instance_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.accessLevel">access_level</a></code> | <code>str</code> | The access permissions for the mounted path. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.containerPath">container_path</a></code> | <code>str</code> | The path inside the container where the mount is accessible. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.instancePath">instance_path</a></code> | <code>str</code> | The path on the host that will be mounted in the container. |

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

The access permissions for the mounted path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#access_level GameliftContainerGroupDefinition#access_level}

---

##### `container_path`<sup>Optional</sup> <a name="container_path" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.containerPath"></a>

```python
container_path: str
```

- *Type:* str

The path inside the container where the mount is accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_path GameliftContainerGroupDefinition#container_path}

---

##### `instance_path`<sup>Optional</sup> <a name="instance_path" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.instancePath"></a>

```python
instance_path: str
```

- *Type:* str

The path on the host that will be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#instance_path GameliftContainerGroupDefinition#instance_path}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration(
  container_port_ranges: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration.property.containerPortRanges">container_port_ranges</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>]</code> | Specifies one or more ranges of ports on a container. |

---

##### `container_port_ranges`<sup>Optional</sup> <a name="container_port_ranges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration.property.containerPortRanges"></a>

```python
container_port_ranges: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>]

Specifies one or more ranges of ports on a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_port_ranges GameliftContainerGroupDefinition#container_port_ranges}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges(
  from_port: typing.Union[int, float] = None,
  protocol: str = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | A starting value for the range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.protocol">protocol</a></code> | <code>str</code> | Defines the protocol of these ports. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | An ending value for the range of allowed port numbers. |

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A starting value for the range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#from_port GameliftContainerGroupDefinition#from_port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Defines the protocol of these ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#protocol GameliftContainerGroupDefinition#protocol}

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An ending value for the range of allowed port numbers.

Port numbers are end-inclusive. This value must be equal to or greater than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#to_port GameliftContainerGroupDefinition#to_port}

---

### GameliftContainerGroupDefinitionTags <a name="GameliftContainerGroupDefinitionTags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.property.value">value</a></code> | <code>str</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#key GameliftContainerGroupDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#value GameliftContainerGroupDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>]

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resetContainerName">reset_container_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_container_name` <a name="reset_container_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resetContainerName"></a>

```python
def reset_container_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>]

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resetInclude">reset_include</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include` <a name="reset_include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resetInclude"></a>

```python
def reset_include() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.includeInput">include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.includeInput"></a>

```python
include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>]

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetContainerPath">reset_container_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetInstancePath">reset_instance_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_level` <a name="reset_access_level" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_container_path` <a name="reset_container_path" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetContainerPath"></a>

```python
def reset_container_path() -> None
```

##### `reset_instance_path` <a name="reset_instance_path" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetInstancePath"></a>

```python
def reset_instance_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPathInput">container_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePathInput">instance_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPath">container_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePath">instance_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `container_path_input`<sup>Optional</sup> <a name="container_path_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPathInput"></a>

```python
container_path_input: str
```

- *Type:* str

---

##### `instance_path_input`<sup>Optional</sup> <a name="instance_path_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePathInput"></a>

```python
instance_path_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `container_path`<sup>Required</sup> <a name="container_path" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPath"></a>

```python
container_path: str
```

- *Type:* str

---

##### `instance_path`<sup>Required</sup> <a name="instance_path" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePath"></a>

```python
instance_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putDependsOn">put_depends_on</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putEnvironmentOverride">put_environment_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putLinuxCapabilities">put_linux_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putMountPoints">put_mount_points</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putPortConfiguration">put_port_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetContainerName">reset_container_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetDependsOn">reset_depends_on</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetEnvironmentOverride">reset_environment_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetImageUri">reset_image_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetLinuxCapabilities">reset_linux_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetMountPoints">reset_mount_points</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetPortConfiguration">reset_port_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetResolvedImageDigest">reset_resolved_image_digest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetServerSdkVersion">reset_server_sdk_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_depends_on` <a name="put_depends_on" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putDependsOn"></a>

```python
def put_depends_on(
  value: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putDependsOn.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>]

---

##### `put_environment_override` <a name="put_environment_override" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putEnvironmentOverride"></a>

```python
def put_environment_override(
  value: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putEnvironmentOverride.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>]

---

##### `put_linux_capabilities` <a name="put_linux_capabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putLinuxCapabilities"></a>

```python
def put_linux_capabilities(
  include: typing.List[str] = None
) -> None
```

###### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putLinuxCapabilities.parameter.include"></a>

- *Type:* typing.List[str]

The list of Linux capabilities to add to the container's default configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#include GameliftContainerGroupDefinition#include}

---

##### `put_mount_points` <a name="put_mount_points" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putMountPoints"></a>

```python
def put_mount_points(
  value: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putMountPoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>]

---

##### `put_port_configuration` <a name="put_port_configuration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putPortConfiguration"></a>

```python
def put_port_configuration(
  container_port_ranges: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges] = None
) -> None
```

###### `container_port_ranges`<sup>Optional</sup> <a name="container_port_ranges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putPortConfiguration.parameter.containerPortRanges"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>]

Specifies one or more ranges of ports on a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_port_ranges GameliftContainerGroupDefinition#container_port_ranges}

---

##### `reset_container_name` <a name="reset_container_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetContainerName"></a>

```python
def reset_container_name() -> None
```

##### `reset_depends_on` <a name="reset_depends_on" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetDependsOn"></a>

```python
def reset_depends_on() -> None
```

##### `reset_environment_override` <a name="reset_environment_override" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetEnvironmentOverride"></a>

```python
def reset_environment_override() -> None
```

##### `reset_image_uri` <a name="reset_image_uri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetImageUri"></a>

```python
def reset_image_uri() -> None
```

##### `reset_linux_capabilities` <a name="reset_linux_capabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetLinuxCapabilities"></a>

```python
def reset_linux_capabilities() -> None
```

##### `reset_mount_points` <a name="reset_mount_points" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetMountPoints"></a>

```python
def reset_mount_points() -> None
```

##### `reset_port_configuration` <a name="reset_port_configuration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetPortConfiguration"></a>

```python
def reset_port_configuration() -> None
```

##### `reset_resolved_image_digest` <a name="reset_resolved_image_digest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetResolvedImageDigest"></a>

```python
def reset_resolved_image_digest() -> None
```

##### `reset_server_sdk_version` <a name="reset_server_sdk_version" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetServerSdkVersion"></a>

```python
def reset_server_sdk_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOn">depends_on</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverride">environment_override</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilities">linux_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPoints">mount_points</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfiguration">port_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOnInput">depends_on_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverrideInput">environment_override_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilitiesInput">linux_capabilities_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPointsInput">mount_points_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfigurationInput">port_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigestInput">resolved_image_digest_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersionInput">server_sdk_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigest">resolved_image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersion">server_sdk_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `depends_on`<sup>Required</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOn"></a>

```python
depends_on: GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList</a>

---

##### `environment_override`<sup>Required</sup> <a name="environment_override" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverride"></a>

```python
environment_override: GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList</a>

---

##### `linux_capabilities`<sup>Required</sup> <a name="linux_capabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilities"></a>

```python
linux_capabilities: GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference</a>

---

##### `mount_points`<sup>Required</sup> <a name="mount_points" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPoints"></a>

```python
mount_points: GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList</a>

---

##### `port_configuration`<sup>Required</sup> <a name="port_configuration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfiguration"></a>

```python
port_configuration: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference</a>

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `depends_on_input`<sup>Optional</sup> <a name="depends_on_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOnInput"></a>

```python
depends_on_input: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>]

---

##### `environment_override_input`<sup>Optional</sup> <a name="environment_override_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverrideInput"></a>

```python
environment_override_input: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>]

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `linux_capabilities_input`<sup>Optional</sup> <a name="linux_capabilities_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilitiesInput"></a>

```python
linux_capabilities_input: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a>

---

##### `mount_points_input`<sup>Optional</sup> <a name="mount_points_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPointsInput"></a>

```python
mount_points_input: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>]

---

##### `port_configuration_input`<sup>Optional</sup> <a name="port_configuration_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfigurationInput"></a>

```python
port_configuration_input: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a>

---

##### `resolved_image_digest_input`<sup>Optional</sup> <a name="resolved_image_digest_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigestInput"></a>

```python
resolved_image_digest_input: str
```

- *Type:* str

---

##### `server_sdk_version_input`<sup>Optional</sup> <a name="server_sdk_version_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersionInput"></a>

```python
server_sdk_version_input: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `resolved_image_digest`<sup>Required</sup> <a name="resolved_image_digest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigest"></a>

```python
resolved_image_digest: str
```

- *Type:* str

---

##### `server_sdk_version`<sup>Required</sup> <a name="server_sdk_version" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersion"></a>

```python
server_sdk_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>]

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_port` <a name="reset_from_port" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.putContainerPortRanges">put_container_port_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resetContainerPortRanges">reset_container_port_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_container_port_ranges` <a name="put_container_port_ranges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.putContainerPortRanges"></a>

```python
def put_container_port_ranges(
  value: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.putContainerPortRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>]

---

##### `reset_container_port_ranges` <a name="reset_container_port_ranges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resetContainerPortRanges"></a>

```python
def reset_container_port_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRanges">container_port_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRangesInput">container_port_ranges_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_port_ranges`<sup>Required</sup> <a name="container_port_ranges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRanges"></a>

```python
container_port_ranges: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList</a>

---

##### `container_port_ranges_input`<sup>Optional</sup> <a name="container_port_ranges_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRangesInput"></a>

```python
container_port_ranges_input: IResolvable | typing.List[GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>]

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resetContainerName">reset_container_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_container_name` <a name="reset_container_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resetContainerName"></a>

```python
def reset_container_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>]

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetRetries">reset_retries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetStartPeriod">reset_start_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_command` <a name="reset_command" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_retries` <a name="reset_retries" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetRetries"></a>

```python
def reset_retries() -> None
```

##### `reset_start_period` <a name="reset_start_period" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetStartPeriod"></a>

```python
def reset_start_period() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriodInput">start_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriod">start_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_period_input`<sup>Optional</sup> <a name="start_period_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriodInput"></a>

```python
start_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_period`<sup>Required</sup> <a name="start_period" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriod"></a>

```python
start_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resetInclude">reset_include</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include` <a name="reset_include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resetInclude"></a>

```python
def reset_include() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.includeInput">include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.includeInput"></a>

```python
include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>]

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>]

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetContainerPath">reset_container_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetInstancePath">reset_instance_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_level` <a name="reset_access_level" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_container_path` <a name="reset_container_path" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetContainerPath"></a>

```python
def reset_container_path() -> None
```

##### `reset_instance_path` <a name="reset_instance_path" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetInstancePath"></a>

```python
def reset_instance_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPathInput">container_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePathInput">instance_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPath">container_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePath">instance_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `container_path_input`<sup>Optional</sup> <a name="container_path_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPathInput"></a>

```python
container_path_input: str
```

- *Type:* str

---

##### `instance_path_input`<sup>Optional</sup> <a name="instance_path_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePathInput"></a>

```python
instance_path_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `container_path`<sup>Required</sup> <a name="container_path" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPath"></a>

```python
container_path: str
```

- *Type:* str

---

##### `instance_path`<sup>Required</sup> <a name="instance_path" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePath"></a>

```python
instance_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putDependsOn">put_depends_on</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putEnvironmentOverride">put_environment_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putHealthCheck">put_health_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putLinuxCapabilities">put_linux_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putMountPoints">put_mount_points</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putPortConfiguration">put_port_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetContainerName">reset_container_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetDependsOn">reset_depends_on</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetEnvironmentOverride">reset_environment_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetEssential">reset_essential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetHealthCheck">reset_health_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetImageUri">reset_image_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetLinuxCapabilities">reset_linux_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetMemoryHardLimitMebibytes">reset_memory_hard_limit_mebibytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetMountPoints">reset_mount_points</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetPortConfiguration">reset_port_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetResolvedImageDigest">reset_resolved_image_digest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetVcpu">reset_vcpu</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_depends_on` <a name="put_depends_on" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putDependsOn"></a>

```python
def put_depends_on(
  value: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putDependsOn.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>]

---

##### `put_environment_override` <a name="put_environment_override" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putEnvironmentOverride"></a>

```python
def put_environment_override(
  value: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putEnvironmentOverride.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>]

---

##### `put_health_check` <a name="put_health_check" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putHealthCheck"></a>

```python
def put_health_check(
  command: typing.List[str] = None,
  interval: typing.Union[int, float] = None,
  retries: typing.Union[int, float] = None,
  start_period: typing.Union[int, float] = None,
  timeout: typing.Union[int, float] = None
) -> None
```

###### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putHealthCheck.parameter.command"></a>

- *Type:* typing.List[str]

A string array representing the command that the container runs to determine if it is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#command GameliftContainerGroupDefinition#command}

---

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putHealthCheck.parameter.interval"></a>

- *Type:* typing.Union[int, float]

How often (in seconds) the health is checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#interval GameliftContainerGroupDefinition#interval}

---

###### `retries`<sup>Optional</sup> <a name="retries" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putHealthCheck.parameter.retries"></a>

- *Type:* typing.Union[int, float]

How many times the process manager will retry the command after a timeout.

(The first run of the command does not count as a retry.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#retries GameliftContainerGroupDefinition#retries}

---

###### `start_period`<sup>Optional</sup> <a name="start_period" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putHealthCheck.parameter.startPeriod"></a>

- *Type:* typing.Union[int, float]

The optional grace period (in seconds) to give a container time to boostrap before teh health check is declared failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#start_period GameliftContainerGroupDefinition#start_period}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putHealthCheck.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

How many seconds the process manager allows the command to run before canceling it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#timeout GameliftContainerGroupDefinition#timeout}

---

##### `put_linux_capabilities` <a name="put_linux_capabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putLinuxCapabilities"></a>

```python
def put_linux_capabilities(
  include: typing.List[str] = None
) -> None
```

###### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putLinuxCapabilities.parameter.include"></a>

- *Type:* typing.List[str]

The list of Linux capabilities to add to the container's default configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#include GameliftContainerGroupDefinition#include}

---

##### `put_mount_points` <a name="put_mount_points" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putMountPoints"></a>

```python
def put_mount_points(
  value: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putMountPoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>]

---

##### `put_port_configuration` <a name="put_port_configuration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putPortConfiguration"></a>

```python
def put_port_configuration(
  container_port_ranges: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges] = None
) -> None
```

###### `container_port_ranges`<sup>Optional</sup> <a name="container_port_ranges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putPortConfiguration.parameter.containerPortRanges"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>]

Specifies one or more ranges of ports on a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_group_definition#container_port_ranges GameliftContainerGroupDefinition#container_port_ranges}

---

##### `reset_container_name` <a name="reset_container_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetContainerName"></a>

```python
def reset_container_name() -> None
```

##### `reset_depends_on` <a name="reset_depends_on" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetDependsOn"></a>

```python
def reset_depends_on() -> None
```

##### `reset_environment_override` <a name="reset_environment_override" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetEnvironmentOverride"></a>

```python
def reset_environment_override() -> None
```

##### `reset_essential` <a name="reset_essential" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetEssential"></a>

```python
def reset_essential() -> None
```

##### `reset_health_check` <a name="reset_health_check" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetHealthCheck"></a>

```python
def reset_health_check() -> None
```

##### `reset_image_uri` <a name="reset_image_uri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetImageUri"></a>

```python
def reset_image_uri() -> None
```

##### `reset_linux_capabilities` <a name="reset_linux_capabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetLinuxCapabilities"></a>

```python
def reset_linux_capabilities() -> None
```

##### `reset_memory_hard_limit_mebibytes` <a name="reset_memory_hard_limit_mebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetMemoryHardLimitMebibytes"></a>

```python
def reset_memory_hard_limit_mebibytes() -> None
```

##### `reset_mount_points` <a name="reset_mount_points" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetMountPoints"></a>

```python
def reset_mount_points() -> None
```

##### `reset_port_configuration` <a name="reset_port_configuration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetPortConfiguration"></a>

```python
def reset_port_configuration() -> None
```

##### `reset_resolved_image_digest` <a name="reset_resolved_image_digest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetResolvedImageDigest"></a>

```python
def reset_resolved_image_digest() -> None
```

##### `reset_vcpu` <a name="reset_vcpu" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetVcpu"></a>

```python
def reset_vcpu() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOn">depends_on</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverride">environment_override</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheck">health_check</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilities">linux_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPoints">mount_points</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfiguration">port_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOnInput">depends_on_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverrideInput">environment_override_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essentialInput">essential_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheckInput">health_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilitiesInput">linux_capabilities_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytesInput">memory_hard_limit_mebibytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPointsInput">mount_points_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfigurationInput">port_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigestInput">resolved_image_digest_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpuInput">vcpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essential">essential</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytes">memory_hard_limit_mebibytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigest">resolved_image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpu">vcpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `depends_on`<sup>Required</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOn"></a>

```python
depends_on: GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList</a>

---

##### `environment_override`<sup>Required</sup> <a name="environment_override" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverride"></a>

```python
environment_override: GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList</a>

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheck"></a>

```python
health_check: GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference</a>

---

##### `linux_capabilities`<sup>Required</sup> <a name="linux_capabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilities"></a>

```python
linux_capabilities: GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference</a>

---

##### `mount_points`<sup>Required</sup> <a name="mount_points" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPoints"></a>

```python
mount_points: GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList</a>

---

##### `port_configuration`<sup>Required</sup> <a name="port_configuration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfiguration"></a>

```python
port_configuration: GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference</a>

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `depends_on_input`<sup>Optional</sup> <a name="depends_on_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOnInput"></a>

```python
depends_on_input: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>]

---

##### `environment_override_input`<sup>Optional</sup> <a name="environment_override_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverrideInput"></a>

```python
environment_override_input: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>]

---

##### `essential_input`<sup>Optional</sup> <a name="essential_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essentialInput"></a>

```python
essential_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheckInput"></a>

```python
health_check_input: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a>

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `linux_capabilities_input`<sup>Optional</sup> <a name="linux_capabilities_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilitiesInput"></a>

```python
linux_capabilities_input: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a>

---

##### `memory_hard_limit_mebibytes_input`<sup>Optional</sup> <a name="memory_hard_limit_mebibytes_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytesInput"></a>

```python
memory_hard_limit_mebibytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_points_input`<sup>Optional</sup> <a name="mount_points_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPointsInput"></a>

```python
mount_points_input: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>]

---

##### `port_configuration_input`<sup>Optional</sup> <a name="port_configuration_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfigurationInput"></a>

```python
port_configuration_input: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a>

---

##### `resolved_image_digest_input`<sup>Optional</sup> <a name="resolved_image_digest_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigestInput"></a>

```python
resolved_image_digest_input: str
```

- *Type:* str

---

##### `vcpu_input`<sup>Optional</sup> <a name="vcpu_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpuInput"></a>

```python
vcpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essential"></a>

```python
essential: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `memory_hard_limit_mebibytes`<sup>Required</sup> <a name="memory_hard_limit_mebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytes"></a>

```python
memory_hard_limit_mebibytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resolved_image_digest`<sup>Required</sup> <a name="resolved_image_digest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigest"></a>

```python
resolved_image_digest: str
```

- *Type:* str

---

##### `vcpu`<sup>Required</sup> <a name="vcpu" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpu"></a>

```python
vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>]

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_port` <a name="reset_from_port" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.putContainerPortRanges">put_container_port_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resetContainerPortRanges">reset_container_port_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_container_port_ranges` <a name="put_container_port_ranges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.putContainerPortRanges"></a>

```python
def put_container_port_ranges(
  value: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.putContainerPortRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>]

---

##### `reset_container_port_ranges` <a name="reset_container_port_ranges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resetContainerPortRanges"></a>

```python
def reset_container_port_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRanges">container_port_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRangesInput">container_port_ranges_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_port_ranges`<sup>Required</sup> <a name="container_port_ranges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRanges"></a>

```python
container_port_ranges: GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList</a>

---

##### `container_port_ranges_input`<sup>Optional</sup> <a name="container_port_ranges_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRangesInput"></a>

```python
container_port_ranges_input: IResolvable | typing.List[GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a>

---


### GameliftContainerGroupDefinitionTagsList <a name="GameliftContainerGroupDefinitionTagsList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftContainerGroupDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftContainerGroupDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>]

---


### GameliftContainerGroupDefinitionTagsOutputReference <a name="GameliftContainerGroupDefinitionTagsOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_group_definition

gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerGroupDefinitionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>

---



