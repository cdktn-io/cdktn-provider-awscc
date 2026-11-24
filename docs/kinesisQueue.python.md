# `kinesisQueue` Submodule <a name="`kinesisQueue` Submodule" id="@cdktn/provider-awscc.kinesisQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisQueue <a name="KinesisQueue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue awscc_kinesis_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_queue

kinesisQueue.KinesisQueue(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  queue_name: str,
  stream_configuration_list: IResolvable | typing.List[KinesisQueueStreamConfigurationListStruct],
  queue_attributes: KinesisQueueQueueAttributes = None,
  tags: IResolvable | typing.List[KinesisQueueTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.queueName">queue_name</a></code> | <code>str</code> | The name of the queue. The name's uniqueness is scoped per AWS account and region. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.streamConfigurationList">stream_configuration_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>]</code> | List of stream configurations associated with the queue. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.queueAttributes">queue_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a></code> | Mutable attributes that control queue consumption behavior. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>]</code> | An arbitrary set of tags (key-value pairs) to associate with the Kinesis queue. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `queue_name`<sup>Required</sup> <a name="queue_name" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.queueName"></a>

- *Type:* str

The name of the queue. The name's uniqueness is scoped per AWS account and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#queue_name KinesisQueue#queue_name}

---

##### `stream_configuration_list`<sup>Required</sup> <a name="stream_configuration_list" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.streamConfigurationList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>]

List of stream configurations associated with the queue.

v1 supports a single element; the list shape allows future extensibility to fan in from multiple streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#stream_configuration_list KinesisQueue#stream_configuration_list}

---

##### `queue_attributes`<sup>Optional</sup> <a name="queue_attributes" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.queueAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a>

Mutable attributes that control queue consumption behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#queue_attributes KinesisQueue#queue_attributes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>]

An arbitrary set of tags (key-value pairs) to associate with the Kinesis queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#tags KinesisQueue#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putQueueAttributes">put_queue_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putStreamConfigurationList">put_stream_configuration_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.resetQueueAttributes">reset_queue_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_queue_attributes` <a name="put_queue_attributes" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putQueueAttributes"></a>

```python
def put_queue_attributes(
  dead_letter_configuration: KinesisQueueQueueAttributesDeadLetterConfiguration = None,
  visibility_timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `dead_letter_configuration`<sup>Optional</sup> <a name="dead_letter_configuration" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putQueueAttributes.parameter.deadLetterConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration">KinesisQueueQueueAttributesDeadLetterConfiguration</a>

The dead-letter configuration applied to records that exceed the maximum receive count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#dead_letter_configuration KinesisQueue#dead_letter_configuration}

---

###### `visibility_timeout_seconds`<sup>Optional</sup> <a name="visibility_timeout_seconds" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putQueueAttributes.parameter.visibilityTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

The duration, in seconds, that a received record is hidden from subsequent receive calls after being handed out to a consumer.

Defaults to 30 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#visibility_timeout_seconds KinesisQueue#visibility_timeout_seconds}

---

##### `put_stream_configuration_list` <a name="put_stream_configuration_list" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putStreamConfigurationList"></a>

```python
def put_stream_configuration_list(
  value: IResolvable | typing.List[KinesisQueueStreamConfigurationListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putStreamConfigurationList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[KinesisQueueTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>]

---

##### `reset_queue_attributes` <a name="reset_queue_attributes" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.resetQueueAttributes"></a>

```python
def reset_queue_attributes() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KinesisQueue resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isConstruct"></a>

```python
from cdktn_provider_awscc import kinesis_queue

kinesisQueue.KinesisQueue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isTerraformElement"></a>

```python
from cdktn_provider_awscc import kinesis_queue

kinesisQueue.KinesisQueue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isTerraformResource"></a>

```python
from cdktn_provider_awscc import kinesis_queue

kinesisQueue.KinesisQueue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import kinesis_queue

kinesisQueue.KinesisQueue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KinesisQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KinesisQueue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KinesisQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KinesisQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueArn">queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueAttributes">queue_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference">KinesisQueueQueueAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueCreationTimestamp">queue_creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueStatus">queue_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.streamConfigurationList">stream_configuration_list</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList">KinesisQueueStreamConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList">KinesisQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueAttributesInput">queue_attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueNameInput">queue_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.streamConfigurationListInput">stream_configuration_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueName">queue_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `queue_arn`<sup>Required</sup> <a name="queue_arn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueArn"></a>

```python
queue_arn: str
```

- *Type:* str

---

##### `queue_attributes`<sup>Required</sup> <a name="queue_attributes" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueAttributes"></a>

```python
queue_attributes: KinesisQueueQueueAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference">KinesisQueueQueueAttributesOutputReference</a>

---

##### `queue_creation_timestamp`<sup>Required</sup> <a name="queue_creation_timestamp" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueCreationTimestamp"></a>

```python
queue_creation_timestamp: str
```

- *Type:* str

---

##### `queue_status`<sup>Required</sup> <a name="queue_status" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueStatus"></a>

```python
queue_status: str
```

- *Type:* str

---

##### `stream_configuration_list`<sup>Required</sup> <a name="stream_configuration_list" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.streamConfigurationList"></a>

```python
stream_configuration_list: KinesisQueueStreamConfigurationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList">KinesisQueueStreamConfigurationListStructList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.tags"></a>

```python
tags: KinesisQueueTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList">KinesisQueueTagsList</a>

---

##### `queue_attributes_input`<sup>Optional</sup> <a name="queue_attributes_input" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueAttributesInput"></a>

```python
queue_attributes_input: IResolvable | KinesisQueueQueueAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a>

---

##### `queue_name_input`<sup>Optional</sup> <a name="queue_name_input" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueNameInput"></a>

```python
queue_name_input: str
```

- *Type:* str

---

##### `stream_configuration_list_input`<sup>Optional</sup> <a name="stream_configuration_list_input" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.streamConfigurationListInput"></a>

```python
stream_configuration_list_input: IResolvable | typing.List[KinesisQueueStreamConfigurationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[KinesisQueueTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>]

---

##### `queue_name`<sup>Required</sup> <a name="queue_name" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueName"></a>

```python
queue_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisQueueConfig <a name="KinesisQueueConfig" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_queue

kinesisQueue.KinesisQueueConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  queue_name: str,
  stream_configuration_list: IResolvable | typing.List[KinesisQueueStreamConfigurationListStruct],
  queue_attributes: KinesisQueueQueueAttributes = None,
  tags: IResolvable | typing.List[KinesisQueueTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.queueName">queue_name</a></code> | <code>str</code> | The name of the queue. The name's uniqueness is scoped per AWS account and region. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.streamConfigurationList">stream_configuration_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>]</code> | List of stream configurations associated with the queue. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.queueAttributes">queue_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a></code> | Mutable attributes that control queue consumption behavior. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>]</code> | An arbitrary set of tags (key-value pairs) to associate with the Kinesis queue. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `queue_name`<sup>Required</sup> <a name="queue_name" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.queueName"></a>

```python
queue_name: str
```

- *Type:* str

The name of the queue. The name's uniqueness is scoped per AWS account and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#queue_name KinesisQueue#queue_name}

---

##### `stream_configuration_list`<sup>Required</sup> <a name="stream_configuration_list" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.streamConfigurationList"></a>

```python
stream_configuration_list: IResolvable | typing.List[KinesisQueueStreamConfigurationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>]

List of stream configurations associated with the queue.

v1 supports a single element; the list shape allows future extensibility to fan in from multiple streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#stream_configuration_list KinesisQueue#stream_configuration_list}

---

##### `queue_attributes`<sup>Optional</sup> <a name="queue_attributes" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.queueAttributes"></a>

```python
queue_attributes: KinesisQueueQueueAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a>

Mutable attributes that control queue consumption behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#queue_attributes KinesisQueue#queue_attributes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[KinesisQueueTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>]

An arbitrary set of tags (key-value pairs) to associate with the Kinesis queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#tags KinesisQueue#tags}

---

### KinesisQueueQueueAttributes <a name="KinesisQueueQueueAttributes" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_queue

kinesisQueue.KinesisQueueQueueAttributes(
  dead_letter_configuration: KinesisQueueQueueAttributesDeadLetterConfiguration = None,
  visibility_timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes.property.deadLetterConfiguration">dead_letter_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration">KinesisQueueQueueAttributesDeadLetterConfiguration</a></code> | The dead-letter configuration applied to records that exceed the maximum receive count. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes.property.visibilityTimeoutSeconds">visibility_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | The duration, in seconds, that a received record is hidden from subsequent receive calls after being handed out to a consumer. |

---

##### `dead_letter_configuration`<sup>Optional</sup> <a name="dead_letter_configuration" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes.property.deadLetterConfiguration"></a>

```python
dead_letter_configuration: KinesisQueueQueueAttributesDeadLetterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration">KinesisQueueQueueAttributesDeadLetterConfiguration</a>

The dead-letter configuration applied to records that exceed the maximum receive count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#dead_letter_configuration KinesisQueue#dead_letter_configuration}

---

##### `visibility_timeout_seconds`<sup>Optional</sup> <a name="visibility_timeout_seconds" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes.property.visibilityTimeoutSeconds"></a>

```python
visibility_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration, in seconds, that a received record is hidden from subsequent receive calls after being handed out to a consumer.

Defaults to 30 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#visibility_timeout_seconds KinesisQueue#visibility_timeout_seconds}

---

### KinesisQueueQueueAttributesDeadLetterConfiguration <a name="KinesisQueueQueueAttributesDeadLetterConfiguration" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_queue

kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration(
  max_receive_count: typing.Union[int, float] = None,
  target_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration.property.maxReceiveCount">max_receive_count</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a record can be received before it is moved to the dead-letter target. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration.property.targetType">target_type</a></code> | <code>str</code> | The dead-letter target type. BUILT_IN uses a service-managed dead-letter target; NONE disables dead-lettering. |

---

##### `max_receive_count`<sup>Optional</sup> <a name="max_receive_count" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration.property.maxReceiveCount"></a>

```python
max_receive_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times a record can be received before it is moved to the dead-letter target.

Required when TargetType is BUILT_IN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#max_receive_count KinesisQueue#max_receive_count}

---

##### `target_type`<sup>Optional</sup> <a name="target_type" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

The dead-letter target type. BUILT_IN uses a service-managed dead-letter target; NONE disables dead-lettering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#target_type KinesisQueue#target_type}

---

### KinesisQueueStreamConfigurationListStartingPosition <a name="KinesisQueueStreamConfigurationListStartingPosition" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_queue

kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition(
  timestamp: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition.property.timestamp">timestamp</a></code> | <code>str</code> | The timestamp to start reading from. Required when Type is AT_TIMESTAMP; the timestamp must not be in the future. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition.property.type">type</a></code> | <code>str</code> | The starting position type. |

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

The timestamp to start reading from. Required when Type is AT_TIMESTAMP; the timestamp must not be in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#timestamp KinesisQueue#timestamp}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition.property.type"></a>

```python
type: str
```

- *Type:* str

The starting position type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#type KinesisQueue#type}

---

### KinesisQueueStreamConfigurationListStruct <a name="KinesisQueueStreamConfigurationListStruct" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_queue

kinesisQueue.KinesisQueueStreamConfigurationListStruct(
  stream_arn: str,
  starting_position: KinesisQueueStreamConfigurationListStartingPosition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct.property.streamArn">stream_arn</a></code> | <code>str</code> | The Amazon resource name (ARN) of the Kinesis data stream that the queue reads from. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct.property.startingPosition">starting_position</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition">KinesisQueueStreamConfigurationListStartingPosition</a></code> | The position in the stream from which the queue starts reading records. |

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

The Amazon resource name (ARN) of the Kinesis data stream that the queue reads from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#stream_arn KinesisQueue#stream_arn}

---

##### `starting_position`<sup>Optional</sup> <a name="starting_position" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct.property.startingPosition"></a>

```python
starting_position: KinesisQueueStreamConfigurationListStartingPosition
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition">KinesisQueueStreamConfigurationListStartingPosition</a>

The position in the stream from which the queue starts reading records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#starting_position KinesisQueue#starting_position}

---

### KinesisQueueTags <a name="KinesisQueueTags" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_queue

kinesisQueue.KinesisQueueTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#key KinesisQueue#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#value KinesisQueue#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference <a name="KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_queue

kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resetMaxReceiveCount">reset_max_receive_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resetTargetType">reset_target_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_receive_count` <a name="reset_max_receive_count" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resetMaxReceiveCount"></a>

```python
def reset_max_receive_count() -> None
```

##### `reset_target_type` <a name="reset_target_type" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resetTargetType"></a>

```python
def reset_target_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.maxReceiveCountInput">max_receive_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.targetTypeInput">target_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.maxReceiveCount">max_receive_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration">KinesisQueueQueueAttributesDeadLetterConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_receive_count_input`<sup>Optional</sup> <a name="max_receive_count_input" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.maxReceiveCountInput"></a>

```python
max_receive_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_type_input`<sup>Optional</sup> <a name="target_type_input" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.targetTypeInput"></a>

```python
target_type_input: str
```

- *Type:* str

---

##### `max_receive_count`<sup>Required</sup> <a name="max_receive_count" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.maxReceiveCount"></a>

```python
max_receive_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisQueueQueueAttributesDeadLetterConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration">KinesisQueueQueueAttributesDeadLetterConfiguration</a>

---


### KinesisQueueQueueAttributesOutputReference <a name="KinesisQueueQueueAttributesOutputReference" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_queue

kinesisQueue.KinesisQueueQueueAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.putDeadLetterConfiguration">put_dead_letter_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resetDeadLetterConfiguration">reset_dead_letter_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resetVisibilityTimeoutSeconds">reset_visibility_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dead_letter_configuration` <a name="put_dead_letter_configuration" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.putDeadLetterConfiguration"></a>

```python
def put_dead_letter_configuration(
  max_receive_count: typing.Union[int, float] = None,
  target_type: str = None
) -> None
```

###### `max_receive_count`<sup>Optional</sup> <a name="max_receive_count" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.putDeadLetterConfiguration.parameter.maxReceiveCount"></a>

- *Type:* typing.Union[int, float]

The maximum number of times a record can be received before it is moved to the dead-letter target.

Required when TargetType is BUILT_IN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#max_receive_count KinesisQueue#max_receive_count}

---

###### `target_type`<sup>Optional</sup> <a name="target_type" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.putDeadLetterConfiguration.parameter.targetType"></a>

- *Type:* str

The dead-letter target type. BUILT_IN uses a service-managed dead-letter target; NONE disables dead-lettering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#target_type KinesisQueue#target_type}

---

##### `reset_dead_letter_configuration` <a name="reset_dead_letter_configuration" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resetDeadLetterConfiguration"></a>

```python
def reset_dead_letter_configuration() -> None
```

##### `reset_visibility_timeout_seconds` <a name="reset_visibility_timeout_seconds" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resetVisibilityTimeoutSeconds"></a>

```python
def reset_visibility_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.deadLetterConfiguration">dead_letter_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference">KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.deadLetterConfigurationInput">dead_letter_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration">KinesisQueueQueueAttributesDeadLetterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.visibilityTimeoutSecondsInput">visibility_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.visibilityTimeoutSeconds">visibility_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dead_letter_configuration`<sup>Required</sup> <a name="dead_letter_configuration" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.deadLetterConfiguration"></a>

```python
dead_letter_configuration: KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference">KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference</a>

---

##### `dead_letter_configuration_input`<sup>Optional</sup> <a name="dead_letter_configuration_input" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.deadLetterConfigurationInput"></a>

```python
dead_letter_configuration_input: IResolvable | KinesisQueueQueueAttributesDeadLetterConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration">KinesisQueueQueueAttributesDeadLetterConfiguration</a>

---

##### `visibility_timeout_seconds_input`<sup>Optional</sup> <a name="visibility_timeout_seconds_input" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.visibilityTimeoutSecondsInput"></a>

```python
visibility_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `visibility_timeout_seconds`<sup>Required</sup> <a name="visibility_timeout_seconds" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.visibilityTimeoutSeconds"></a>

```python
visibility_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisQueueQueueAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a>

---


### KinesisQueueStreamConfigurationListStartingPositionOutputReference <a name="KinesisQueueStreamConfigurationListStartingPositionOutputReference" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_queue

kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resetTimestamp">reset_timestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_timestamp` <a name="reset_timestamp" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resetTimestamp"></a>

```python
def reset_timestamp() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.timestampInput">timestamp_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition">KinesisQueueStreamConfigurationListStartingPosition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timestamp_input`<sup>Optional</sup> <a name="timestamp_input" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.timestampInput"></a>

```python
timestamp_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisQueueStreamConfigurationListStartingPosition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition">KinesisQueueStreamConfigurationListStartingPosition</a>

---


### KinesisQueueStreamConfigurationListStructList <a name="KinesisQueueStreamConfigurationListStructList" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_queue

kinesisQueue.KinesisQueueStreamConfigurationListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KinesisQueueStreamConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KinesisQueueStreamConfigurationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>]

---


### KinesisQueueStreamConfigurationListStructOutputReference <a name="KinesisQueueStreamConfigurationListStructOutputReference" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_queue

kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.putStartingPosition">put_starting_position</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.resetStartingPosition">reset_starting_position</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_starting_position` <a name="put_starting_position" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.putStartingPosition"></a>

```python
def put_starting_position(
  timestamp: str = None,
  type: str = None
) -> None
```

###### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.putStartingPosition.parameter.timestamp"></a>

- *Type:* str

The timestamp to start reading from. Required when Type is AT_TIMESTAMP; the timestamp must not be in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#timestamp KinesisQueue#timestamp}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.putStartingPosition.parameter.type"></a>

- *Type:* str

The starting position type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#type KinesisQueue#type}

---

##### `reset_starting_position` <a name="reset_starting_position" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.resetStartingPosition"></a>

```python
def reset_starting_position() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.startingPosition">starting_position</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference">KinesisQueueStreamConfigurationListStartingPositionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.startingPositionInput">starting_position_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition">KinesisQueueStreamConfigurationListStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.streamArnInput">stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `starting_position`<sup>Required</sup> <a name="starting_position" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.startingPosition"></a>

```python
starting_position: KinesisQueueStreamConfigurationListStartingPositionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference">KinesisQueueStreamConfigurationListStartingPositionOutputReference</a>

---

##### `starting_position_input`<sup>Optional</sup> <a name="starting_position_input" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.startingPositionInput"></a>

```python
starting_position_input: IResolvable | KinesisQueueStreamConfigurationListStartingPosition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition">KinesisQueueStreamConfigurationListStartingPosition</a>

---

##### `stream_arn_input`<sup>Optional</sup> <a name="stream_arn_input" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.streamArnInput"></a>

```python
stream_arn_input: str
```

- *Type:* str

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisQueueStreamConfigurationListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>

---


### KinesisQueueTagsList <a name="KinesisQueueTagsList" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_queue

kinesisQueue.KinesisQueueTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KinesisQueueTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KinesisQueueTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>]

---


### KinesisQueueTagsOutputReference <a name="KinesisQueueTagsOutputReference" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_queue

kinesisQueue.KinesisQueueTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisQueueTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>

---



