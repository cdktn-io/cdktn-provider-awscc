# `connectInstanceStorageConfig` Submodule <a name="`connectInstanceStorageConfig` Submodule" id="@cdktn/provider-awscc.connectInstanceStorageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectInstanceStorageConfig <a name="ConnectInstanceStorageConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config awscc_connect_instance_storage_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance_storage_config

connectInstanceStorageConfig.ConnectInstanceStorageConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_arn: str,
  resource_type: str,
  storage_type: str,
  kinesis_firehose_config: ConnectInstanceStorageConfigKinesisFirehoseConfig = None,
  kinesis_stream_config: ConnectInstanceStorageConfigKinesisStreamConfig = None,
  kinesis_video_stream_config: ConnectInstanceStorageConfigKinesisVideoStreamConfig = None,
  s3_config: ConnectInstanceStorageConfigS3Config = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | Connect Instance ID with which the storage config will be associated. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Specifies the type of storage resource available for the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.storageType">storage_type</a></code> | <code>str</code> | Specifies the storage type to be associated with the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.kinesisFirehoseConfig">kinesis_firehose_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_firehose_config ConnectInstanceStorageConfig#kinesis_firehose_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.kinesisStreamConfig">kinesis_stream_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_stream_config ConnectInstanceStorageConfig#kinesis_stream_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.kinesisVideoStreamConfig">kinesis_video_stream_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_video_stream_config ConnectInstanceStorageConfig#kinesis_video_stream_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.s3Config">s3_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#s3_config ConnectInstanceStorageConfig#s3_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.instanceArn"></a>

- *Type:* str

Connect Instance ID with which the storage config will be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#instance_arn ConnectInstanceStorageConfig#instance_arn}

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.resourceType"></a>

- *Type:* str

Specifies the type of storage resource available for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#resource_type ConnectInstanceStorageConfig#resource_type}

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.storageType"></a>

- *Type:* str

Specifies the storage type to be associated with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#storage_type ConnectInstanceStorageConfig#storage_type}

---

##### `kinesis_firehose_config`<sup>Optional</sup> <a name="kinesis_firehose_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.kinesisFirehoseConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_firehose_config ConnectInstanceStorageConfig#kinesis_firehose_config}.

---

##### `kinesis_stream_config`<sup>Optional</sup> <a name="kinesis_stream_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.kinesisStreamConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_stream_config ConnectInstanceStorageConfig#kinesis_stream_config}.

---

##### `kinesis_video_stream_config`<sup>Optional</sup> <a name="kinesis_video_stream_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.kinesisVideoStreamConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_video_stream_config ConnectInstanceStorageConfig#kinesis_video_stream_config}.

---

##### `s3_config`<sup>Optional</sup> <a name="s3_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.s3Config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#s3_config ConnectInstanceStorageConfig#s3_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisFirehoseConfig">put_kinesis_firehose_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisStreamConfig">put_kinesis_stream_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisVideoStreamConfig">put_kinesis_video_stream_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putS3Config">put_s3_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisFirehoseConfig">reset_kinesis_firehose_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisStreamConfig">reset_kinesis_stream_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisVideoStreamConfig">reset_kinesis_video_stream_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetS3Config">reset_s3_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_kinesis_firehose_config` <a name="put_kinesis_firehose_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisFirehoseConfig"></a>

```python
def put_kinesis_firehose_config(
  firehose_arn: str = None
) -> None
```

###### `firehose_arn`<sup>Optional</sup> <a name="firehose_arn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisFirehoseConfig.parameter.firehoseArn"></a>

- *Type:* str

An ARN is a unique AWS resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#firehose_arn ConnectInstanceStorageConfig#firehose_arn}

---

##### `put_kinesis_stream_config` <a name="put_kinesis_stream_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisStreamConfig"></a>

```python
def put_kinesis_stream_config(
  stream_arn: str = None
) -> None
```

###### `stream_arn`<sup>Optional</sup> <a name="stream_arn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisStreamConfig.parameter.streamArn"></a>

- *Type:* str

An ARN is a unique AWS resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#stream_arn ConnectInstanceStorageConfig#stream_arn}

---

##### `put_kinesis_video_stream_config` <a name="put_kinesis_video_stream_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisVideoStreamConfig"></a>

```python
def put_kinesis_video_stream_config(
  encryption_config: ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig = None,
  prefix: str = None,
  retention_period_hours: typing.Union[int, float] = None
) -> None
```

###### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisVideoStreamConfig.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisVideoStreamConfig.parameter.prefix"></a>

- *Type:* str

Prefixes are used to infer logical hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#prefix ConnectInstanceStorageConfig#prefix}

---

###### `retention_period_hours`<sup>Optional</sup> <a name="retention_period_hours" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisVideoStreamConfig.parameter.retentionPeriodHours"></a>

- *Type:* typing.Union[int, float]

Number of hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#retention_period_hours ConnectInstanceStorageConfig#retention_period_hours}

---

##### `put_s3_config` <a name="put_s3_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putS3Config"></a>

```python
def put_s3_config(
  bucket_name: str = None,
  bucket_prefix: str = None,
  encryption_config: ConnectInstanceStorageConfigS3ConfigEncryptionConfig = None
) -> None
```

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putS3Config.parameter.bucketName"></a>

- *Type:* str

A name for the S3 Bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#bucket_name ConnectInstanceStorageConfig#bucket_name}

---

###### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putS3Config.parameter.bucketPrefix"></a>

- *Type:* str

Prefixes are used to infer logical hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#bucket_prefix ConnectInstanceStorageConfig#bucket_prefix}

---

###### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putS3Config.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}.

---

##### `reset_kinesis_firehose_config` <a name="reset_kinesis_firehose_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisFirehoseConfig"></a>

```python
def reset_kinesis_firehose_config() -> None
```

##### `reset_kinesis_stream_config` <a name="reset_kinesis_stream_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisStreamConfig"></a>

```python
def reset_kinesis_stream_config() -> None
```

##### `reset_kinesis_video_stream_config` <a name="reset_kinesis_video_stream_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisVideoStreamConfig"></a>

```python
def reset_kinesis_video_stream_config() -> None
```

##### `reset_s3_config` <a name="reset_s3_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetS3Config"></a>

```python
def reset_s3_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConnectInstanceStorageConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import connect_instance_storage_config

connectInstanceStorageConfig.ConnectInstanceStorageConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import connect_instance_storage_config

connectInstanceStorageConfig.ConnectInstanceStorageConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource"></a>

```python
from cdktn_provider_awscc import connect_instance_storage_config

connectInstanceStorageConfig.ConnectInstanceStorageConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import connect_instance_storage_config

connectInstanceStorageConfig.ConnectInstanceStorageConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConnectInstanceStorageConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConnectInstanceStorageConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConnectInstanceStorageConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectInstanceStorageConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.associationId">association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisFirehoseConfig">kinesis_firehose_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference">ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisStreamConfig">kinesis_stream_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference">ConnectInstanceStorageConfigKinesisStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisVideoStreamConfig">kinesis_video_stream_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference">ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.s3Config">s3_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference">ConnectInstanceStorageConfigS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisFirehoseConfigInput">kinesis_firehose_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisStreamConfigInput">kinesis_stream_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisVideoStreamConfigInput">kinesis_video_stream_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.s3ConfigInput">s3_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `association_id`<sup>Required</sup> <a name="association_id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kinesis_firehose_config`<sup>Required</sup> <a name="kinesis_firehose_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisFirehoseConfig"></a>

```python
kinesis_firehose_config: ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference">ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference</a>

---

##### `kinesis_stream_config`<sup>Required</sup> <a name="kinesis_stream_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisStreamConfig"></a>

```python
kinesis_stream_config: ConnectInstanceStorageConfigKinesisStreamConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference">ConnectInstanceStorageConfigKinesisStreamConfigOutputReference</a>

---

##### `kinesis_video_stream_config`<sup>Required</sup> <a name="kinesis_video_stream_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisVideoStreamConfig"></a>

```python
kinesis_video_stream_config: ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference">ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference</a>

---

##### `s3_config`<sup>Required</sup> <a name="s3_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.s3Config"></a>

```python
s3_config: ConnectInstanceStorageConfigS3ConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference">ConnectInstanceStorageConfigS3ConfigOutputReference</a>

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `kinesis_firehose_config_input`<sup>Optional</sup> <a name="kinesis_firehose_config_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisFirehoseConfigInput"></a>

```python
kinesis_firehose_config_input: IResolvable | ConnectInstanceStorageConfigKinesisFirehoseConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a>

---

##### `kinesis_stream_config_input`<sup>Optional</sup> <a name="kinesis_stream_config_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisStreamConfigInput"></a>

```python
kinesis_stream_config_input: IResolvable | ConnectInstanceStorageConfigKinesisStreamConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a>

---

##### `kinesis_video_stream_config_input`<sup>Optional</sup> <a name="kinesis_video_stream_config_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisVideoStreamConfigInput"></a>

```python
kinesis_video_stream_config_input: IResolvable | ConnectInstanceStorageConfigKinesisVideoStreamConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a>

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `s3_config_input`<sup>Optional</sup> <a name="s3_config_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.s3ConfigInput"></a>

```python
s3_config_input: IResolvable | ConnectInstanceStorageConfigS3Config
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a>

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectInstanceStorageConfigConfig <a name="ConnectInstanceStorageConfigConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance_storage_config

connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_arn: str,
  resource_type: str,
  storage_type: str,
  kinesis_firehose_config: ConnectInstanceStorageConfigKinesisFirehoseConfig = None,
  kinesis_stream_config: ConnectInstanceStorageConfigKinesisStreamConfig = None,
  kinesis_video_stream_config: ConnectInstanceStorageConfigKinesisVideoStreamConfig = None,
  s3_config: ConnectInstanceStorageConfigS3Config = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | Connect Instance ID with which the storage config will be associated. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Specifies the type of storage resource available for the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.storageType">storage_type</a></code> | <code>str</code> | Specifies the storage type to be associated with the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisFirehoseConfig">kinesis_firehose_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_firehose_config ConnectInstanceStorageConfig#kinesis_firehose_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisStreamConfig">kinesis_stream_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_stream_config ConnectInstanceStorageConfig#kinesis_stream_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisVideoStreamConfig">kinesis_video_stream_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_video_stream_config ConnectInstanceStorageConfig#kinesis_video_stream_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.s3Config">s3_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#s3_config ConnectInstanceStorageConfig#s3_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

Connect Instance ID with which the storage config will be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#instance_arn ConnectInstanceStorageConfig#instance_arn}

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Specifies the type of storage resource available for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#resource_type ConnectInstanceStorageConfig#resource_type}

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

Specifies the storage type to be associated with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#storage_type ConnectInstanceStorageConfig#storage_type}

---

##### `kinesis_firehose_config`<sup>Optional</sup> <a name="kinesis_firehose_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisFirehoseConfig"></a>

```python
kinesis_firehose_config: ConnectInstanceStorageConfigKinesisFirehoseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_firehose_config ConnectInstanceStorageConfig#kinesis_firehose_config}.

---

##### `kinesis_stream_config`<sup>Optional</sup> <a name="kinesis_stream_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisStreamConfig"></a>

```python
kinesis_stream_config: ConnectInstanceStorageConfigKinesisStreamConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_stream_config ConnectInstanceStorageConfig#kinesis_stream_config}.

---

##### `kinesis_video_stream_config`<sup>Optional</sup> <a name="kinesis_video_stream_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisVideoStreamConfig"></a>

```python
kinesis_video_stream_config: ConnectInstanceStorageConfigKinesisVideoStreamConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_video_stream_config ConnectInstanceStorageConfig#kinesis_video_stream_config}.

---

##### `s3_config`<sup>Optional</sup> <a name="s3_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.s3Config"></a>

```python
s3_config: ConnectInstanceStorageConfigS3Config
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#s3_config ConnectInstanceStorageConfig#s3_config}.

---

### ConnectInstanceStorageConfigKinesisFirehoseConfig <a name="ConnectInstanceStorageConfigKinesisFirehoseConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance_storage_config

connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig(
  firehose_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig.property.firehoseArn">firehose_arn</a></code> | <code>str</code> | An ARN is a unique AWS resource identifier. |

---

##### `firehose_arn`<sup>Optional</sup> <a name="firehose_arn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig.property.firehoseArn"></a>

```python
firehose_arn: str
```

- *Type:* str

An ARN is a unique AWS resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#firehose_arn ConnectInstanceStorageConfig#firehose_arn}

---

### ConnectInstanceStorageConfigKinesisStreamConfig <a name="ConnectInstanceStorageConfigKinesisStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance_storage_config

connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig(
  stream_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig.property.streamArn">stream_arn</a></code> | <code>str</code> | An ARN is a unique AWS resource identifier. |

---

##### `stream_arn`<sup>Optional</sup> <a name="stream_arn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

An ARN is a unique AWS resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#stream_arn ConnectInstanceStorageConfig#stream_arn}

---

### ConnectInstanceStorageConfigKinesisVideoStreamConfig <a name="ConnectInstanceStorageConfigKinesisVideoStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance_storage_config

connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig(
  encryption_config: ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig = None,
  prefix: str = None,
  retention_period_hours: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.prefix">prefix</a></code> | <code>str</code> | Prefixes are used to infer logical hierarchy. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.retentionPeriodHours">retention_period_hours</a></code> | <code>typing.Union[int, float]</code> | Number of hours. |

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.encryptionConfig"></a>

```python
encryption_config: ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Prefixes are used to infer logical hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#prefix ConnectInstanceStorageConfig#prefix}

---

##### `retention_period_hours`<sup>Optional</sup> <a name="retention_period_hours" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.retentionPeriodHours"></a>

```python
retention_period_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#retention_period_hours ConnectInstanceStorageConfig#retention_period_hours}

---

### ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig <a name="ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance_storage_config

connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig(
  encryption_type: str = None,
  key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.encryptionType">encryption_type</a></code> | <code>str</code> | Specifies default encryption using AWS KMS-Managed Keys. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.keyId">key_id</a></code> | <code>str</code> | Specifies the encryption key id. |

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

Specifies default encryption using AWS KMS-Managed Keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

Specifies the encryption key id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}

---

### ConnectInstanceStorageConfigS3Config <a name="ConnectInstanceStorageConfigS3Config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance_storage_config

connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config(
  bucket_name: str = None,
  bucket_prefix: str = None,
  encryption_config: ConnectInstanceStorageConfigS3ConfigEncryptionConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.bucketName">bucket_name</a></code> | <code>str</code> | A name for the S3 Bucket. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | Prefixes are used to infer logical hierarchy. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

A name for the S3 Bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#bucket_name ConnectInstanceStorageConfig#bucket_name}

---

##### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

Prefixes are used to infer logical hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#bucket_prefix ConnectInstanceStorageConfig#bucket_prefix}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.encryptionConfig"></a>

```python
encryption_config: ConnectInstanceStorageConfigS3ConfigEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}.

---

### ConnectInstanceStorageConfigS3ConfigEncryptionConfig <a name="ConnectInstanceStorageConfigS3ConfigEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance_storage_config

connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig(
  encryption_type: str = None,
  key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.property.encryptionType">encryption_type</a></code> | <code>str</code> | Specifies default encryption using AWS KMS-Managed Keys. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.property.keyId">key_id</a></code> | <code>str</code> | Specifies the encryption key id. |

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

Specifies default encryption using AWS KMS-Managed Keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

Specifies the encryption key id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference <a name="ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance_storage_config

connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resetFirehoseArn">reset_firehose_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_firehose_arn` <a name="reset_firehose_arn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resetFirehoseArn"></a>

```python
def reset_firehose_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArnInput">firehose_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn">firehose_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `firehose_arn_input`<sup>Optional</sup> <a name="firehose_arn_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArnInput"></a>

```python
firehose_arn_input: str
```

- *Type:* str

---

##### `firehose_arn`<sup>Required</sup> <a name="firehose_arn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn"></a>

```python
firehose_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectInstanceStorageConfigKinesisFirehoseConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a>

---


### ConnectInstanceStorageConfigKinesisStreamConfigOutputReference <a name="ConnectInstanceStorageConfigKinesisStreamConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance_storage_config

connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resetStreamArn">reset_stream_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_stream_arn` <a name="reset_stream_arn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resetStreamArn"></a>

```python
def reset_stream_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArnInput">stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stream_arn_input`<sup>Optional</sup> <a name="stream_arn_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArnInput"></a>

```python
stream_arn_input: str
```

- *Type:* str

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectInstanceStorageConfigKinesisStreamConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a>

---


### ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference <a name="ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance_storage_config

connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resetKeyId">reset_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_key_id` <a name="reset_key_id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resetKeyId"></a>

```python
def reset_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---


### ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference <a name="ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance_storage_config

connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig">put_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetEncryptionConfig">reset_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetRetentionPeriodHours">reset_retention_period_hours</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption_config` <a name="put_encryption_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig"></a>

```python
def put_encryption_config(
  encryption_type: str = None,
  key_id: str = None
) -> None
```

###### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig.parameter.encryptionType"></a>

- *Type:* str

Specifies default encryption using AWS KMS-Managed Keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}

---

###### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig.parameter.keyId"></a>

- *Type:* str

Specifies the encryption key id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}

---

##### `reset_encryption_config` <a name="reset_encryption_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetEncryptionConfig"></a>

```python
def reset_encryption_config() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_retention_period_hours` <a name="reset_retention_period_hours" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetRetentionPeriodHours"></a>

```python
def reset_retention_period_hours() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfigInput">encryption_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHoursInput">retention_period_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours">retention_period_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig"></a>

```python
encryption_config: ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference</a>

---

##### `encryption_config_input`<sup>Optional</sup> <a name="encryption_config_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfigInput"></a>

```python
encryption_config_input: IResolvable | ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `retention_period_hours_input`<sup>Optional</sup> <a name="retention_period_hours_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHoursInput"></a>

```python
retention_period_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `retention_period_hours`<sup>Required</sup> <a name="retention_period_hours" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours"></a>

```python
retention_period_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectInstanceStorageConfigKinesisVideoStreamConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a>

---


### ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference <a name="ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance_storage_config

connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resetKeyId">reset_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_key_id` <a name="reset_key_id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resetKeyId"></a>

```python
def reset_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectInstanceStorageConfigS3ConfigEncryptionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a>

---


### ConnectInstanceStorageConfigS3ConfigOutputReference <a name="ConnectInstanceStorageConfigS3ConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance_storage_config

connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.putEncryptionConfig">put_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetBucketPrefix">reset_bucket_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetEncryptionConfig">reset_encryption_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption_config` <a name="put_encryption_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.putEncryptionConfig"></a>

```python
def put_encryption_config(
  encryption_type: str = None,
  key_id: str = None
) -> None
```

###### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.putEncryptionConfig.parameter.encryptionType"></a>

- *Type:* str

Specifies default encryption using AWS KMS-Managed Keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}

---

###### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.putEncryptionConfig.parameter.keyId"></a>

- *Type:* str

Specifies the encryption key id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}

---

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_bucket_prefix` <a name="reset_bucket_prefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetBucketPrefix"></a>

```python
def reset_bucket_prefix() -> None
```

##### `reset_encryption_config` <a name="reset_encryption_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetEncryptionConfig"></a>

```python
def reset_encryption_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefixInput">bucket_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfigInput">encryption_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfig"></a>

```python
encryption_config: ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference</a>

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_prefix_input`<sup>Optional</sup> <a name="bucket_prefix_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefixInput"></a>

```python
bucket_prefix_input: str
```

- *Type:* str

---

##### `encryption_config_input`<sup>Optional</sup> <a name="encryption_config_input" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfigInput"></a>

```python
encryption_config_input: IResolvable | ConnectInstanceStorageConfigS3ConfigEncryptionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a>

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_prefix`<sup>Required</sup> <a name="bucket_prefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectInstanceStorageConfigS3Config
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a>

---



