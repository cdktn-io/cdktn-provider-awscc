# `kinesisvideoStream` Submodule <a name="`kinesisvideoStream` Submodule" id="@cdktn/provider-awscc.kinesisvideoStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisvideoStream <a name="KinesisvideoStream" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream awscc_kinesisvideo_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisvideo_stream

kinesisvideoStream.KinesisvideoStream(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_retention_in_hours: typing.Union[int, float] = None,
  device_name: str = None,
  kms_key_id: str = None,
  media_type: str = None,
  name: str = None,
  stream_storage_configuration: KinesisvideoStreamStreamStorageConfiguration = None,
  tags: IResolvable | typing.List[KinesisvideoStreamTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.dataRetentionInHours">data_retention_in_hours</a></code> | <code>typing.Union[int, float]</code> | The number of hours till which Kinesis Video will retain the data in the stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.deviceName">device_name</a></code> | <code>str</code> | The name of the device that is writing to the stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | AWS KMS key ID that Kinesis Video Streams uses to encrypt stream data. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.mediaType">media_type</a></code> | <code>str</code> | The media type of the stream. Consumers of the stream can use this information when processing the stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Kinesis Video stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.streamStorageConfiguration">stream_storage_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfiguration">KinesisvideoStreamStreamStorageConfiguration</a></code> | Configuration for the storage tier of the Kinesis Video Stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTags">KinesisvideoStreamTags</a>]</code> | An array of key-value pairs associated with the Kinesis Video Stream. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_retention_in_hours`<sup>Optional</sup> <a name="data_retention_in_hours" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.dataRetentionInHours"></a>

- *Type:* typing.Union[int, float]

The number of hours till which Kinesis Video will retain the data in the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#data_retention_in_hours KinesisvideoStream#data_retention_in_hours}

---

##### `device_name`<sup>Optional</sup> <a name="device_name" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.deviceName"></a>

- *Type:* str

The name of the device that is writing to the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#device_name KinesisvideoStream#device_name}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

AWS KMS key ID that Kinesis Video Streams uses to encrypt stream data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#kms_key_id KinesisvideoStream#kms_key_id}

---

##### `media_type`<sup>Optional</sup> <a name="media_type" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.mediaType"></a>

- *Type:* str

The media type of the stream. Consumers of the stream can use this information when processing the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#media_type KinesisvideoStream#media_type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.name"></a>

- *Type:* str

The name of the Kinesis Video stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#name KinesisvideoStream#name}

---

##### `stream_storage_configuration`<sup>Optional</sup> <a name="stream_storage_configuration" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.streamStorageConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfiguration">KinesisvideoStreamStreamStorageConfiguration</a>

Configuration for the storage tier of the Kinesis Video Stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#stream_storage_configuration KinesisvideoStream#stream_storage_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTags">KinesisvideoStreamTags</a>]

An array of key-value pairs associated with the Kinesis Video Stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#tags KinesisvideoStream#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.putStreamStorageConfiguration">put_stream_storage_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.resetDataRetentionInHours">reset_data_retention_in_hours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.resetDeviceName">reset_device_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.resetMediaType">reset_media_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.resetStreamStorageConfiguration">reset_stream_storage_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_stream_storage_configuration` <a name="put_stream_storage_configuration" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.putStreamStorageConfiguration"></a>

```python
def put_stream_storage_configuration(
  default_storage_tier: str = None
) -> None
```

###### `default_storage_tier`<sup>Optional</sup> <a name="default_storage_tier" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.putStreamStorageConfiguration.parameter.defaultStorageTier"></a>

- *Type:* str

The storage tier for the Kinesis Video Stream. Determines the storage class used for stream data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#default_storage_tier KinesisvideoStream#default_storage_tier}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[KinesisvideoStreamTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTags">KinesisvideoStreamTags</a>]

---

##### `reset_data_retention_in_hours` <a name="reset_data_retention_in_hours" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.resetDataRetentionInHours"></a>

```python
def reset_data_retention_in_hours() -> None
```

##### `reset_device_name` <a name="reset_device_name" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.resetDeviceName"></a>

```python
def reset_device_name() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_media_type` <a name="reset_media_type" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.resetMediaType"></a>

```python
def reset_media_type() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_stream_storage_configuration` <a name="reset_stream_storage_configuration" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.resetStreamStorageConfiguration"></a>

```python
def reset_stream_storage_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KinesisvideoStream resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.isConstruct"></a>

```python
from cdktn_provider_awscc import kinesisvideo_stream

kinesisvideoStream.KinesisvideoStream.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.isTerraformElement"></a>

```python
from cdktn_provider_awscc import kinesisvideo_stream

kinesisvideoStream.KinesisvideoStream.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.isTerraformResource"></a>

```python
from cdktn_provider_awscc import kinesisvideo_stream

kinesisvideoStream.KinesisvideoStream.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import kinesisvideo_stream

kinesisvideoStream.KinesisvideoStream.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KinesisvideoStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KinesisvideoStream to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KinesisvideoStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KinesisvideoStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.streamStorageConfiguration">stream_storage_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference">KinesisvideoStreamStreamStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList">KinesisvideoStreamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.dataRetentionInHoursInput">data_retention_in_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.mediaTypeInput">media_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.streamStorageConfigurationInput">stream_storage_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfiguration">KinesisvideoStreamStreamStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTags">KinesisvideoStreamTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.dataRetentionInHours">data_retention_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.mediaType">media_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `stream_storage_configuration`<sup>Required</sup> <a name="stream_storage_configuration" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.streamStorageConfiguration"></a>

```python
stream_storage_configuration: KinesisvideoStreamStreamStorageConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference">KinesisvideoStreamStreamStorageConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.tags"></a>

```python
tags: KinesisvideoStreamTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList">KinesisvideoStreamTagsList</a>

---

##### `data_retention_in_hours_input`<sup>Optional</sup> <a name="data_retention_in_hours_input" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.dataRetentionInHoursInput"></a>

```python
data_retention_in_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `media_type_input`<sup>Optional</sup> <a name="media_type_input" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.mediaTypeInput"></a>

```python
media_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `stream_storage_configuration_input`<sup>Optional</sup> <a name="stream_storage_configuration_input" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.streamStorageConfigurationInput"></a>

```python
stream_storage_configuration_input: IResolvable | KinesisvideoStreamStreamStorageConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfiguration">KinesisvideoStreamStreamStorageConfiguration</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[KinesisvideoStreamTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTags">KinesisvideoStreamTags</a>]

---

##### `data_retention_in_hours`<sup>Required</sup> <a name="data_retention_in_hours" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.dataRetentionInHours"></a>

```python
data_retention_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `media_type`<sup>Required</sup> <a name="media_type" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.mediaType"></a>

```python
media_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStream.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisvideoStreamConfig <a name="KinesisvideoStreamConfig" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisvideo_stream

kinesisvideoStream.KinesisvideoStreamConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_retention_in_hours: typing.Union[int, float] = None,
  device_name: str = None,
  kms_key_id: str = None,
  media_type: str = None,
  name: str = None,
  stream_storage_configuration: KinesisvideoStreamStreamStorageConfiguration = None,
  tags: IResolvable | typing.List[KinesisvideoStreamTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.dataRetentionInHours">data_retention_in_hours</a></code> | <code>typing.Union[int, float]</code> | The number of hours till which Kinesis Video will retain the data in the stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.deviceName">device_name</a></code> | <code>str</code> | The name of the device that is writing to the stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | AWS KMS key ID that Kinesis Video Streams uses to encrypt stream data. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.mediaType">media_type</a></code> | <code>str</code> | The media type of the stream. Consumers of the stream can use this information when processing the stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.name">name</a></code> | <code>str</code> | The name of the Kinesis Video stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.streamStorageConfiguration">stream_storage_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfiguration">KinesisvideoStreamStreamStorageConfiguration</a></code> | Configuration for the storage tier of the Kinesis Video Stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTags">KinesisvideoStreamTags</a>]</code> | An array of key-value pairs associated with the Kinesis Video Stream. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_retention_in_hours`<sup>Optional</sup> <a name="data_retention_in_hours" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.dataRetentionInHours"></a>

```python
data_retention_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of hours till which Kinesis Video will retain the data in the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#data_retention_in_hours KinesisvideoStream#data_retention_in_hours}

---

##### `device_name`<sup>Optional</sup> <a name="device_name" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

The name of the device that is writing to the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#device_name KinesisvideoStream#device_name}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

AWS KMS key ID that Kinesis Video Streams uses to encrypt stream data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#kms_key_id KinesisvideoStream#kms_key_id}

---

##### `media_type`<sup>Optional</sup> <a name="media_type" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.mediaType"></a>

```python
media_type: str
```

- *Type:* str

The media type of the stream. Consumers of the stream can use this information when processing the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#media_type KinesisvideoStream#media_type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Kinesis Video stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#name KinesisvideoStream#name}

---

##### `stream_storage_configuration`<sup>Optional</sup> <a name="stream_storage_configuration" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.streamStorageConfiguration"></a>

```python
stream_storage_configuration: KinesisvideoStreamStreamStorageConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfiguration">KinesisvideoStreamStreamStorageConfiguration</a>

Configuration for the storage tier of the Kinesis Video Stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#stream_storage_configuration KinesisvideoStream#stream_storage_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[KinesisvideoStreamTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTags">KinesisvideoStreamTags</a>]

An array of key-value pairs associated with the Kinesis Video Stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#tags KinesisvideoStream#tags}

---

### KinesisvideoStreamStreamStorageConfiguration <a name="KinesisvideoStreamStreamStorageConfiguration" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisvideo_stream

kinesisvideoStream.KinesisvideoStreamStreamStorageConfiguration(
  default_storage_tier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfiguration.property.defaultStorageTier">default_storage_tier</a></code> | <code>str</code> | The storage tier for the Kinesis Video Stream. Determines the storage class used for stream data. |

---

##### `default_storage_tier`<sup>Optional</sup> <a name="default_storage_tier" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfiguration.property.defaultStorageTier"></a>

```python
default_storage_tier: str
```

- *Type:* str

The storage tier for the Kinesis Video Stream. Determines the storage class used for stream data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#default_storage_tier KinesisvideoStream#default_storage_tier}

---

### KinesisvideoStreamTags <a name="KinesisvideoStreamTags" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTags.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisvideo_stream

kinesisvideoStream.KinesisvideoStreamTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#key KinesisvideoStream#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kinesisvideo_stream#value KinesisvideoStream#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisvideoStreamStreamStorageConfigurationOutputReference <a name="KinesisvideoStreamStreamStorageConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisvideo_stream

kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.resetDefaultStorageTier">reset_default_storage_tier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_storage_tier` <a name="reset_default_storage_tier" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.resetDefaultStorageTier"></a>

```python
def reset_default_storage_tier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.property.defaultStorageTierInput">default_storage_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.property.defaultStorageTier">default_storage_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfiguration">KinesisvideoStreamStreamStorageConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_storage_tier_input`<sup>Optional</sup> <a name="default_storage_tier_input" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.property.defaultStorageTierInput"></a>

```python
default_storage_tier_input: str
```

- *Type:* str

---

##### `default_storage_tier`<sup>Required</sup> <a name="default_storage_tier" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.property.defaultStorageTier"></a>

```python
default_storage_tier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisvideoStreamStreamStorageConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamStreamStorageConfiguration">KinesisvideoStreamStreamStorageConfiguration</a>

---


### KinesisvideoStreamTagsList <a name="KinesisvideoStreamTagsList" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisvideo_stream

kinesisvideoStream.KinesisvideoStreamTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KinesisvideoStreamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTags">KinesisvideoStreamTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KinesisvideoStreamTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTags">KinesisvideoStreamTags</a>]

---


### KinesisvideoStreamTagsOutputReference <a name="KinesisvideoStreamTagsOutputReference" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisvideo_stream

kinesisvideoStream.KinesisvideoStreamTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTags">KinesisvideoStreamTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisvideoStreamTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisvideoStream.KinesisvideoStreamTags">KinesisvideoStreamTags</a>

---



