# `kafkaconnectCustomPlugin` Submodule <a name="`kafkaconnectCustomPlugin` Submodule" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KafkaconnectCustomPlugin <a name="KafkaconnectCustomPlugin" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin awscc_kafkaconnect_custom_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_custom_plugin

kafkaconnectCustomPlugin.KafkaconnectCustomPlugin(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content_type: str,
  location: KafkaconnectCustomPluginLocation,
  name: str,
  description: str = None,
  tags: IResolvable | typing.List[KafkaconnectCustomPluginTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | The type of the plugin file. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a></code> | Information about the location of a custom plugin. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the custom plugin. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.description">description</a></code> | <code>str</code> | A summary description of the custom plugin. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.contentType"></a>

- *Type:* str

The type of the plugin file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#content_type KafkaconnectCustomPlugin#content_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a>

Information about the location of a custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#location KafkaconnectCustomPlugin#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.name"></a>

- *Type:* str

The name of the custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#name KafkaconnectCustomPlugin#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.description"></a>

- *Type:* str

A summary description of the custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#description KafkaconnectCustomPlugin#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#tags KafkaconnectCustomPlugin#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putLocation">put_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_location` <a name="put_location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putLocation"></a>

```python
def put_location(
  s3_location: KafkaconnectCustomPluginLocationS3Location
) -> None
```

###### `s3_location`<sup>Required</sup> <a name="s3_location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putLocation.parameter.s3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a>

The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#s3_location KafkaconnectCustomPlugin#s3_location}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[KafkaconnectCustomPluginTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KafkaconnectCustomPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isConstruct"></a>

```python
from cdktn_provider_awscc import kafkaconnect_custom_plugin

kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformElement"></a>

```python
from cdktn_provider_awscc import kafkaconnect_custom_plugin

kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformResource"></a>

```python
from cdktn_provider_awscc import kafkaconnect_custom_plugin

kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import kafkaconnect_custom_plugin

kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KafkaconnectCustomPlugin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KafkaconnectCustomPlugin to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KafkaconnectCustomPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KafkaconnectCustomPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.customPluginArn">custom_plugin_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.fileDescription">file_description</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference">KafkaconnectCustomPluginFileDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference">KafkaconnectCustomPluginLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.revision">revision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList">KafkaconnectCustomPluginTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.locationInput">location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `custom_plugin_arn`<sup>Required</sup> <a name="custom_plugin_arn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.customPluginArn"></a>

```python
custom_plugin_arn: str
```

- *Type:* str

---

##### `file_description`<sup>Required</sup> <a name="file_description" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.fileDescription"></a>

```python
file_description: KafkaconnectCustomPluginFileDescriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference">KafkaconnectCustomPluginFileDescriptionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.location"></a>

```python
location: KafkaconnectCustomPluginLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference">KafkaconnectCustomPluginLocationOutputReference</a>

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.revision"></a>

```python
revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tags"></a>

```python
tags: KafkaconnectCustomPluginTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList">KafkaconnectCustomPluginTagsList</a>

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.locationInput"></a>

```python
location_input: IResolvable | KafkaconnectCustomPluginLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[KafkaconnectCustomPluginTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>]

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KafkaconnectCustomPluginConfig <a name="KafkaconnectCustomPluginConfig" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_custom_plugin

kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content_type: str,
  location: KafkaconnectCustomPluginLocation,
  name: str,
  description: str = None,
  tags: IResolvable | typing.List[KafkaconnectCustomPluginTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.contentType">content_type</a></code> | <code>str</code> | The type of the plugin file. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a></code> | Information about the location of a custom plugin. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.name">name</a></code> | <code>str</code> | The name of the custom plugin. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.description">description</a></code> | <code>str</code> | A summary description of the custom plugin. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

The type of the plugin file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#content_type KafkaconnectCustomPlugin#content_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.location"></a>

```python
location: KafkaconnectCustomPluginLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a>

Information about the location of a custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#location KafkaconnectCustomPlugin#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#name KafkaconnectCustomPlugin#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A summary description of the custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#description KafkaconnectCustomPlugin#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[KafkaconnectCustomPluginTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#tags KafkaconnectCustomPlugin#tags}

---

### KafkaconnectCustomPluginFileDescription <a name="KafkaconnectCustomPluginFileDescription" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescription.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_custom_plugin

kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescription()
```


### KafkaconnectCustomPluginLocation <a name="KafkaconnectCustomPluginLocation" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_custom_plugin

kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation(
  s3_location: KafkaconnectCustomPluginLocationS3Location
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a></code> | The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3. |

---

##### `s3_location`<sup>Required</sup> <a name="s3_location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation.property.s3Location"></a>

```python
s3_location: KafkaconnectCustomPluginLocationS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a>

The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#s3_location KafkaconnectCustomPlugin#s3_location}

---

### KafkaconnectCustomPluginLocationS3Location <a name="KafkaconnectCustomPluginLocationS3Location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_custom_plugin

kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location(
  bucket_arn: str,
  file_key: str,
  object_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.bucketArn">bucket_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.fileKey">file_key</a></code> | <code>str</code> | The file key for an object in an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.objectVersion">object_version</a></code> | <code>str</code> | The version of an object in an S3 bucket. |

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#bucket_arn KafkaconnectCustomPlugin#bucket_arn}

---

##### `file_key`<sup>Required</sup> <a name="file_key" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.fileKey"></a>

```python
file_key: str
```

- *Type:* str

The file key for an object in an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#file_key KafkaconnectCustomPlugin#file_key}

---

##### `object_version`<sup>Optional</sup> <a name="object_version" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.objectVersion"></a>

```python
object_version: str
```

- *Type:* str

The version of an object in an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#object_version KafkaconnectCustomPlugin#object_version}

---

### KafkaconnectCustomPluginTags <a name="KafkaconnectCustomPluginTags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_custom_plugin

kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#key KafkaconnectCustomPlugin#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#value KafkaconnectCustomPlugin#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KafkaconnectCustomPluginFileDescriptionOutputReference <a name="KafkaconnectCustomPluginFileDescriptionOutputReference" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_custom_plugin

kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fileMd5">file_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fileSize">file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescription">KafkaconnectCustomPluginFileDescription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_md5`<sup>Required</sup> <a name="file_md5" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fileMd5"></a>

```python
file_md5: str
```

- *Type:* str

---

##### `file_size`<sup>Required</sup> <a name="file_size" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fileSize"></a>

```python
file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.internalValue"></a>

```python
internal_value: KafkaconnectCustomPluginFileDescription
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescription">KafkaconnectCustomPluginFileDescription</a>

---


### KafkaconnectCustomPluginLocationOutputReference <a name="KafkaconnectCustomPluginLocationOutputReference" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_custom_plugin

kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.putS3Location">put_s3_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_location` <a name="put_s3_location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.putS3Location"></a>

```python
def put_s3_location(
  bucket_arn: str,
  file_key: str,
  object_version: str = None
) -> None
```

###### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.putS3Location.parameter.bucketArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#bucket_arn KafkaconnectCustomPlugin#bucket_arn}

---

###### `file_key`<sup>Required</sup> <a name="file_key" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.putS3Location.parameter.fileKey"></a>

- *Type:* str

The file key for an object in an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#file_key KafkaconnectCustomPlugin#file_key}

---

###### `object_version`<sup>Optional</sup> <a name="object_version" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.putS3Location.parameter.objectVersion"></a>

- *Type:* str

The version of an object in an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_custom_plugin#object_version KafkaconnectCustomPlugin#object_version}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference">KafkaconnectCustomPluginLocationS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.s3LocationInput">s3_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_location`<sup>Required</sup> <a name="s3_location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.s3Location"></a>

```python
s3_location: KafkaconnectCustomPluginLocationS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference">KafkaconnectCustomPluginLocationS3LocationOutputReference</a>

---

##### `s3_location_input`<sup>Optional</sup> <a name="s3_location_input" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.s3LocationInput"></a>

```python
s3_location_input: IResolvable | KafkaconnectCustomPluginLocationS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectCustomPluginLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a>

---


### KafkaconnectCustomPluginLocationS3LocationOutputReference <a name="KafkaconnectCustomPluginLocationS3LocationOutputReference" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_custom_plugin

kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resetObjectVersion">reset_object_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_object_version` <a name="reset_object_version" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resetObjectVersion"></a>

```python
def reset_object_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArnInput">bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKeyInput">file_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersionInput">object_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKey">file_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersion">object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn_input`<sup>Optional</sup> <a name="bucket_arn_input" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArnInput"></a>

```python
bucket_arn_input: str
```

- *Type:* str

---

##### `file_key_input`<sup>Optional</sup> <a name="file_key_input" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKeyInput"></a>

```python
file_key_input: str
```

- *Type:* str

---

##### `object_version_input`<sup>Optional</sup> <a name="object_version_input" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersionInput"></a>

```python
object_version_input: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `file_key`<sup>Required</sup> <a name="file_key" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKey"></a>

```python
file_key: str
```

- *Type:* str

---

##### `object_version`<sup>Required</sup> <a name="object_version" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersion"></a>

```python
object_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectCustomPluginLocationS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a>

---


### KafkaconnectCustomPluginTagsList <a name="KafkaconnectCustomPluginTagsList" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_custom_plugin

kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KafkaconnectCustomPluginTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KafkaconnectCustomPluginTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>]

---


### KafkaconnectCustomPluginTagsOutputReference <a name="KafkaconnectCustomPluginTagsOutputReference" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kafkaconnect_custom_plugin

kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KafkaconnectCustomPluginTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>

---



