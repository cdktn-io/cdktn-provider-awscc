# `kinesisvideoSignalingChannel` Submodule <a name="`kinesisvideoSignalingChannel` Submodule" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisvideoSignalingChannel <a name="KinesisvideoSignalingChannel" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kinesisvideo_signaling_channel awscc_kinesisvideo_signaling_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisvideo_signaling_channel

kinesisvideoSignalingChannel.KinesisvideoSignalingChannel(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  message_ttl_seconds: typing.Union[int, float] = None,
  name: str = None,
  tags: IResolvable | typing.List[KinesisvideoSignalingChannelTags] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.messageTtlSeconds">message_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | The period of time a signaling channel retains undelivered messages before they are discarded. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Kinesis Video Signaling Channel. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the Kinesis Video Signaling Channel to create. Currently, SINGLE_MASTER is the only supported channel type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `message_ttl_seconds`<sup>Optional</sup> <a name="message_ttl_seconds" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.messageTtlSeconds"></a>

- *Type:* typing.Union[int, float]

The period of time a signaling channel retains undelivered messages before they are discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kinesisvideo_signaling_channel#message_ttl_seconds KinesisvideoSignalingChannel#message_ttl_seconds}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.name"></a>

- *Type:* str

The name of the Kinesis Video Signaling Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kinesisvideo_signaling_channel#name KinesisvideoSignalingChannel#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kinesisvideo_signaling_channel#tags KinesisvideoSignalingChannel#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.type"></a>

- *Type:* str

The type of the Kinesis Video Signaling Channel to create. Currently, SINGLE_MASTER is the only supported channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kinesisvideo_signaling_channel#type KinesisvideoSignalingChannel#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetMessageTtlSeconds">reset_message_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[KinesisvideoSignalingChannelTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>]

---

##### `reset_message_ttl_seconds` <a name="reset_message_ttl_seconds" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetMessageTtlSeconds"></a>

```python
def reset_message_ttl_seconds() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KinesisvideoSignalingChannel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isConstruct"></a>

```python
from cdktn_provider_awscc import kinesisvideo_signaling_channel

kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isTerraformElement"></a>

```python
from cdktn_provider_awscc import kinesisvideo_signaling_channel

kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isTerraformResource"></a>

```python
from cdktn_provider_awscc import kinesisvideo_signaling_channel

kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import kinesisvideo_signaling_channel

kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KinesisvideoSignalingChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KinesisvideoSignalingChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KinesisvideoSignalingChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kinesisvideo_signaling_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KinesisvideoSignalingChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList">KinesisvideoSignalingChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.messageTtlSecondsInput">message_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.messageTtlSeconds">message_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.tags"></a>

```python
tags: KinesisvideoSignalingChannelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList">KinesisvideoSignalingChannelTagsList</a>

---

##### `message_ttl_seconds_input`<sup>Optional</sup> <a name="message_ttl_seconds_input" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.messageTtlSecondsInput"></a>

```python
message_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[KinesisvideoSignalingChannelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `message_ttl_seconds`<sup>Required</sup> <a name="message_ttl_seconds" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.messageTtlSeconds"></a>

```python
message_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisvideoSignalingChannelConfig <a name="KinesisvideoSignalingChannelConfig" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisvideo_signaling_channel

kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  message_ttl_seconds: typing.Union[int, float] = None,
  name: str = None,
  tags: IResolvable | typing.List[KinesisvideoSignalingChannelTags] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.messageTtlSeconds">message_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | The period of time a signaling channel retains undelivered messages before they are discarded. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.name">name</a></code> | <code>str</code> | The name of the Kinesis Video Signaling Channel. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.type">type</a></code> | <code>str</code> | The type of the Kinesis Video Signaling Channel to create. Currently, SINGLE_MASTER is the only supported channel type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `message_ttl_seconds`<sup>Optional</sup> <a name="message_ttl_seconds" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.messageTtlSeconds"></a>

```python
message_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The period of time a signaling channel retains undelivered messages before they are discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kinesisvideo_signaling_channel#message_ttl_seconds KinesisvideoSignalingChannel#message_ttl_seconds}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Kinesis Video Signaling Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kinesisvideo_signaling_channel#name KinesisvideoSignalingChannel#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[KinesisvideoSignalingChannelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kinesisvideo_signaling_channel#tags KinesisvideoSignalingChannel#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the Kinesis Video Signaling Channel to create. Currently, SINGLE_MASTER is the only supported channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kinesisvideo_signaling_channel#type KinesisvideoSignalingChannel#type}

---

### KinesisvideoSignalingChannelTags <a name="KinesisvideoSignalingChannelTags" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisvideo_signaling_channel

kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kinesisvideo_signaling_channel#key KinesisvideoSignalingChannel#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:.  The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kinesisvideo_signaling_channel#value KinesisvideoSignalingChannel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisvideoSignalingChannelTagsList <a name="KinesisvideoSignalingChannelTagsList" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisvideo_signaling_channel

kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KinesisvideoSignalingChannelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KinesisvideoSignalingChannelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>]

---


### KinesisvideoSignalingChannelTagsOutputReference <a name="KinesisvideoSignalingChannelTagsOutputReference" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisvideo_signaling_channel

kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisvideoSignalingChannelTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>

---



