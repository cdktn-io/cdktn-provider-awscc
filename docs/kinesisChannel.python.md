# `kinesisChannel` Submodule <a name="`kinesisChannel` Submodule" id="@cdktn/provider-awscc.kinesisChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisChannel <a name="KinesisChannel" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel awscc_kinesis_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannel(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  channel_name: str,
  service_execution_role_arn: str,
  stream_configuration_list: IResolvable | typing.List[KinesisChannelStreamConfigurationListStruct],
  encryption_configuration: KinesisChannelEncryptionConfiguration = None,
  logging_configuration: KinesisChannelLoggingConfiguration = None,
  s3_destination_configuration: KinesisChannelS3DestinationConfiguration = None,
  s3_tables_destination_configuration: KinesisChannelS3TablesDestinationConfiguration = None,
  tags: IResolvable | typing.List[KinesisChannelTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.channelName">channel_name</a></code> | <code>str</code> | The name of the channel. The name's uniqueness is scoped per AWS account and region. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | The ARN of the IAM role that the channel assumes to read from the source stream, deliver records to the destination, and (when enabled) write CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.streamConfigurationList">stream_configuration_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>]</code> | List of stream configurations associated with the channel. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a></code> | Server-side encryption configuration for data at rest. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a></code> | Configuration for delivering channel operational logs. Defaults to CloudWatch Logs disabled. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.s3DestinationConfiguration">s3_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a></code> | Configuration for delivery to a vanilla S3 bucket destination. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.s3TablesDestinationConfiguration">s3_tables_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a></code> | Configuration for delivery to S3 Tables destinations. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>]</code> | An arbitrary set of tags (key-value pairs) to associate with the Kinesis channel. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.channelName"></a>

- *Type:* str

The name of the channel. The name's uniqueness is scoped per AWS account and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#channel_name KinesisChannel#channel_name}

---

##### `service_execution_role_arn`<sup>Required</sup> <a name="service_execution_role_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.serviceExecutionRoleArn"></a>

- *Type:* str

The ARN of the IAM role that the channel assumes to read from the source stream, deliver records to the destination, and (when enabled) write CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#service_execution_role_arn KinesisChannel#service_execution_role_arn}

---

##### `stream_configuration_list`<sup>Required</sup> <a name="stream_configuration_list" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.streamConfigurationList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>]

List of stream configurations associated with the channel.

v1 supports a single element; the list shape allows future extensibility to fan in from multiple streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#stream_configuration_list KinesisChannel#stream_configuration_list}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a>

Server-side encryption configuration for data at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#encryption_configuration KinesisChannel#encryption_configuration}

---

##### `logging_configuration`<sup>Optional</sup> <a name="logging_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.loggingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a>

Configuration for delivering channel operational logs. Defaults to CloudWatch Logs disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#logging_configuration KinesisChannel#logging_configuration}

---

##### `s3_destination_configuration`<sup>Optional</sup> <a name="s3_destination_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.s3DestinationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a>

Configuration for delivery to a vanilla S3 bucket destination. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#s3_destination_configuration KinesisChannel#s3_destination_configuration}

---

##### `s3_tables_destination_configuration`<sup>Optional</sup> <a name="s3_tables_destination_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.s3TablesDestinationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a>

Configuration for delivery to S3 Tables destinations. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#s3_tables_destination_configuration KinesisChannel#s3_tables_destination_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>]

An arbitrary set of tags (key-value pairs) to associate with the Kinesis channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#tags KinesisChannel#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putLoggingConfiguration">put_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3DestinationConfiguration">put_s3_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3TablesDestinationConfiguration">put_s3_tables_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putStreamConfigurationList">put_stream_configuration_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetLoggingConfiguration">reset_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetS3DestinationConfiguration">reset_s3_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetS3TablesDestinationConfiguration">reset_s3_tables_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  encryption_type: str = None,
  key_id: str = None
) -> None
```

###### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putEncryptionConfiguration.parameter.encryptionType"></a>

- *Type:* str

The encryption type. KMS is the only supported value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#encryption_type KinesisChannel#encryption_type}

---

###### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putEncryptionConfiguration.parameter.keyId"></a>

- *Type:* str

The customer-managed AWS KMS key.

Accepts a key GUID, key ARN, alias ARN, or alias name prefixed by 'alias/'. The Kinesis Data Streams managed alias 'aws/kinesis' is not accepted - the key must be customer-owned so it can also be used by readers of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#key_id KinesisChannel#key_id}

---

##### `put_logging_configuration` <a name="put_logging_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putLoggingConfiguration"></a>

```python
def put_logging_configuration(
  cloudwatch_logs: KinesisChannelLoggingConfigurationCloudwatchLogs = None
) -> None
```

###### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putLoggingConfiguration.parameter.cloudwatchLogs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs">KinesisChannelLoggingConfigurationCloudwatchLogs</a>

CloudWatch Logs configuration block. When provided, controls whether and where the channel writes operational logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#cloudwatch_logs KinesisChannel#cloudwatch_logs}

---

##### `put_s3_destination_configuration` <a name="put_s3_destination_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3DestinationConfiguration"></a>

```python
def put_s3_destination_configuration(
  data_freshness_in_seconds: typing.Union[int, float] = None,
  dead_letter_queue_s3_configuration: KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration = None,
  storage_configuration: KinesisChannelS3DestinationConfigurationStorageConfiguration = None
) -> None
```

###### `data_freshness_in_seconds`<sup>Optional</sup> <a name="data_freshness_in_seconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3DestinationConfiguration.parameter.dataFreshnessInSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum time in seconds the channel buffers records before delivery if the minimum target file size is not reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#data_freshness_in_seconds KinesisChannel#data_freshness_in_seconds}

---

###### `dead_letter_queue_s3_configuration`<sup>Optional</sup> <a name="dead_letter_queue_s3_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3DestinationConfiguration.parameter.deadLetterQueueS3Configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a>

Optional dead-letter queue (DLQ) configuration for records that cannot be delivered to the destination.

When omitted, the service auto-fills using the storage BucketARN with an error prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#dead_letter_queue_s3_configuration KinesisChannel#dead_letter_queue_s3_configuration}

---

###### `storage_configuration`<sup>Optional</sup> <a name="storage_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3DestinationConfiguration.parameter.storageConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration">KinesisChannelS3DestinationConfigurationStorageConfiguration</a>

S3 storage configuration including the destination bucket, output key template, storage class, and compression type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#storage_configuration KinesisChannel#storage_configuration}

---

##### `put_s3_tables_destination_configuration` <a name="put_s3_tables_destination_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3TablesDestinationConfiguration"></a>

```python
def put_s3_tables_destination_configuration(
  data_freshness_in_seconds: typing.Union[int, float] = None,
  dead_letter_queue_s3_configuration: KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration = None,
  s3_tables_configuration_list: IResolvable | typing.List[KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct] = None
) -> None
```

###### `data_freshness_in_seconds`<sup>Optional</sup> <a name="data_freshness_in_seconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3TablesDestinationConfiguration.parameter.dataFreshnessInSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum time in seconds the channel buffers records before delivery if the minimum target file size is not reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#data_freshness_in_seconds KinesisChannel#data_freshness_in_seconds}

---

###### `dead_letter_queue_s3_configuration`<sup>Optional</sup> <a name="dead_letter_queue_s3_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3TablesDestinationConfiguration.parameter.deadLetterQueueS3Configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a>

The dead-letter queue (DLQ) configuration for records that cannot be delivered to the S3 Tables destination.

Required for S3 Tables: there is no safe fallback because S3 Tables metadata writes are critical-path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#dead_letter_queue_s3_configuration KinesisChannel#dead_letter_queue_s3_configuration}

---

###### `s3_tables_configuration_list`<sup>Optional</sup> <a name="s3_tables_configuration_list" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3TablesDestinationConfiguration.parameter.s3TablesConfigurationList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>]

The list of S3 Tables destinations.

v1 supports a single element; the list shape allows future extensibility to fan out to multiple tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#s3_tables_configuration_list KinesisChannel#s3_tables_configuration_list}

---

##### `put_stream_configuration_list` <a name="put_stream_configuration_list" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putStreamConfigurationList"></a>

```python
def put_stream_configuration_list(
  value: IResolvable | typing.List[KinesisChannelStreamConfigurationListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putStreamConfigurationList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[KinesisChannelTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>]

---

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_logging_configuration` <a name="reset_logging_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetLoggingConfiguration"></a>

```python
def reset_logging_configuration() -> None
```

##### `reset_s3_destination_configuration` <a name="reset_s3_destination_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetS3DestinationConfiguration"></a>

```python
def reset_s3_destination_configuration() -> None
```

##### `reset_s3_tables_destination_configuration` <a name="reset_s3_tables_destination_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetS3TablesDestinationConfiguration"></a>

```python
def reset_s3_tables_destination_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KinesisChannel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isConstruct"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isTerraformElement"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isTerraformResource"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KinesisChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KinesisChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KinesisChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KinesisChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelArn">channel_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelCreationTimestamp">channel_creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelId">channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelStatus">channel_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference">KinesisChannelEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference">KinesisChannelLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3DestinationConfiguration">s3_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference">KinesisChannelS3DestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3TablesDestinationConfiguration">s3_tables_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference">KinesisChannelS3TablesDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.streamConfigurationList">stream_configuration_list</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList">KinesisChannelStreamConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList">KinesisChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelNameInput">channel_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.loggingConfigurationInput">logging_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3DestinationConfigurationInput">s3_destination_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3TablesDestinationConfigurationInput">s3_tables_destination_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.serviceExecutionRoleArnInput">service_execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.streamConfigurationListInput">stream_configuration_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_arn`<sup>Required</sup> <a name="channel_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelArn"></a>

```python
channel_arn: str
```

- *Type:* str

---

##### `channel_creation_timestamp`<sup>Required</sup> <a name="channel_creation_timestamp" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelCreationTimestamp"></a>

```python
channel_creation_timestamp: str
```

- *Type:* str

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

---

##### `channel_status`<sup>Required</sup> <a name="channel_status" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelStatus"></a>

```python
channel_status: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.encryptionConfiguration"></a>

```python
encryption_configuration: KinesisChannelEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference">KinesisChannelEncryptionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logging_configuration`<sup>Required</sup> <a name="logging_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.loggingConfiguration"></a>

```python
logging_configuration: KinesisChannelLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference">KinesisChannelLoggingConfigurationOutputReference</a>

---

##### `s3_destination_configuration`<sup>Required</sup> <a name="s3_destination_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3DestinationConfiguration"></a>

```python
s3_destination_configuration: KinesisChannelS3DestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference">KinesisChannelS3DestinationConfigurationOutputReference</a>

---

##### `s3_tables_destination_configuration`<sup>Required</sup> <a name="s3_tables_destination_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3TablesDestinationConfiguration"></a>

```python
s3_tables_destination_configuration: KinesisChannelS3TablesDestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference">KinesisChannelS3TablesDestinationConfigurationOutputReference</a>

---

##### `stream_configuration_list`<sup>Required</sup> <a name="stream_configuration_list" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.streamConfigurationList"></a>

```python
stream_configuration_list: KinesisChannelStreamConfigurationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList">KinesisChannelStreamConfigurationListStructList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.tags"></a>

```python
tags: KinesisChannelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList">KinesisChannelTagsList</a>

---

##### `channel_name_input`<sup>Optional</sup> <a name="channel_name_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelNameInput"></a>

```python
channel_name_input: str
```

- *Type:* str

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: IResolvable | KinesisChannelEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a>

---

##### `logging_configuration_input`<sup>Optional</sup> <a name="logging_configuration_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.loggingConfigurationInput"></a>

```python
logging_configuration_input: IResolvable | KinesisChannelLoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a>

---

##### `s3_destination_configuration_input`<sup>Optional</sup> <a name="s3_destination_configuration_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3DestinationConfigurationInput"></a>

```python
s3_destination_configuration_input: IResolvable | KinesisChannelS3DestinationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a>

---

##### `s3_tables_destination_configuration_input`<sup>Optional</sup> <a name="s3_tables_destination_configuration_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3TablesDestinationConfigurationInput"></a>

```python
s3_tables_destination_configuration_input: IResolvable | KinesisChannelS3TablesDestinationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a>

---

##### `service_execution_role_arn_input`<sup>Optional</sup> <a name="service_execution_role_arn_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.serviceExecutionRoleArnInput"></a>

```python
service_execution_role_arn_input: str
```

- *Type:* str

---

##### `stream_configuration_list_input`<sup>Optional</sup> <a name="stream_configuration_list_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.streamConfigurationListInput"></a>

```python
stream_configuration_list_input: IResolvable | typing.List[KinesisChannelStreamConfigurationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[KinesisChannelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>]

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `service_execution_role_arn`<sup>Required</sup> <a name="service_execution_role_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.serviceExecutionRoleArn"></a>

```python
service_execution_role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisChannelConfig <a name="KinesisChannelConfig" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  channel_name: str,
  service_execution_role_arn: str,
  stream_configuration_list: IResolvable | typing.List[KinesisChannelStreamConfigurationListStruct],
  encryption_configuration: KinesisChannelEncryptionConfiguration = None,
  logging_configuration: KinesisChannelLoggingConfiguration = None,
  s3_destination_configuration: KinesisChannelS3DestinationConfiguration = None,
  s3_tables_destination_configuration: KinesisChannelS3TablesDestinationConfiguration = None,
  tags: IResolvable | typing.List[KinesisChannelTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.channelName">channel_name</a></code> | <code>str</code> | The name of the channel. The name's uniqueness is scoped per AWS account and region. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | The ARN of the IAM role that the channel assumes to read from the source stream, deliver records to the destination, and (when enabled) write CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.streamConfigurationList">stream_configuration_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>]</code> | List of stream configurations associated with the channel. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a></code> | Server-side encryption configuration for data at rest. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a></code> | Configuration for delivering channel operational logs. Defaults to CloudWatch Logs disabled. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.s3DestinationConfiguration">s3_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a></code> | Configuration for delivery to a vanilla S3 bucket destination. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.s3TablesDestinationConfiguration">s3_tables_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a></code> | Configuration for delivery to S3 Tables destinations. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>]</code> | An arbitrary set of tags (key-value pairs) to associate with the Kinesis channel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

The name of the channel. The name's uniqueness is scoped per AWS account and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#channel_name KinesisChannel#channel_name}

---

##### `service_execution_role_arn`<sup>Required</sup> <a name="service_execution_role_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.serviceExecutionRoleArn"></a>

```python
service_execution_role_arn: str
```

- *Type:* str

The ARN of the IAM role that the channel assumes to read from the source stream, deliver records to the destination, and (when enabled) write CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#service_execution_role_arn KinesisChannel#service_execution_role_arn}

---

##### `stream_configuration_list`<sup>Required</sup> <a name="stream_configuration_list" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.streamConfigurationList"></a>

```python
stream_configuration_list: IResolvable | typing.List[KinesisChannelStreamConfigurationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>]

List of stream configurations associated with the channel.

v1 supports a single element; the list shape allows future extensibility to fan in from multiple streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#stream_configuration_list KinesisChannel#stream_configuration_list}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: KinesisChannelEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a>

Server-side encryption configuration for data at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#encryption_configuration KinesisChannel#encryption_configuration}

---

##### `logging_configuration`<sup>Optional</sup> <a name="logging_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.loggingConfiguration"></a>

```python
logging_configuration: KinesisChannelLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a>

Configuration for delivering channel operational logs. Defaults to CloudWatch Logs disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#logging_configuration KinesisChannel#logging_configuration}

---

##### `s3_destination_configuration`<sup>Optional</sup> <a name="s3_destination_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.s3DestinationConfiguration"></a>

```python
s3_destination_configuration: KinesisChannelS3DestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a>

Configuration for delivery to a vanilla S3 bucket destination. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#s3_destination_configuration KinesisChannel#s3_destination_configuration}

---

##### `s3_tables_destination_configuration`<sup>Optional</sup> <a name="s3_tables_destination_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.s3TablesDestinationConfiguration"></a>

```python
s3_tables_destination_configuration: KinesisChannelS3TablesDestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a>

Configuration for delivery to S3 Tables destinations. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#s3_tables_destination_configuration KinesisChannel#s3_tables_destination_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[KinesisChannelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>]

An arbitrary set of tags (key-value pairs) to associate with the Kinesis channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#tags KinesisChannel#tags}

---

### KinesisChannelEncryptionConfiguration <a name="KinesisChannelEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelEncryptionConfiguration(
  encryption_type: str = None,
  key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration.property.encryptionType">encryption_type</a></code> | <code>str</code> | The encryption type. KMS is the only supported value. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration.property.keyId">key_id</a></code> | <code>str</code> | The customer-managed AWS KMS key. |

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

The encryption type. KMS is the only supported value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#encryption_type KinesisChannel#encryption_type}

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

The customer-managed AWS KMS key.

Accepts a key GUID, key ARN, alias ARN, or alias name prefixed by 'alias/'. The Kinesis Data Streams managed alias 'aws/kinesis' is not accepted - the key must be customer-owned so it can also be used by readers of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#key_id KinesisChannel#key_id}

---

### KinesisChannelLoggingConfiguration <a name="KinesisChannelLoggingConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelLoggingConfiguration(
  cloudwatch_logs: KinesisChannelLoggingConfigurationCloudwatchLogs = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs">KinesisChannelLoggingConfigurationCloudwatchLogs</a></code> | CloudWatch Logs configuration block. When provided, controls whether and where the channel writes operational logs. |

---

##### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: KinesisChannelLoggingConfigurationCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs">KinesisChannelLoggingConfigurationCloudwatchLogs</a>

CloudWatch Logs configuration block. When provided, controls whether and where the channel writes operational logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#cloudwatch_logs KinesisChannel#cloudwatch_logs}

---

### KinesisChannelLoggingConfigurationCloudwatchLogs <a name="KinesisChannelLoggingConfigurationCloudwatchLogs" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs(
  enabled: bool | IResolvable = None,
  log_group_name: str = None,
  log_stream_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether CloudWatch Logs delivery is enabled. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.property.logGroupName">log_group_name</a></code> | <code>str</code> | The CloudWatch log group name. When Enabled is true and LogGroupName is omitted, the service uses the default '/aws/kinesis/<channelName>/<channelId>'. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.property.logStreamName">log_stream_name</a></code> | <code>str</code> | The CloudWatch log stream name. Defaults to the literal string 'DestinationDelivery' when omitted. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether CloudWatch Logs delivery is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#enabled KinesisChannel#enabled}

---

##### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

The CloudWatch log group name. When Enabled is true and LogGroupName is omitted, the service uses the default '/aws/kinesis/<channelName>/<channelId>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#log_group_name KinesisChannel#log_group_name}

---

##### `log_stream_name`<sup>Optional</sup> <a name="log_stream_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.property.logStreamName"></a>

```python
log_stream_name: str
```

- *Type:* str

The CloudWatch log stream name. Defaults to the literal string 'DestinationDelivery' when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#log_stream_name KinesisChannel#log_stream_name}

---

### KinesisChannelS3DestinationConfiguration <a name="KinesisChannelS3DestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelS3DestinationConfiguration(
  data_freshness_in_seconds: typing.Union[int, float] = None,
  dead_letter_queue_s3_configuration: KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration = None,
  storage_configuration: KinesisChannelS3DestinationConfigurationStorageConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.property.dataFreshnessInSeconds">data_freshness_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum time in seconds the channel buffers records before delivery if the minimum target file size is not reached. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.property.deadLetterQueueS3Configuration">dead_letter_queue_s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a></code> | Optional dead-letter queue (DLQ) configuration for records that cannot be delivered to the destination. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.property.storageConfiguration">storage_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration">KinesisChannelS3DestinationConfigurationStorageConfiguration</a></code> | S3 storage configuration including the destination bucket, output key template, storage class, and compression type. |

---

##### `data_freshness_in_seconds`<sup>Optional</sup> <a name="data_freshness_in_seconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.property.dataFreshnessInSeconds"></a>

```python
data_freshness_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum time in seconds the channel buffers records before delivery if the minimum target file size is not reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#data_freshness_in_seconds KinesisChannel#data_freshness_in_seconds}

---

##### `dead_letter_queue_s3_configuration`<sup>Optional</sup> <a name="dead_letter_queue_s3_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.property.deadLetterQueueS3Configuration"></a>

```python
dead_letter_queue_s3_configuration: KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a>

Optional dead-letter queue (DLQ) configuration for records that cannot be delivered to the destination.

When omitted, the service auto-fills using the storage BucketARN with an error prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#dead_letter_queue_s3_configuration KinesisChannel#dead_letter_queue_s3_configuration}

---

##### `storage_configuration`<sup>Optional</sup> <a name="storage_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.property.storageConfiguration"></a>

```python
storage_configuration: KinesisChannelS3DestinationConfigurationStorageConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration">KinesisChannelS3DestinationConfigurationStorageConfiguration</a>

S3 storage configuration including the destination bucket, output key template, storage class, and compression type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#storage_configuration KinesisChannel#storage_configuration}

---

### KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration <a name="KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration(
  bucket_arn: str = None,
  error_output_prefix: str = None,
  expected_bucket_owner: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.property.bucketArn">bucket_arn</a></code> | <code>str</code> | The ARN of the S3 bucket for storing failed records. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.property.errorOutputPrefix">error_output_prefix</a></code> | <code>str</code> | Optional S3 key prefix under which error records are organized. When omitted, the service uses the default 'kinesis-channel/errors/<channelName>/<channelId>/'. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | The AWS account ID of the expected owner of the dead-letter queue S3 bucket. |

---

##### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

The ARN of the S3 bucket for storing failed records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#bucket_arn KinesisChannel#bucket_arn}

---

##### `error_output_prefix`<sup>Optional</sup> <a name="error_output_prefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.property.errorOutputPrefix"></a>

```python
error_output_prefix: str
```

- *Type:* str

Optional S3 key prefix under which error records are organized. When omitted, the service uses the default 'kinesis-channel/errors/<channelName>/<channelId>/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#error_output_prefix KinesisChannel#error_output_prefix}

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

The AWS account ID of the expected owner of the dead-letter queue S3 bucket.

Used to verify bucket ownership before delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#expected_bucket_owner KinesisChannel#expected_bucket_owner}

---

### KinesisChannelS3DestinationConfigurationStorageConfiguration <a name="KinesisChannelS3DestinationConfigurationStorageConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration(
  bucket_arn: str = None,
  compression_type: str = None,
  expected_bucket_owner: str = None,
  output_key_template: str = None,
  storage_class: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.bucketArn">bucket_arn</a></code> | <code>str</code> | The ARN of the S3 bucket for record delivery. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.compressionType">compression_type</a></code> | <code>str</code> | The compression algorithm applied to delivered objects. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | The AWS account ID of the expected owner of the destination S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.outputKeyTemplate">output_key_template</a></code> | <code>str</code> | Optional template for the S3 object key path. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.storageClass">storage_class</a></code> | <code>str</code> | The S3 storage class for delivered objects. |

---

##### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

The ARN of the S3 bucket for record delivery.

Different channels can deliver to the same bucket. Buckets can be cross-account but must be in the same region as the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#bucket_arn KinesisChannel#bucket_arn}

---

##### `compression_type`<sup>Optional</sup> <a name="compression_type" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

The compression algorithm applied to delivered objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#compression_type KinesisChannel#compression_type}

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

The AWS account ID of the expected owner of the destination S3 bucket.

Used to verify bucket ownership before delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#expected_bucket_owner KinesisChannel#expected_bucket_owner}

---

##### `output_key_template`<sup>Optional</sup> <a name="output_key_template" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.outputKeyTemplate"></a>

```python
output_key_template: str
```

- *Type:* str

Optional template for the S3 object key path.

Supports placeholders in the form !{name}: !{channel-name}, !{channel-id}, !{stream-name}, !{yyyy}, !{yy}, !{MM}, !{dd}, !{HH}, !{mm}, and !{extension} (a literal file extension can be supplied as !{extension:.json.gz}). When omitted, the service uses the default 'kinesis-channel/!{channel-name}/!{channel-id}/!{yyyy}/!{MM}/!{dd}/!{HH}/!{channel-name}-!{channel-id}-!{yyyy}-!{MM}-!{dd}-!{HH}-!{mm}!{extension}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#output_key_template KinesisChannel#output_key_template}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

The S3 storage class for delivered objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#storage_class KinesisChannel#storage_class}

---

### KinesisChannelS3TablesDestinationConfiguration <a name="KinesisChannelS3TablesDestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelS3TablesDestinationConfiguration(
  data_freshness_in_seconds: typing.Union[int, float] = None,
  dead_letter_queue_s3_configuration: KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration = None,
  s3_tables_configuration_list: IResolvable | typing.List[KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.property.dataFreshnessInSeconds">data_freshness_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum time in seconds the channel buffers records before delivery if the minimum target file size is not reached. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.property.deadLetterQueueS3Configuration">dead_letter_queue_s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a></code> | The dead-letter queue (DLQ) configuration for records that cannot be delivered to the S3 Tables destination. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.property.s3TablesConfigurationList">s3_tables_configuration_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>]</code> | The list of S3 Tables destinations. |

---

##### `data_freshness_in_seconds`<sup>Optional</sup> <a name="data_freshness_in_seconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.property.dataFreshnessInSeconds"></a>

```python
data_freshness_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum time in seconds the channel buffers records before delivery if the minimum target file size is not reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#data_freshness_in_seconds KinesisChannel#data_freshness_in_seconds}

---

##### `dead_letter_queue_s3_configuration`<sup>Optional</sup> <a name="dead_letter_queue_s3_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.property.deadLetterQueueS3Configuration"></a>

```python
dead_letter_queue_s3_configuration: KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a>

The dead-letter queue (DLQ) configuration for records that cannot be delivered to the S3 Tables destination.

Required for S3 Tables: there is no safe fallback because S3 Tables metadata writes are critical-path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#dead_letter_queue_s3_configuration KinesisChannel#dead_letter_queue_s3_configuration}

---

##### `s3_tables_configuration_list`<sup>Optional</sup> <a name="s3_tables_configuration_list" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.property.s3TablesConfigurationList"></a>

```python
s3_tables_configuration_list: IResolvable | typing.List[KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>]

The list of S3 Tables destinations.

v1 supports a single element; the list shape allows future extensibility to fan out to multiple tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#s3_tables_configuration_list KinesisChannel#s3_tables_configuration_list}

---

### KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration <a name="KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration(
  bucket_arn: str = None,
  error_output_prefix: str = None,
  expected_bucket_owner: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.property.bucketArn">bucket_arn</a></code> | <code>str</code> | The ARN of the S3 bucket for storing failed records. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.property.errorOutputPrefix">error_output_prefix</a></code> | <code>str</code> | Optional S3 key prefix under which error records are organized. When omitted, the service uses the default 'kinesis-channel/errors/<channelName>/<channelId>/'. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | The AWS account ID of the expected owner of the dead-letter queue S3 bucket. |

---

##### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

The ARN of the S3 bucket for storing failed records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#bucket_arn KinesisChannel#bucket_arn}

---

##### `error_output_prefix`<sup>Optional</sup> <a name="error_output_prefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.property.errorOutputPrefix"></a>

```python
error_output_prefix: str
```

- *Type:* str

Optional S3 key prefix under which error records are organized. When omitted, the service uses the default 'kinesis-channel/errors/<channelName>/<channelId>/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#error_output_prefix KinesisChannel#error_output_prefix}

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

The AWS account ID of the expected owner of the dead-letter queue S3 bucket.

Used to verify bucket ownership before delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#expected_bucket_owner KinesisChannel#expected_bucket_owner}

---

### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec(
  partition_fields: IResolvable | typing.List[KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec.property.partitionFields">partition_fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>]</code> | List of partition fields that define how records are partitioned when written to the destination table. |

---

##### `partition_fields`<sup>Optional</sup> <a name="partition_fields" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec.property.partitionFields"></a>

```python
partition_fields: IResolvable | typing.List[KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>]

List of partition fields that define how records are partitioned when written to the destination table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#partition_fields KinesisChannel#partition_fields}

---

### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields(
  source_name: str = None,
  transform: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields.property.sourceName">source_name</a></code> | <code>str</code> | The name of the source column on which the transform is applied. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields.property.transform">transform</a></code> | <code>str</code> | The partitioning transform applied to the SourceName column. |

---

##### `source_name`<sup>Optional</sup> <a name="source_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

The name of the source column on which the transform is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#source_name KinesisChannel#source_name}

---

##### `transform`<sup>Optional</sup> <a name="transform" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields.property.transform"></a>

```python
transform: str
```

- *Type:* str

The partitioning transform applied to the SourceName column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#transform KinesisChannel#transform}

---

### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct(
  compression_type: str = None,
  namespace: str = None,
  partition_spec: KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec = None,
  table_bucket_arn: str = None,
  table_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.compressionType">compression_type</a></code> | <code>str</code> | The compression algorithm applied to objects delivered to the S3 Tables destination. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.namespace">namespace</a></code> | <code>str</code> | The name of the S3 Tables namespace that contains the destination table. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.partitionSpec">partition_spec</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a></code> | The partition specification used by the destination Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.tableBucketArn">table_bucket_arn</a></code> | <code>str</code> | The ARN of the S3 Tables table bucket for record delivery. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.tableName">table_name</a></code> | <code>str</code> | The name of the destination S3 Tables table. |

---

##### `compression_type`<sup>Optional</sup> <a name="compression_type" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

The compression algorithm applied to objects delivered to the S3 Tables destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#compression_type KinesisChannel#compression_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The name of the S3 Tables namespace that contains the destination table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#namespace KinesisChannel#namespace}

---

##### `partition_spec`<sup>Optional</sup> <a name="partition_spec" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.partitionSpec"></a>

```python
partition_spec: KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a>

The partition specification used by the destination Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#partition_spec KinesisChannel#partition_spec}

---

##### `table_bucket_arn`<sup>Optional</sup> <a name="table_bucket_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.tableBucketArn"></a>

```python
table_bucket_arn: str
```

- *Type:* str

The ARN of the S3 Tables table bucket for record delivery.

Buckets can be cross-account but must be in the same region as the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#table_bucket_arn KinesisChannel#table_bucket_arn}

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The name of the destination S3 Tables table.

The table is created for the customer if it does not yet exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#table_name KinesisChannel#table_name}

---

### KinesisChannelStreamConfigurationListRecordConfiguration <a name="KinesisChannelStreamConfigurationListRecordConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration(
  record_format_type: str,
  gsr_schema_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration.property.recordFormatType">record_format_type</a></code> | <code>str</code> | The format used to interpret records read from the source stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration.property.gsrSchemaArn">gsr_schema_arn</a></code> | <code>str</code> | The ARN of the AWS Glue Schema Registry (GSR) schema. |

---

##### `record_format_type`<sup>Required</sup> <a name="record_format_type" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration.property.recordFormatType"></a>

```python
record_format_type: str
```

- *Type:* str

The format used to interpret records read from the source stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#record_format_type KinesisChannel#record_format_type}

---

##### `gsr_schema_arn`<sup>Optional</sup> <a name="gsr_schema_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration.property.gsrSchemaArn"></a>

```python
gsr_schema_arn: str
```

- *Type:* str

The ARN of the AWS Glue Schema Registry (GSR) schema.

Required for the S3 Tables destination, where it is used to create the S3 Table and to validate that the record format matches the table schema. Also used when RecordFormatType is GSR_JSON to interpret records read from the source stream. Vanilla S3 delivery writes records as S3 objects and does not need a schema. The schema must be in the same account and region as the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#gsr_schema_arn KinesisChannel#gsr_schema_arn}

---

### KinesisChannelStreamConfigurationListStruct <a name="KinesisChannelStreamConfigurationListStruct" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelStreamConfigurationListStruct(
  record_configuration: KinesisChannelStreamConfigurationListRecordConfiguration,
  stream_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct.property.recordConfiguration">record_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration">KinesisChannelStreamConfigurationListRecordConfiguration</a></code> | The configuration that describes how records on the source stream are encoded. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct.property.streamArn">stream_arn</a></code> | <code>str</code> | The Amazon resource name (ARN) of the Kinesis data stream that the channel reads from. |

---

##### `record_configuration`<sup>Required</sup> <a name="record_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct.property.recordConfiguration"></a>

```python
record_configuration: KinesisChannelStreamConfigurationListRecordConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration">KinesisChannelStreamConfigurationListRecordConfiguration</a>

The configuration that describes how records on the source stream are encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#record_configuration KinesisChannel#record_configuration}

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

The Amazon resource name (ARN) of the Kinesis data stream that the channel reads from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#stream_arn KinesisChannel#stream_arn}

---

### KinesisChannelTags <a name="KinesisChannelTags" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#key KinesisChannel#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#value KinesisChannel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisChannelEncryptionConfigurationOutputReference <a name="KinesisChannelEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resetKeyId">reset_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_key_id` <a name="reset_key_id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resetKeyId"></a>

```python
def reset_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisChannelEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a>

---


### KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference <a name="KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resetLogGroupName">reset_log_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resetLogStreamName">reset_log_stream_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_log_group_name` <a name="reset_log_group_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resetLogGroupName"></a>

```python
def reset_log_group_name() -> None
```

##### `reset_log_stream_name` <a name="reset_log_stream_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resetLogStreamName"></a>

```python
def reset_log_stream_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logStreamNameInput">log_stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logStreamName">log_stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs">KinesisChannelLoggingConfigurationCloudwatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `log_stream_name_input`<sup>Optional</sup> <a name="log_stream_name_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logStreamNameInput"></a>

```python
log_stream_name_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `log_stream_name`<sup>Required</sup> <a name="log_stream_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logStreamName"></a>

```python
log_stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisChannelLoggingConfigurationCloudwatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs">KinesisChannelLoggingConfigurationCloudwatchLogs</a>

---


### KinesisChannelLoggingConfigurationOutputReference <a name="KinesisChannelLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelLoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.putCloudwatchLogs">put_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.resetCloudwatchLogs">reset_cloudwatch_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logs` <a name="put_cloudwatch_logs" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.putCloudwatchLogs"></a>

```python
def put_cloudwatch_logs(
  enabled: bool | IResolvable = None,
  log_group_name: str = None,
  log_stream_name: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.putCloudwatchLogs.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether CloudWatch Logs delivery is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#enabled KinesisChannel#enabled}

---

###### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.putCloudwatchLogs.parameter.logGroupName"></a>

- *Type:* str

The CloudWatch log group name. When Enabled is true and LogGroupName is omitted, the service uses the default '/aws/kinesis/<channelName>/<channelId>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#log_group_name KinesisChannel#log_group_name}

---

###### `log_stream_name`<sup>Optional</sup> <a name="log_stream_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.putCloudwatchLogs.parameter.logStreamName"></a>

- *Type:* str

The CloudWatch log stream name. Defaults to the literal string 'DestinationDelivery' when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#log_stream_name KinesisChannel#log_stream_name}

---

##### `reset_cloudwatch_logs` <a name="reset_cloudwatch_logs" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.resetCloudwatchLogs"></a>

```python
def reset_cloudwatch_logs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference">KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.cloudwatchLogsInput">cloudwatch_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs">KinesisChannelLoggingConfigurationCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs`<sup>Required</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference">KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference</a>

---

##### `cloudwatch_logs_input`<sup>Optional</sup> <a name="cloudwatch_logs_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.cloudwatchLogsInput"></a>

```python
cloudwatch_logs_input: IResolvable | KinesisChannelLoggingConfigurationCloudwatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs">KinesisChannelLoggingConfigurationCloudwatchLogs</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisChannelLoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a>

---


### KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference <a name="KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetBucketArn">reset_bucket_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetErrorOutputPrefix">reset_error_output_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_arn` <a name="reset_bucket_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetBucketArn"></a>

```python
def reset_bucket_arn() -> None
```

##### `reset_error_output_prefix` <a name="reset_error_output_prefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetErrorOutputPrefix"></a>

```python
def reset_error_output_prefix() -> None
```

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArnInput">bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefixInput">error_output_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix">error_output_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn_input`<sup>Optional</sup> <a name="bucket_arn_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArnInput"></a>

```python
bucket_arn_input: str
```

- *Type:* str

---

##### `error_output_prefix_input`<sup>Optional</sup> <a name="error_output_prefix_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefixInput"></a>

```python
error_output_prefix_input: str
```

- *Type:* str

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `error_output_prefix`<sup>Required</sup> <a name="error_output_prefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix"></a>

```python
error_output_prefix: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a>

---


### KinesisChannelS3DestinationConfigurationOutputReference <a name="KinesisChannelS3DestinationConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration">put_dead_letter_queue_s3_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putStorageConfiguration">put_storage_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resetDataFreshnessInSeconds">reset_data_freshness_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resetDeadLetterQueueS3Configuration">reset_dead_letter_queue_s3_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resetStorageConfiguration">reset_storage_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dead_letter_queue_s3_configuration` <a name="put_dead_letter_queue_s3_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration"></a>

```python
def put_dead_letter_queue_s3_configuration(
  bucket_arn: str = None,
  error_output_prefix: str = None,
  expected_bucket_owner: str = None
) -> None
```

###### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration.parameter.bucketArn"></a>

- *Type:* str

The ARN of the S3 bucket for storing failed records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#bucket_arn KinesisChannel#bucket_arn}

---

###### `error_output_prefix`<sup>Optional</sup> <a name="error_output_prefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration.parameter.errorOutputPrefix"></a>

- *Type:* str

Optional S3 key prefix under which error records are organized. When omitted, the service uses the default 'kinesis-channel/errors/<channelName>/<channelId>/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#error_output_prefix KinesisChannel#error_output_prefix}

---

###### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration.parameter.expectedBucketOwner"></a>

- *Type:* str

The AWS account ID of the expected owner of the dead-letter queue S3 bucket.

Used to verify bucket ownership before delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#expected_bucket_owner KinesisChannel#expected_bucket_owner}

---

##### `put_storage_configuration` <a name="put_storage_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putStorageConfiguration"></a>

```python
def put_storage_configuration(
  bucket_arn: str = None,
  compression_type: str = None,
  expected_bucket_owner: str = None,
  output_key_template: str = None,
  storage_class: str = None
) -> None
```

###### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putStorageConfiguration.parameter.bucketArn"></a>

- *Type:* str

The ARN of the S3 bucket for record delivery.

Different channels can deliver to the same bucket. Buckets can be cross-account but must be in the same region as the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#bucket_arn KinesisChannel#bucket_arn}

---

###### `compression_type`<sup>Optional</sup> <a name="compression_type" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putStorageConfiguration.parameter.compressionType"></a>

- *Type:* str

The compression algorithm applied to delivered objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#compression_type KinesisChannel#compression_type}

---

###### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putStorageConfiguration.parameter.expectedBucketOwner"></a>

- *Type:* str

The AWS account ID of the expected owner of the destination S3 bucket.

Used to verify bucket ownership before delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#expected_bucket_owner KinesisChannel#expected_bucket_owner}

---

###### `output_key_template`<sup>Optional</sup> <a name="output_key_template" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putStorageConfiguration.parameter.outputKeyTemplate"></a>

- *Type:* str

Optional template for the S3 object key path.

Supports placeholders in the form !{name}: !{channel-name}, !{channel-id}, !{stream-name}, !{yyyy}, !{yy}, !{MM}, !{dd}, !{HH}, !{mm}, and !{extension} (a literal file extension can be supplied as !{extension:.json.gz}). When omitted, the service uses the default 'kinesis-channel/!{channel-name}/!{channel-id}/!{yyyy}/!{MM}/!{dd}/!{HH}/!{channel-name}-!{channel-id}-!{yyyy}-!{MM}-!{dd}-!{HH}-!{mm}!{extension}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#output_key_template KinesisChannel#output_key_template}

---

###### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putStorageConfiguration.parameter.storageClass"></a>

- *Type:* str

The S3 storage class for delivered objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#storage_class KinesisChannel#storage_class}

---

##### `reset_data_freshness_in_seconds` <a name="reset_data_freshness_in_seconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resetDataFreshnessInSeconds"></a>

```python
def reset_data_freshness_in_seconds() -> None
```

##### `reset_dead_letter_queue_s3_configuration` <a name="reset_dead_letter_queue_s3_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resetDeadLetterQueueS3Configuration"></a>

```python
def reset_dead_letter_queue_s3_configuration() -> None
```

##### `reset_storage_configuration` <a name="reset_storage_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resetStorageConfiguration"></a>

```python
def reset_storage_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration">dead_letter_queue_s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.storageConfiguration">storage_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference">KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput">data_freshness_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3ConfigurationInput">dead_letter_queue_s3_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.storageConfigurationInput">storage_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration">KinesisChannelS3DestinationConfigurationStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSeconds">data_freshness_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dead_letter_queue_s3_configuration`<sup>Required</sup> <a name="dead_letter_queue_s3_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration"></a>

```python
dead_letter_queue_s3_configuration: KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a>

---

##### `storage_configuration`<sup>Required</sup> <a name="storage_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.storageConfiguration"></a>

```python
storage_configuration: KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference">KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference</a>

---

##### `data_freshness_in_seconds_input`<sup>Optional</sup> <a name="data_freshness_in_seconds_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput"></a>

```python
data_freshness_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dead_letter_queue_s3_configuration_input`<sup>Optional</sup> <a name="dead_letter_queue_s3_configuration_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3ConfigurationInput"></a>

```python
dead_letter_queue_s3_configuration_input: IResolvable | KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a>

---

##### `storage_configuration_input`<sup>Optional</sup> <a name="storage_configuration_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.storageConfigurationInput"></a>

```python
storage_configuration_input: IResolvable | KinesisChannelS3DestinationConfigurationStorageConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration">KinesisChannelS3DestinationConfigurationStorageConfiguration</a>

---

##### `data_freshness_in_seconds`<sup>Required</sup> <a name="data_freshness_in_seconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSeconds"></a>

```python
data_freshness_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisChannelS3DestinationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a>

---


### KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference <a name="KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetBucketArn">reset_bucket_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetCompressionType">reset_compression_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetOutputKeyTemplate">reset_output_key_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetStorageClass">reset_storage_class</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_arn` <a name="reset_bucket_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetBucketArn"></a>

```python
def reset_bucket_arn() -> None
```

##### `reset_compression_type` <a name="reset_compression_type" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetCompressionType"></a>

```python
def reset_compression_type() -> None
```

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```

##### `reset_output_key_template` <a name="reset_output_key_template" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetOutputKeyTemplate"></a>

```python
def reset_output_key_template() -> None
```

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.bucketArnInput">bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.compressionTypeInput">compression_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.outputKeyTemplateInput">output_key_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.compressionType">compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.outputKeyTemplate">output_key_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration">KinesisChannelS3DestinationConfigurationStorageConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn_input`<sup>Optional</sup> <a name="bucket_arn_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.bucketArnInput"></a>

```python
bucket_arn_input: str
```

- *Type:* str

---

##### `compression_type_input`<sup>Optional</sup> <a name="compression_type_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.compressionTypeInput"></a>

```python
compression_type_input: str
```

- *Type:* str

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `output_key_template_input`<sup>Optional</sup> <a name="output_key_template_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.outputKeyTemplateInput"></a>

```python
output_key_template_input: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `compression_type`<sup>Required</sup> <a name="compression_type" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `output_key_template`<sup>Required</sup> <a name="output_key_template" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.outputKeyTemplate"></a>

```python
output_key_template: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisChannelS3DestinationConfigurationStorageConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration">KinesisChannelS3DestinationConfigurationStorageConfiguration</a>

---


### KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference <a name="KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetBucketArn">reset_bucket_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetErrorOutputPrefix">reset_error_output_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_arn` <a name="reset_bucket_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetBucketArn"></a>

```python
def reset_bucket_arn() -> None
```

##### `reset_error_output_prefix` <a name="reset_error_output_prefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetErrorOutputPrefix"></a>

```python
def reset_error_output_prefix() -> None
```

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArnInput">bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefixInput">error_output_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix">error_output_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn_input`<sup>Optional</sup> <a name="bucket_arn_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArnInput"></a>

```python
bucket_arn_input: str
```

- *Type:* str

---

##### `error_output_prefix_input`<sup>Optional</sup> <a name="error_output_prefix_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefixInput"></a>

```python
error_output_prefix_input: str
```

- *Type:* str

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `error_output_prefix`<sup>Required</sup> <a name="error_output_prefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix"></a>

```python
error_output_prefix: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a>

---


### KinesisChannelS3TablesDestinationConfigurationOutputReference <a name="KinesisChannelS3TablesDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration">put_dead_letter_queue_s3_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putS3TablesConfigurationList">put_s3_tables_configuration_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resetDataFreshnessInSeconds">reset_data_freshness_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resetDeadLetterQueueS3Configuration">reset_dead_letter_queue_s3_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resetS3TablesConfigurationList">reset_s3_tables_configuration_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dead_letter_queue_s3_configuration` <a name="put_dead_letter_queue_s3_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration"></a>

```python
def put_dead_letter_queue_s3_configuration(
  bucket_arn: str = None,
  error_output_prefix: str = None,
  expected_bucket_owner: str = None
) -> None
```

###### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration.parameter.bucketArn"></a>

- *Type:* str

The ARN of the S3 bucket for storing failed records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#bucket_arn KinesisChannel#bucket_arn}

---

###### `error_output_prefix`<sup>Optional</sup> <a name="error_output_prefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration.parameter.errorOutputPrefix"></a>

- *Type:* str

Optional S3 key prefix under which error records are organized. When omitted, the service uses the default 'kinesis-channel/errors/<channelName>/<channelId>/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#error_output_prefix KinesisChannel#error_output_prefix}

---

###### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration.parameter.expectedBucketOwner"></a>

- *Type:* str

The AWS account ID of the expected owner of the dead-letter queue S3 bucket.

Used to verify bucket ownership before delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#expected_bucket_owner KinesisChannel#expected_bucket_owner}

---

##### `put_s3_tables_configuration_list` <a name="put_s3_tables_configuration_list" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putS3TablesConfigurationList"></a>

```python
def put_s3_tables_configuration_list(
  value: IResolvable | typing.List[KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putS3TablesConfigurationList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>]

---

##### `reset_data_freshness_in_seconds` <a name="reset_data_freshness_in_seconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resetDataFreshnessInSeconds"></a>

```python
def reset_data_freshness_in_seconds() -> None
```

##### `reset_dead_letter_queue_s3_configuration` <a name="reset_dead_letter_queue_s3_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resetDeadLetterQueueS3Configuration"></a>

```python
def reset_dead_letter_queue_s3_configuration() -> None
```

##### `reset_s3_tables_configuration_list` <a name="reset_s3_tables_configuration_list" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resetS3TablesConfigurationList"></a>

```python
def reset_s3_tables_configuration_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration">dead_letter_queue_s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.s3TablesConfigurationList">s3_tables_configuration_list</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput">data_freshness_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.deadLetterQueueS3ConfigurationInput">dead_letter_queue_s3_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.s3TablesConfigurationListInput">s3_tables_configuration_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.dataFreshnessInSeconds">data_freshness_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dead_letter_queue_s3_configuration`<sup>Required</sup> <a name="dead_letter_queue_s3_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration"></a>

```python
dead_letter_queue_s3_configuration: KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a>

---

##### `s3_tables_configuration_list`<sup>Required</sup> <a name="s3_tables_configuration_list" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.s3TablesConfigurationList"></a>

```python
s3_tables_configuration_list: KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList</a>

---

##### `data_freshness_in_seconds_input`<sup>Optional</sup> <a name="data_freshness_in_seconds_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput"></a>

```python
data_freshness_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dead_letter_queue_s3_configuration_input`<sup>Optional</sup> <a name="dead_letter_queue_s3_configuration_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.deadLetterQueueS3ConfigurationInput"></a>

```python
dead_letter_queue_s3_configuration_input: IResolvable | KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a>

---

##### `s3_tables_configuration_list_input`<sup>Optional</sup> <a name="s3_tables_configuration_list_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.s3TablesConfigurationListInput"></a>

```python
s3_tables_configuration_list_input: IResolvable | typing.List[KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>]

---

##### `data_freshness_in_seconds`<sup>Required</sup> <a name="data_freshness_in_seconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.dataFreshnessInSeconds"></a>

```python
data_freshness_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisChannelS3TablesDestinationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a>

---


### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.putPartitionFields">put_partition_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resetPartitionFields">reset_partition_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_partition_fields` <a name="put_partition_fields" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.putPartitionFields"></a>

```python
def put_partition_fields(
  value: IResolvable | typing.List[KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.putPartitionFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>]

---

##### `reset_partition_fields` <a name="reset_partition_fields" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resetPartitionFields"></a>

```python
def reset_partition_fields() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.partitionFields">partition_fields</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.partitionFieldsInput">partition_fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partition_fields`<sup>Required</sup> <a name="partition_fields" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.partitionFields"></a>

```python
partition_fields: KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList</a>

---

##### `partition_fields_input`<sup>Optional</sup> <a name="partition_fields_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.partitionFieldsInput"></a>

```python
partition_fields_input: IResolvable | typing.List[KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a>

---


### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>]

---


### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resetSourceName">reset_source_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resetTransform">reset_transform</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_name` <a name="reset_source_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resetSourceName"></a>

```python
def reset_source_name() -> None
```

##### `reset_transform` <a name="reset_transform" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resetTransform"></a>

```python
def reset_transform() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.sourceNameInput">source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.transformInput">transform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.transform">transform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_name_input`<sup>Optional</sup> <a name="source_name_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.sourceNameInput"></a>

```python
source_name_input: str
```

- *Type:* str

---

##### `transform_input`<sup>Optional</sup> <a name="transform_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.transformInput"></a>

```python
transform_input: str
```

- *Type:* str

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.transform"></a>

```python
transform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>

---


### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>]

---


### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.putPartitionSpec">put_partition_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetCompressionType">reset_compression_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetPartitionSpec">reset_partition_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetTableBucketArn">reset_table_bucket_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_partition_spec` <a name="put_partition_spec" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.putPartitionSpec"></a>

```python
def put_partition_spec(
  partition_fields: IResolvable | typing.List[KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields] = None
) -> None
```

###### `partition_fields`<sup>Optional</sup> <a name="partition_fields" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.putPartitionSpec.parameter.partitionFields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>]

List of partition fields that define how records are partitioned when written to the destination table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#partition_fields KinesisChannel#partition_fields}

---

##### `reset_compression_type` <a name="reset_compression_type" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetCompressionType"></a>

```python
def reset_compression_type() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_partition_spec` <a name="reset_partition_spec" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetPartitionSpec"></a>

```python
def reset_partition_spec() -> None
```

##### `reset_table_bucket_arn` <a name="reset_table_bucket_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetTableBucketArn"></a>

```python
def reset_table_bucket_arn() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.partitionSpec">partition_spec</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.compressionTypeInput">compression_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.partitionSpecInput">partition_spec_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableBucketArnInput">table_bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.compressionType">compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableBucketArn">table_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partition_spec`<sup>Required</sup> <a name="partition_spec" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.partitionSpec"></a>

```python
partition_spec: KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference</a>

---

##### `compression_type_input`<sup>Optional</sup> <a name="compression_type_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.compressionTypeInput"></a>

```python
compression_type_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `partition_spec_input`<sup>Optional</sup> <a name="partition_spec_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.partitionSpecInput"></a>

```python
partition_spec_input: IResolvable | KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a>

---

##### `table_bucket_arn_input`<sup>Optional</sup> <a name="table_bucket_arn_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableBucketArnInput"></a>

```python
table_bucket_arn_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `compression_type`<sup>Required</sup> <a name="compression_type" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `table_bucket_arn`<sup>Required</sup> <a name="table_bucket_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableBucketArn"></a>

```python
table_bucket_arn: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>

---


### KinesisChannelStreamConfigurationListRecordConfigurationOutputReference <a name="KinesisChannelStreamConfigurationListRecordConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resetGsrSchemaArn">reset_gsr_schema_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gsr_schema_arn` <a name="reset_gsr_schema_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resetGsrSchemaArn"></a>

```python
def reset_gsr_schema_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.gsrSchemaArnInput">gsr_schema_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.recordFormatTypeInput">record_format_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.gsrSchemaArn">gsr_schema_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.recordFormatType">record_format_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration">KinesisChannelStreamConfigurationListRecordConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gsr_schema_arn_input`<sup>Optional</sup> <a name="gsr_schema_arn_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.gsrSchemaArnInput"></a>

```python
gsr_schema_arn_input: str
```

- *Type:* str

---

##### `record_format_type_input`<sup>Optional</sup> <a name="record_format_type_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.recordFormatTypeInput"></a>

```python
record_format_type_input: str
```

- *Type:* str

---

##### `gsr_schema_arn`<sup>Required</sup> <a name="gsr_schema_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.gsrSchemaArn"></a>

```python
gsr_schema_arn: str
```

- *Type:* str

---

##### `record_format_type`<sup>Required</sup> <a name="record_format_type" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.recordFormatType"></a>

```python
record_format_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisChannelStreamConfigurationListRecordConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration">KinesisChannelStreamConfigurationListRecordConfiguration</a>

---


### KinesisChannelStreamConfigurationListStructList <a name="KinesisChannelStreamConfigurationListStructList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelStreamConfigurationListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KinesisChannelStreamConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KinesisChannelStreamConfigurationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>]

---


### KinesisChannelStreamConfigurationListStructOutputReference <a name="KinesisChannelStreamConfigurationListStructOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.putRecordConfiguration">put_record_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_record_configuration` <a name="put_record_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.putRecordConfiguration"></a>

```python
def put_record_configuration(
  record_format_type: str,
  gsr_schema_arn: str = None
) -> None
```

###### `record_format_type`<sup>Required</sup> <a name="record_format_type" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.putRecordConfiguration.parameter.recordFormatType"></a>

- *Type:* str

The format used to interpret records read from the source stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#record_format_type KinesisChannel#record_format_type}

---

###### `gsr_schema_arn`<sup>Optional</sup> <a name="gsr_schema_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.putRecordConfiguration.parameter.gsrSchemaArn"></a>

- *Type:* str

The ARN of the AWS Glue Schema Registry (GSR) schema.

Required for the S3 Tables destination, where it is used to create the S3 Table and to validate that the record format matches the table schema. Also used when RecordFormatType is GSR_JSON to interpret records read from the source stream. Vanilla S3 delivery writes records as S3 objects and does not need a schema. The schema must be in the same account and region as the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#gsr_schema_arn KinesisChannel#gsr_schema_arn}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.recordConfiguration">record_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference">KinesisChannelStreamConfigurationListRecordConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.recordConfigurationInput">record_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration">KinesisChannelStreamConfigurationListRecordConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.streamArnInput">stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `record_configuration`<sup>Required</sup> <a name="record_configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.recordConfiguration"></a>

```python
record_configuration: KinesisChannelStreamConfigurationListRecordConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference">KinesisChannelStreamConfigurationListRecordConfigurationOutputReference</a>

---

##### `record_configuration_input`<sup>Optional</sup> <a name="record_configuration_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.recordConfigurationInput"></a>

```python
record_configuration_input: IResolvable | KinesisChannelStreamConfigurationListRecordConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration">KinesisChannelStreamConfigurationListRecordConfiguration</a>

---

##### `stream_arn_input`<sup>Optional</sup> <a name="stream_arn_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.streamArnInput"></a>

```python
stream_arn_input: str
```

- *Type:* str

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisChannelStreamConfigurationListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>

---


### KinesisChannelTagsList <a name="KinesisChannelTagsList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KinesisChannelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KinesisChannelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>]

---


### KinesisChannelTagsOutputReference <a name="KinesisChannelTagsOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesis_channel

kinesisChannel.KinesisChannelTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisChannelTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>

---



