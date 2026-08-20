# `mskChannel` Submodule <a name="`mskChannel` Submodule" id="@cdktn/provider-awscc.mskChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskChannel <a name="MskChannel" id="@cdktn/provider-awscc.mskChannel.MskChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel awscc_msk_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannel(
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
  topic_configuration_list: IResolvable | typing.List[MskChannelTopicConfigurationListStruct],
  cluster_arn: str = None,
  encryption_configuration: MskChannelEncryptionConfiguration = None,
  iceberg_destination_configuration: MskChannelIcebergDestinationConfiguration = None,
  logging_info: MskChannelLoggingInfo = None,
  s3_destination_configuration: MskChannelS3DestinationConfiguration = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.channelName">channel_name</a></code> | <code>str</code> | Name of the channel. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.topicConfigurationList">topic_configuration_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>]</code> | Topic configuration. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.clusterArn">cluster_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the cluster. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a></code> | Encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.icebergDestinationConfiguration">iceberg_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a></code> | Iceberg destination configuration. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.loggingInfo">logging_info</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a></code> | Log configuration details for Channel. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.s3DestinationConfiguration">s3_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a></code> | S3 destination configuration. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Tags attached to the channel. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.channelName"></a>

- *Type:* str

Name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#channel_name MskChannel#channel_name}

---

##### `topic_configuration_list`<sup>Required</sup> <a name="topic_configuration_list" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.topicConfigurationList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>]

Topic configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#topic_configuration_list MskChannel#topic_configuration_list}

---

##### `cluster_arn`<sup>Optional</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.clusterArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#cluster_arn MskChannel#cluster_arn}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>

Encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#encryption_configuration MskChannel#encryption_configuration}

---

##### `iceberg_destination_configuration`<sup>Optional</sup> <a name="iceberg_destination_configuration" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.icebergDestinationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a>

Iceberg destination configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#iceberg_destination_configuration MskChannel#iceberg_destination_configuration}

---

##### `logging_info`<sup>Optional</sup> <a name="logging_info" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.loggingInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>

Log configuration details for Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#logging_info MskChannel#logging_info}

---

##### `s3_destination_configuration`<sup>Optional</sup> <a name="s3_destination_configuration" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.s3DestinationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a>

S3 destination configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#s3_destination_configuration MskChannel#s3_destination_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Tags attached to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#tags MskChannel#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.putIcebergDestinationConfiguration">put_iceberg_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.putLoggingInfo">put_logging_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.putS3DestinationConfiguration">put_s3_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.putTopicConfigurationList">put_topic_configuration_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetClusterArn">reset_cluster_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetIcebergDestinationConfiguration">reset_iceberg_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetLoggingInfo">reset_logging_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetS3DestinationConfiguration">reset_s3_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mskChannel.MskChannel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mskChannel.MskChannel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mskChannel.MskChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mskChannel.MskChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mskChannel.MskChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mskChannel.MskChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mskChannel.MskChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mskChannel.MskChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mskChannel.MskChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mskChannel.MskChannel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mskChannel.MskChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mskChannel.MskChannel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mskChannel.MskChannel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskChannel.MskChannel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskChannel.MskChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-awscc.mskChannel.MskChannel.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  kms_key_arn: str = None
) -> None
```

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.mskChannel.MskChannel.putEncryptionConfiguration.parameter.kmsKeyArn"></a>

- *Type:* str

The ARN of the KMS key for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#kms_key_arn MskChannel#kms_key_arn}

---

##### `put_iceberg_destination_configuration` <a name="put_iceberg_destination_configuration" id="@cdktn/provider-awscc.mskChannel.MskChannel.putIcebergDestinationConfiguration"></a>

```python
def put_iceberg_destination_configuration(
  append_only: bool | IResolvable = None,
  catalog: MskChannelIcebergDestinationConfigurationCatalog = None,
  compression_type: str = None,
  data_freshness_in_seconds: typing.Union[int, float] = None,
  dead_letter_queue_s3: MskChannelIcebergDestinationConfigurationDeadLetterQueueS3 = None,
  destination_table_list: IResolvable | typing.List[MskChannelIcebergDestinationConfigurationDestinationTableListStruct] = None,
  schema_evolution: MskChannelIcebergDestinationConfigurationSchemaEvolution = None,
  service_execution_role_arn: str = None,
  table_creation: MskChannelIcebergDestinationConfigurationTableCreation = None
) -> None
```

###### `append_only`<sup>Optional</sup> <a name="append_only" id="@cdktn/provider-awscc.mskChannel.MskChannel.putIcebergDestinationConfiguration.parameter.appendOnly"></a>

- *Type:* bool | cdktn.IResolvable

Append only mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#append_only MskChannel#append_only}

---

###### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.mskChannel.MskChannel.putIcebergDestinationConfiguration.parameter.catalog"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a>

Catalog configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#catalog MskChannel#catalog}

---

###### `compression_type`<sup>Optional</sup> <a name="compression_type" id="@cdktn/provider-awscc.mskChannel.MskChannel.putIcebergDestinationConfiguration.parameter.compressionType"></a>

- *Type:* str

Compression codec for Iceberg table data files. Defaults to ZSTD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}

---

###### `data_freshness_in_seconds`<sup>Optional</sup> <a name="data_freshness_in_seconds" id="@cdktn/provider-awscc.mskChannel.MskChannel.putIcebergDestinationConfiguration.parameter.dataFreshnessInSeconds"></a>

- *Type:* typing.Union[int, float]

Data freshness in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}

---

###### `dead_letter_queue_s3`<sup>Optional</sup> <a name="dead_letter_queue_s3" id="@cdktn/provider-awscc.mskChannel.MskChannel.putIcebergDestinationConfiguration.parameter.deadLetterQueueS3"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a>

Dead letter queue S3 configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#dead_letter_queue_s3 MskChannel#dead_letter_queue_s3}

---

###### `destination_table_list`<sup>Optional</sup> <a name="destination_table_list" id="@cdktn/provider-awscc.mskChannel.MskChannel.putIcebergDestinationConfiguration.parameter.destinationTableList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>]

List of destination tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#destination_table_list MskChannel#destination_table_list}

---

###### `schema_evolution`<sup>Optional</sup> <a name="schema_evolution" id="@cdktn/provider-awscc.mskChannel.MskChannel.putIcebergDestinationConfiguration.parameter.schemaEvolution"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a>

Schema evolution configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#schema_evolution MskChannel#schema_evolution}

---

###### `service_execution_role_arn`<sup>Optional</sup> <a name="service_execution_role_arn" id="@cdktn/provider-awscc.mskChannel.MskChannel.putIcebergDestinationConfiguration.parameter.serviceExecutionRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role used by MSK to access the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}

---

###### `table_creation`<sup>Optional</sup> <a name="table_creation" id="@cdktn/provider-awscc.mskChannel.MskChannel.putIcebergDestinationConfiguration.parameter.tableCreation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a>

Table creation configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#table_creation MskChannel#table_creation}

---

##### `put_logging_info` <a name="put_logging_info" id="@cdktn/provider-awscc.mskChannel.MskChannel.putLoggingInfo"></a>

```python
def put_logging_info(
  cloudwatch_logs: MskChannelLoggingInfoCloudwatchLogs = None,
  firehose: MskChannelLoggingInfoFirehose = None,
  s3: MskChannelLoggingInfoS3 = None
) -> None
```

###### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.mskChannel.MskChannel.putLoggingInfo.parameter.cloudwatchLogs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>

CloudWatch Logs log destination details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#cloudwatch_logs MskChannel#cloudwatch_logs}

---

###### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktn/provider-awscc.mskChannel.MskChannel.putLoggingInfo.parameter.firehose"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>

Firehose log destination details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#firehose MskChannel#firehose}

---

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.mskChannel.MskChannel.putLoggingInfo.parameter.s3"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>

S3 log destination details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#s3 MskChannel#s3}

---

##### `put_s3_destination_configuration` <a name="put_s3_destination_configuration" id="@cdktn/provider-awscc.mskChannel.MskChannel.putS3DestinationConfiguration"></a>

```python
def put_s3_destination_configuration(
  data_freshness_in_seconds: typing.Union[int, float] = None,
  dead_letter_queue_s3: MskChannelS3DestinationConfigurationDeadLetterQueueS3 = None,
  service_execution_role_arn: str = None,
  storage: MskChannelS3DestinationConfigurationStorage = None
) -> None
```

###### `data_freshness_in_seconds`<sup>Optional</sup> <a name="data_freshness_in_seconds" id="@cdktn/provider-awscc.mskChannel.MskChannel.putS3DestinationConfiguration.parameter.dataFreshnessInSeconds"></a>

- *Type:* typing.Union[int, float]

Data freshness in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}

---

###### `dead_letter_queue_s3`<sup>Optional</sup> <a name="dead_letter_queue_s3" id="@cdktn/provider-awscc.mskChannel.MskChannel.putS3DestinationConfiguration.parameter.deadLetterQueueS3"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a>

Dead letter queue S3 configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#dead_letter_queue_s3 MskChannel#dead_letter_queue_s3}

---

###### `service_execution_role_arn`<sup>Optional</sup> <a name="service_execution_role_arn" id="@cdktn/provider-awscc.mskChannel.MskChannel.putS3DestinationConfiguration.parameter.serviceExecutionRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role used by MSK to access S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}

---

###### `storage`<sup>Optional</sup> <a name="storage" id="@cdktn/provider-awscc.mskChannel.MskChannel.putS3DestinationConfiguration.parameter.storage"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a>

S3 storage configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#storage MskChannel#storage}

---

##### `put_topic_configuration_list` <a name="put_topic_configuration_list" id="@cdktn/provider-awscc.mskChannel.MskChannel.putTopicConfigurationList"></a>

```python
def put_topic_configuration_list(
  value: IResolvable | typing.List[MskChannelTopicConfigurationListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannel.putTopicConfigurationList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>]

---

##### `reset_cluster_arn` <a name="reset_cluster_arn" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetClusterArn"></a>

```python
def reset_cluster_arn() -> None
```

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_iceberg_destination_configuration` <a name="reset_iceberg_destination_configuration" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetIcebergDestinationConfiguration"></a>

```python
def reset_iceberg_destination_configuration() -> None
```

##### `reset_logging_info` <a name="reset_logging_info" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetLoggingInfo"></a>

```python
def reset_logging_info() -> None
```

##### `reset_s3_destination_configuration` <a name="reset_s3_destination_configuration" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetS3DestinationConfiguration"></a>

```python
def reset_s3_destination_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MskChannel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mskChannel.MskChannel.isConstruct"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskChannel.MskChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mskChannel.MskChannel.isTerraformElement"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskChannel.MskChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannel.isTerraformResource"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskChannel.MskChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mskChannel.MskChannel.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MskChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mskChannel.MskChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mskChannel.MskChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MskChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mskChannel.MskChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MskChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskChannel.MskChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MskChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.channelArn">channel_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference">MskChannelEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.icebergDestinationConfiguration">iceberg_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference">MskChannelIcebergDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.loggingInfo">logging_info</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference">MskChannelLoggingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.s3DestinationConfiguration">s3_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference">MskChannelS3DestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.stateInfo">state_info</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference">MskChannelStateInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.topicConfigurationList">topic_configuration_list</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList">MskChannelTopicConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.channelNameInput">channel_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.clusterArnInput">cluster_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.icebergDestinationConfigurationInput">iceberg_destination_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.loggingInfoInput">logging_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.s3DestinationConfigurationInput">s3_destination_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.topicConfigurationListInput">topic_configuration_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.clusterArn">cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_arn`<sup>Required</sup> <a name="channel_arn" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.channelArn"></a>

```python
channel_arn: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.encryptionConfiguration"></a>

```python
encryption_configuration: MskChannelEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference">MskChannelEncryptionConfigurationOutputReference</a>

---

##### `iceberg_destination_configuration`<sup>Required</sup> <a name="iceberg_destination_configuration" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.icebergDestinationConfiguration"></a>

```python
iceberg_destination_configuration: MskChannelIcebergDestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference">MskChannelIcebergDestinationConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logging_info`<sup>Required</sup> <a name="logging_info" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.loggingInfo"></a>

```python
logging_info: MskChannelLoggingInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference">MskChannelLoggingInfoOutputReference</a>

---

##### `s3_destination_configuration`<sup>Required</sup> <a name="s3_destination_configuration" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.s3DestinationConfiguration"></a>

```python
s3_destination_configuration: MskChannelS3DestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference">MskChannelS3DestinationConfigurationOutputReference</a>

---

##### `state_info`<sup>Required</sup> <a name="state_info" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.stateInfo"></a>

```python
state_info: MskChannelStateInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference">MskChannelStateInfoOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `topic_configuration_list`<sup>Required</sup> <a name="topic_configuration_list" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.topicConfigurationList"></a>

```python
topic_configuration_list: MskChannelTopicConfigurationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList">MskChannelTopicConfigurationListStructList</a>

---

##### `channel_name_input`<sup>Optional</sup> <a name="channel_name_input" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.channelNameInput"></a>

```python
channel_name_input: str
```

- *Type:* str

---

##### `cluster_arn_input`<sup>Optional</sup> <a name="cluster_arn_input" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.clusterArnInput"></a>

```python
cluster_arn_input: str
```

- *Type:* str

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: IResolvable | MskChannelEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>

---

##### `iceberg_destination_configuration_input`<sup>Optional</sup> <a name="iceberg_destination_configuration_input" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.icebergDestinationConfigurationInput"></a>

```python
iceberg_destination_configuration_input: IResolvable | MskChannelIcebergDestinationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a>

---

##### `logging_info_input`<sup>Optional</sup> <a name="logging_info_input" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.loggingInfoInput"></a>

```python
logging_info_input: IResolvable | MskChannelLoggingInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>

---

##### `s3_destination_configuration_input`<sup>Optional</sup> <a name="s3_destination_configuration_input" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.s3DestinationConfigurationInput"></a>

```python
s3_destination_configuration_input: IResolvable | MskChannelS3DestinationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `topic_configuration_list_input`<sup>Optional</sup> <a name="topic_configuration_list_input" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.topicConfigurationListInput"></a>

```python
topic_configuration_list_input: IResolvable | typing.List[MskChannelTopicConfigurationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>]

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MskChannelConfig <a name="MskChannelConfig" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  channel_name: str,
  topic_configuration_list: IResolvable | typing.List[MskChannelTopicConfigurationListStruct],
  cluster_arn: str = None,
  encryption_configuration: MskChannelEncryptionConfiguration = None,
  iceberg_destination_configuration: MskChannelIcebergDestinationConfiguration = None,
  logging_info: MskChannelLoggingInfo = None,
  s3_destination_configuration: MskChannelS3DestinationConfiguration = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.channelName">channel_name</a></code> | <code>str</code> | Name of the channel. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.topicConfigurationList">topic_configuration_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>]</code> | Topic configuration. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.clusterArn">cluster_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the cluster. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a></code> | Encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.icebergDestinationConfiguration">iceberg_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a></code> | Iceberg destination configuration. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.loggingInfo">logging_info</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a></code> | Log configuration details for Channel. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.s3DestinationConfiguration">s3_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a></code> | S3 destination configuration. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Tags attached to the channel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

Name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#channel_name MskChannel#channel_name}

---

##### `topic_configuration_list`<sup>Required</sup> <a name="topic_configuration_list" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.topicConfigurationList"></a>

```python
topic_configuration_list: IResolvable | typing.List[MskChannelTopicConfigurationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>]

Topic configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#topic_configuration_list MskChannel#topic_configuration_list}

---

##### `cluster_arn`<sup>Optional</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#cluster_arn MskChannel#cluster_arn}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: MskChannelEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>

Encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#encryption_configuration MskChannel#encryption_configuration}

---

##### `iceberg_destination_configuration`<sup>Optional</sup> <a name="iceberg_destination_configuration" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.icebergDestinationConfiguration"></a>

```python
iceberg_destination_configuration: MskChannelIcebergDestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a>

Iceberg destination configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#iceberg_destination_configuration MskChannel#iceberg_destination_configuration}

---

##### `logging_info`<sup>Optional</sup> <a name="logging_info" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.loggingInfo"></a>

```python
logging_info: MskChannelLoggingInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>

Log configuration details for Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#logging_info MskChannel#logging_info}

---

##### `s3_destination_configuration`<sup>Optional</sup> <a name="s3_destination_configuration" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.s3DestinationConfiguration"></a>

```python
s3_destination_configuration: MskChannelS3DestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a>

S3 destination configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#s3_destination_configuration MskChannel#s3_destination_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Tags attached to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#tags MskChannel#tags}

---

### MskChannelEncryptionConfiguration <a name="MskChannelEncryptionConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelEncryptionConfiguration(
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of the KMS key for encryption. |

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The ARN of the KMS key for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#kms_key_arn MskChannel#kms_key_arn}

---

### MskChannelIcebergDestinationConfiguration <a name="MskChannelIcebergDestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelIcebergDestinationConfiguration(
  append_only: bool | IResolvable = None,
  catalog: MskChannelIcebergDestinationConfigurationCatalog = None,
  compression_type: str = None,
  data_freshness_in_seconds: typing.Union[int, float] = None,
  dead_letter_queue_s3: MskChannelIcebergDestinationConfigurationDeadLetterQueueS3 = None,
  destination_table_list: IResolvable | typing.List[MskChannelIcebergDestinationConfigurationDestinationTableListStruct] = None,
  schema_evolution: MskChannelIcebergDestinationConfigurationSchemaEvolution = None,
  service_execution_role_arn: str = None,
  table_creation: MskChannelIcebergDestinationConfigurationTableCreation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.appendOnly">append_only</a></code> | <code>bool \| cdktn.IResolvable</code> | Append only mode. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a></code> | Catalog configuration of the destination. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.compressionType">compression_type</a></code> | <code>str</code> | Compression codec for Iceberg table data files. Defaults to ZSTD. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.dataFreshnessInSeconds">data_freshness_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Data freshness in seconds. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.deadLetterQueueS3">dead_letter_queue_s3</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a></code> | Dead letter queue S3 configuration of the destination. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.destinationTableList">destination_table_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>]</code> | List of destination tables. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.schemaEvolution">schema_evolution</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a></code> | Schema evolution configuration of the destination. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role used by MSK to access the table. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.tableCreation">table_creation</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a></code> | Table creation configuration of the destination. |

---

##### `append_only`<sup>Optional</sup> <a name="append_only" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.appendOnly"></a>

```python
append_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Append only mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#append_only MskChannel#append_only}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.catalog"></a>

```python
catalog: MskChannelIcebergDestinationConfigurationCatalog
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a>

Catalog configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#catalog MskChannel#catalog}

---

##### `compression_type`<sup>Optional</sup> <a name="compression_type" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

Compression codec for Iceberg table data files. Defaults to ZSTD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}

---

##### `data_freshness_in_seconds`<sup>Optional</sup> <a name="data_freshness_in_seconds" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.dataFreshnessInSeconds"></a>

```python
data_freshness_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Data freshness in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}

---

##### `dead_letter_queue_s3`<sup>Optional</sup> <a name="dead_letter_queue_s3" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.deadLetterQueueS3"></a>

```python
dead_letter_queue_s3: MskChannelIcebergDestinationConfigurationDeadLetterQueueS3
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a>

Dead letter queue S3 configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#dead_letter_queue_s3 MskChannel#dead_letter_queue_s3}

---

##### `destination_table_list`<sup>Optional</sup> <a name="destination_table_list" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.destinationTableList"></a>

```python
destination_table_list: IResolvable | typing.List[MskChannelIcebergDestinationConfigurationDestinationTableListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>]

List of destination tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#destination_table_list MskChannel#destination_table_list}

---

##### `schema_evolution`<sup>Optional</sup> <a name="schema_evolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.schemaEvolution"></a>

```python
schema_evolution: MskChannelIcebergDestinationConfigurationSchemaEvolution
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a>

Schema evolution configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#schema_evolution MskChannel#schema_evolution}

---

##### `service_execution_role_arn`<sup>Optional</sup> <a name="service_execution_role_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.serviceExecutionRoleArn"></a>

```python
service_execution_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role used by MSK to access the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}

---

##### `table_creation`<sup>Optional</sup> <a name="table_creation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.tableCreation"></a>

```python
table_creation: MskChannelIcebergDestinationConfigurationTableCreation
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a>

Table creation configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#table_creation MskChannel#table_creation}

---

### MskChannelIcebergDestinationConfigurationCatalog <a name="MskChannelIcebergDestinationConfigurationCatalog" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelIcebergDestinationConfigurationCatalog(
  catalog_arn: str = None,
  warehouse_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog.property.catalogArn">catalog_arn</a></code> | <code>str</code> | The ARN of the catalog. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog.property.warehouseLocation">warehouse_location</a></code> | <code>str</code> | The warehouse location. |

---

##### `catalog_arn`<sup>Optional</sup> <a name="catalog_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog.property.catalogArn"></a>

```python
catalog_arn: str
```

- *Type:* str

The ARN of the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#catalog_arn MskChannel#catalog_arn}

---

##### `warehouse_location`<sup>Optional</sup> <a name="warehouse_location" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog.property.warehouseLocation"></a>

```python
warehouse_location: str
```

- *Type:* str

The warehouse location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#warehouse_location MskChannel#warehouse_location}

---

### MskChannelIcebergDestinationConfigurationDeadLetterQueueS3 <a name="MskChannelIcebergDestinationConfigurationDeadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3(
  bucket_arn: str = None,
  error_output_prefix: str = None,
  expected_bucket_owner: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.property.bucketArn">bucket_arn</a></code> | <code>str</code> | The ARN of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.property.errorOutputPrefix">error_output_prefix</a></code> | <code>str</code> | The error output prefix. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Optional 12-digit AWS account ID expected to own the dead-letter S3 bucket. |

---

##### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

The ARN of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}

---

##### `error_output_prefix`<sup>Optional</sup> <a name="error_output_prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.property.errorOutputPrefix"></a>

```python
error_output_prefix: str
```

- *Type:* str

The error output prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

Optional 12-digit AWS account ID expected to own the dead-letter S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}

---

### MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec <a name="MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec(
  partition_strategy: str = None,
  source_list: IResolvable | typing.List[MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec.property.partitionStrategy">partition_strategy</a></code> | <code>str</code> | Partition strategy for MSK channel. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec.property.sourceList">source_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>]</code> | Source list. |

---

##### `partition_strategy`<sup>Optional</sup> <a name="partition_strategy" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec.property.partitionStrategy"></a>

```python
partition_strategy: str
```

- *Type:* str

Partition strategy for MSK channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#partition_strategy MskChannel#partition_strategy}

---

##### `source_list`<sup>Optional</sup> <a name="source_list" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec.property.sourceList"></a>

```python
source_list: IResolvable | typing.List[MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>]

Source list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#source_list MskChannel#source_list}

---

### MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct <a name="MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct(
  source_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct.property.sourceName">source_name</a></code> | <code>str</code> | Source name. |

---

##### `source_name`<sup>Optional</sup> <a name="source_name" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

Source name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#source_name MskChannel#source_name}

---

### MskChannelIcebergDestinationConfigurationDestinationTableListStruct <a name="MskChannelIcebergDestinationConfigurationDestinationTableListStruct" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct(
  destination_database_name: str = None,
  destination_table_name: str = None,
  partition_spec: MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.property.destinationDatabaseName">destination_database_name</a></code> | <code>str</code> | The destination database name. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.property.destinationTableName">destination_table_name</a></code> | <code>str</code> | The destination table name. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.property.partitionSpec">partition_spec</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a></code> | Partition specification. |

---

##### `destination_database_name`<sup>Optional</sup> <a name="destination_database_name" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.property.destinationDatabaseName"></a>

```python
destination_database_name: str
```

- *Type:* str

The destination database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#destination_database_name MskChannel#destination_database_name}

---

##### `destination_table_name`<sup>Optional</sup> <a name="destination_table_name" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.property.destinationTableName"></a>

```python
destination_table_name: str
```

- *Type:* str

The destination table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#destination_table_name MskChannel#destination_table_name}

---

##### `partition_spec`<sup>Optional</sup> <a name="partition_spec" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.property.partitionSpec"></a>

```python
partition_spec: MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a>

Partition specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#partition_spec MskChannel#partition_spec}

---

### MskChannelIcebergDestinationConfigurationSchemaEvolution <a name="MskChannelIcebergDestinationConfigurationSchemaEvolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution(
  enable_schema_evolution: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution.property.enableSchemaEvolution">enable_schema_evolution</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether schema evolution is enabled. |

---

##### `enable_schema_evolution`<sup>Optional</sup> <a name="enable_schema_evolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution.property.enableSchemaEvolution"></a>

```python
enable_schema_evolution: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether schema evolution is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#enable_schema_evolution MskChannel#enable_schema_evolution}

---

### MskChannelIcebergDestinationConfigurationTableCreation <a name="MskChannelIcebergDestinationConfigurationTableCreation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelIcebergDestinationConfigurationTableCreation(
  enable_table_creation: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation.property.enableTableCreation">enable_table_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether table creation is enabled. |

---

##### `enable_table_creation`<sup>Optional</sup> <a name="enable_table_creation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation.property.enableTableCreation"></a>

```python
enable_table_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether table creation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#enable_table_creation MskChannel#enable_table_creation}

---

### MskChannelLoggingInfo <a name="MskChannelLoggingInfo" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelLoggingInfo(
  cloudwatch_logs: MskChannelLoggingInfoCloudwatchLogs = None,
  firehose: MskChannelLoggingInfoFirehose = None,
  s3: MskChannelLoggingInfoS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a></code> | CloudWatch Logs log destination details. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a></code> | Firehose log destination details. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a></code> | S3 log destination details. |

---

##### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: MskChannelLoggingInfoCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>

CloudWatch Logs log destination details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#cloudwatch_logs MskChannel#cloudwatch_logs}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.property.firehose"></a>

```python
firehose: MskChannelLoggingInfoFirehose
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>

Firehose log destination details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#firehose MskChannel#firehose}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.property.s3"></a>

```python
s3: MskChannelLoggingInfoS3
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>

S3 log destination details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#s3 MskChannel#s3}

---

### MskChannelLoggingInfoCloudwatchLogs <a name="MskChannelLoggingInfoCloudwatchLogs" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelLoggingInfoCloudwatchLogs(
  enabled: bool | IResolvable = None,
  log_group: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether CloudWatch Logs logging is enabled. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.logGroup">log_group</a></code> | <code>str</code> | The CloudWatch log group for log delivery. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether CloudWatch Logs logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#enabled MskChannel#enabled}

---

##### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

The CloudWatch log group for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#log_group MskChannel#log_group}

---

### MskChannelLoggingInfoFirehose <a name="MskChannelLoggingInfoFirehose" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelLoggingInfoFirehose(
  delivery_stream: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose.property.deliveryStream">delivery_stream</a></code> | <code>str</code> | The Firehose delivery stream for log delivery. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Firehose logging is enabled. |

---

##### `delivery_stream`<sup>Optional</sup> <a name="delivery_stream" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose.property.deliveryStream"></a>

```python
delivery_stream: str
```

- *Type:* str

The Firehose delivery stream for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#delivery_stream MskChannel#delivery_stream}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Firehose logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#enabled MskChannel#enabled}

---

### MskChannelLoggingInfoS3 <a name="MskChannelLoggingInfoS3" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelLoggingInfoS3(
  bucket: str = None,
  enabled: bool | IResolvable = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.property.bucket">bucket</a></code> | <code>str</code> | The name of the S3 bucket for log delivery. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether S3 logging is enabled. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.property.prefix">prefix</a></code> | <code>str</code> | The S3 prefix for log delivery. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the S3 bucket for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#bucket MskChannel#bucket}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether S3 logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#enabled MskChannel#enabled}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

The S3 prefix for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#prefix MskChannel#prefix}

---

### MskChannelS3DestinationConfiguration <a name="MskChannelS3DestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelS3DestinationConfiguration(
  data_freshness_in_seconds: typing.Union[int, float] = None,
  dead_letter_queue_s3: MskChannelS3DestinationConfigurationDeadLetterQueueS3 = None,
  service_execution_role_arn: str = None,
  storage: MskChannelS3DestinationConfigurationStorage = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.dataFreshnessInSeconds">data_freshness_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Data freshness in seconds. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.deadLetterQueueS3">dead_letter_queue_s3</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a></code> | Dead letter queue S3 configuration of the destination. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role used by MSK to access S3. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a></code> | S3 storage configuration. |

---

##### `data_freshness_in_seconds`<sup>Optional</sup> <a name="data_freshness_in_seconds" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.dataFreshnessInSeconds"></a>

```python
data_freshness_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Data freshness in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}

---

##### `dead_letter_queue_s3`<sup>Optional</sup> <a name="dead_letter_queue_s3" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.deadLetterQueueS3"></a>

```python
dead_letter_queue_s3: MskChannelS3DestinationConfigurationDeadLetterQueueS3
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a>

Dead letter queue S3 configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#dead_letter_queue_s3 MskChannel#dead_letter_queue_s3}

---

##### `service_execution_role_arn`<sup>Optional</sup> <a name="service_execution_role_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.serviceExecutionRoleArn"></a>

```python
service_execution_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role used by MSK to access S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.storage"></a>

```python
storage: MskChannelS3DestinationConfigurationStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a>

S3 storage configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#storage MskChannel#storage}

---

### MskChannelS3DestinationConfigurationDeadLetterQueueS3 <a name="MskChannelS3DestinationConfigurationDeadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3(
  bucket_arn: str = None,
  error_output_prefix: str = None,
  expected_bucket_owner: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.property.bucketArn">bucket_arn</a></code> | <code>str</code> | The ARN of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.property.errorOutputPrefix">error_output_prefix</a></code> | <code>str</code> | The error output prefix. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Optional 12-digit AWS account ID expected to own the dead-letter S3 bucket. |

---

##### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

The ARN of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}

---

##### `error_output_prefix`<sup>Optional</sup> <a name="error_output_prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.property.errorOutputPrefix"></a>

```python
error_output_prefix: str
```

- *Type:* str

The error output prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

Optional 12-digit AWS account ID expected to own the dead-letter S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}

---

### MskChannelS3DestinationConfigurationStorage <a name="MskChannelS3DestinationConfigurationStorage" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelS3DestinationConfigurationStorage(
  bucket_arn: str = None,
  compression_type: str = None,
  expected_bucket_owner: str = None,
  output_key_template: str = None,
  output_prefix: str = None,
  storage_class: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.bucketArn">bucket_arn</a></code> | <code>str</code> | ARN of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.compressionType">compression_type</a></code> | <code>str</code> | S3 compression type. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Optional 12-digit AWS account ID expected to own the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.outputKeyTemplate">output_key_template</a></code> | <code>str</code> | Template for S3 key for output objects, used for partitioning. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.outputPrefix">output_prefix</a></code> | <code>str</code> | Optional prefix for output objects. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.storageClass">storage_class</a></code> | <code>str</code> | S3 storage class. |

---

##### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

ARN of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}

---

##### `compression_type`<sup>Optional</sup> <a name="compression_type" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

S3 compression type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

Optional 12-digit AWS account ID expected to own the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}

---

##### `output_key_template`<sup>Optional</sup> <a name="output_key_template" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.outputKeyTemplate"></a>

```python
output_key_template: str
```

- *Type:* str

Template for S3 key for output objects, used for partitioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#output_key_template MskChannel#output_key_template}

---

##### `output_prefix`<sup>Optional</sup> <a name="output_prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.outputPrefix"></a>

```python
output_prefix: str
```

- *Type:* str

Optional prefix for output objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#output_prefix MskChannel#output_prefix}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

S3 storage class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#storage_class MskChannel#storage_class}

---

### MskChannelStateInfo <a name="MskChannelStateInfo" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfo.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelStateInfo()
```


### MskChannelTopicConfigurationListRecordConverter <a name="MskChannelTopicConfigurationListRecordConverter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelTopicConfigurationListRecordConverter(
  value_converter: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter.property.valueConverter">value_converter</a></code> | <code>str</code> | Value converter for topic data. |

---

##### `value_converter`<sup>Required</sup> <a name="value_converter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter.property.valueConverter"></a>

```python
value_converter: str
```

- *Type:* str

Value converter for topic data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#value_converter MskChannel#value_converter}

---

### MskChannelTopicConfigurationListRecordSchema <a name="MskChannelTopicConfigurationListRecordSchema" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelTopicConfigurationListRecordSchema(
  gsr_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema.property.gsrArn">gsr_arn</a></code> | <code>str</code> | ARN of Glue Schema Registry resource used for table schema. |

---

##### `gsr_arn`<sup>Optional</sup> <a name="gsr_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema.property.gsrArn"></a>

```python
gsr_arn: str
```

- *Type:* str

ARN of Glue Schema Registry resource used for table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#gsr_arn MskChannel#gsr_arn}

---

### MskChannelTopicConfigurationListStruct <a name="MskChannelTopicConfigurationListStruct" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelTopicConfigurationListStruct(
  record_converter: MskChannelTopicConfigurationListRecordConverter,
  topic_arn: str,
  record_schema: MskChannelTopicConfigurationListRecordSchema = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.property.recordConverter">record_converter</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a></code> | Record converter configuration for a topic. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.property.topicArn">topic_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) that uniquely identifies the topic. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.property.recordSchema">record_schema</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a></code> | Record schema configuration for a topic. |

---

##### `record_converter`<sup>Required</sup> <a name="record_converter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.property.recordConverter"></a>

```python
record_converter: MskChannelTopicConfigurationListRecordConverter
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a>

Record converter configuration for a topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#record_converter MskChannel#record_converter}

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) that uniquely identifies the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#topic_arn MskChannel#topic_arn}

---

##### `record_schema`<sup>Optional</sup> <a name="record_schema" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.property.recordSchema"></a>

```python
record_schema: MskChannelTopicConfigurationListRecordSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a>

Record schema configuration for a topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#record_schema MskChannel#record_schema}

---

## Classes <a name="Classes" id="Classes"></a>

### MskChannelEncryptionConfigurationOutputReference <a name="MskChannelEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>

---


### MskChannelIcebergDestinationConfigurationCatalogOutputReference <a name="MskChannelIcebergDestinationConfigurationCatalogOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resetCatalogArn">reset_catalog_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resetWarehouseLocation">reset_warehouse_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_arn` <a name="reset_catalog_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resetCatalogArn"></a>

```python
def reset_catalog_arn() -> None
```

##### `reset_warehouse_location` <a name="reset_warehouse_location" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resetWarehouseLocation"></a>

```python
def reset_warehouse_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.catalogArnInput">catalog_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.warehouseLocationInput">warehouse_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.catalogArn">catalog_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.warehouseLocation">warehouse_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_arn_input`<sup>Optional</sup> <a name="catalog_arn_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.catalogArnInput"></a>

```python
catalog_arn_input: str
```

- *Type:* str

---

##### `warehouse_location_input`<sup>Optional</sup> <a name="warehouse_location_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.warehouseLocationInput"></a>

```python
warehouse_location_input: str
```

- *Type:* str

---

##### `catalog_arn`<sup>Required</sup> <a name="catalog_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.catalogArn"></a>

```python
catalog_arn: str
```

- *Type:* str

---

##### `warehouse_location`<sup>Required</sup> <a name="warehouse_location" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.warehouseLocation"></a>

```python
warehouse_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelIcebergDestinationConfigurationCatalog
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a>

---


### MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference <a name="MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resetBucketArn">reset_bucket_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix">reset_error_output_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_arn` <a name="reset_bucket_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resetBucketArn"></a>

```python
def reset_bucket_arn() -> None
```

##### `reset_error_output_prefix` <a name="reset_error_output_prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix"></a>

```python
def reset_error_output_prefix() -> None
```

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArnInput">bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput">error_output_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefix">error_output_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn_input`<sup>Optional</sup> <a name="bucket_arn_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArnInput"></a>

```python
bucket_arn_input: str
```

- *Type:* str

---

##### `error_output_prefix_input`<sup>Optional</sup> <a name="error_output_prefix_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput"></a>

```python
error_output_prefix_input: str
```

- *Type:* str

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `error_output_prefix`<sup>Required</sup> <a name="error_output_prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefix"></a>

```python
error_output_prefix: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelIcebergDestinationConfigurationDeadLetterQueueS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a>

---


### MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference <a name="MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.putSourceList">put_source_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resetPartitionStrategy">reset_partition_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resetSourceList">reset_source_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_list` <a name="put_source_list" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.putSourceList"></a>

```python
def put_source_list(
  value: IResolvable | typing.List[MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.putSourceList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>]

---

##### `reset_partition_strategy` <a name="reset_partition_strategy" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resetPartitionStrategy"></a>

```python
def reset_partition_strategy() -> None
```

##### `reset_source_list` <a name="reset_source_list" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resetSourceList"></a>

```python
def reset_source_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.sourceList">source_list</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.partitionStrategyInput">partition_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.sourceListInput">source_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.partitionStrategy">partition_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_list`<sup>Required</sup> <a name="source_list" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.sourceList"></a>

```python
source_list: MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList</a>

---

##### `partition_strategy_input`<sup>Optional</sup> <a name="partition_strategy_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.partitionStrategyInput"></a>

```python
partition_strategy_input: str
```

- *Type:* str

---

##### `source_list_input`<sup>Optional</sup> <a name="source_list_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.sourceListInput"></a>

```python
source_list_input: IResolvable | typing.List[MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>]

---

##### `partition_strategy`<sup>Required</sup> <a name="partition_strategy" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.partitionStrategy"></a>

```python
partition_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a>

---


### MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList <a name="MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>]

---


### MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference <a name="MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.resetSourceName">reset_source_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_name` <a name="reset_source_name" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.resetSourceName"></a>

```python
def reset_source_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.sourceNameInput">source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_name_input`<sup>Optional</sup> <a name="source_name_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.sourceNameInput"></a>

```python
source_name_input: str
```

- *Type:* str

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>

---


### MskChannelIcebergDestinationConfigurationDestinationTableListStructList <a name="MskChannelIcebergDestinationConfigurationDestinationTableListStructList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelIcebergDestinationConfigurationDestinationTableListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>]

---


### MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference <a name="MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.putPartitionSpec">put_partition_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resetDestinationDatabaseName">reset_destination_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resetDestinationTableName">reset_destination_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resetPartitionSpec">reset_partition_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_partition_spec` <a name="put_partition_spec" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.putPartitionSpec"></a>

```python
def put_partition_spec(
  partition_strategy: str = None,
  source_list: IResolvable | typing.List[MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct] = None
) -> None
```

###### `partition_strategy`<sup>Optional</sup> <a name="partition_strategy" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.putPartitionSpec.parameter.partitionStrategy"></a>

- *Type:* str

Partition strategy for MSK channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#partition_strategy MskChannel#partition_strategy}

---

###### `source_list`<sup>Optional</sup> <a name="source_list" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.putPartitionSpec.parameter.sourceList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>]

Source list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#source_list MskChannel#source_list}

---

##### `reset_destination_database_name` <a name="reset_destination_database_name" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resetDestinationDatabaseName"></a>

```python
def reset_destination_database_name() -> None
```

##### `reset_destination_table_name` <a name="reset_destination_table_name" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resetDestinationTableName"></a>

```python
def reset_destination_table_name() -> None
```

##### `reset_partition_spec` <a name="reset_partition_spec" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resetPartitionSpec"></a>

```python
def reset_partition_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.partitionSpec">partition_spec</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationDatabaseNameInput">destination_database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationTableNameInput">destination_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.partitionSpecInput">partition_spec_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationDatabaseName">destination_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationTableName">destination_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partition_spec`<sup>Required</sup> <a name="partition_spec" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.partitionSpec"></a>

```python
partition_spec: MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference</a>

---

##### `destination_database_name_input`<sup>Optional</sup> <a name="destination_database_name_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationDatabaseNameInput"></a>

```python
destination_database_name_input: str
```

- *Type:* str

---

##### `destination_table_name_input`<sup>Optional</sup> <a name="destination_table_name_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationTableNameInput"></a>

```python
destination_table_name_input: str
```

- *Type:* str

---

##### `partition_spec_input`<sup>Optional</sup> <a name="partition_spec_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.partitionSpecInput"></a>

```python
partition_spec_input: IResolvable | MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a>

---

##### `destination_database_name`<sup>Required</sup> <a name="destination_database_name" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationDatabaseName"></a>

```python
destination_database_name: str
```

- *Type:* str

---

##### `destination_table_name`<sup>Required</sup> <a name="destination_table_name" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationTableName"></a>

```python
destination_table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelIcebergDestinationConfigurationDestinationTableListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>

---


### MskChannelIcebergDestinationConfigurationOutputReference <a name="MskChannelIcebergDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelIcebergDestinationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putCatalog">put_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDeadLetterQueueS3">put_dead_letter_queue_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDestinationTableList">put_destination_table_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putSchemaEvolution">put_schema_evolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putTableCreation">put_table_creation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetAppendOnly">reset_append_only</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetCompressionType">reset_compression_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetDataFreshnessInSeconds">reset_data_freshness_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetDeadLetterQueueS3">reset_dead_letter_queue_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetDestinationTableList">reset_destination_table_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetSchemaEvolution">reset_schema_evolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetServiceExecutionRoleArn">reset_service_execution_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetTableCreation">reset_table_creation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_catalog` <a name="put_catalog" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putCatalog"></a>

```python
def put_catalog(
  catalog_arn: str = None,
  warehouse_location: str = None
) -> None
```

###### `catalog_arn`<sup>Optional</sup> <a name="catalog_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putCatalog.parameter.catalogArn"></a>

- *Type:* str

The ARN of the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#catalog_arn MskChannel#catalog_arn}

---

###### `warehouse_location`<sup>Optional</sup> <a name="warehouse_location" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putCatalog.parameter.warehouseLocation"></a>

- *Type:* str

The warehouse location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#warehouse_location MskChannel#warehouse_location}

---

##### `put_dead_letter_queue_s3` <a name="put_dead_letter_queue_s3" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDeadLetterQueueS3"></a>

```python
def put_dead_letter_queue_s3(
  bucket_arn: str = None,
  error_output_prefix: str = None,
  expected_bucket_owner: str = None
) -> None
```

###### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDeadLetterQueueS3.parameter.bucketArn"></a>

- *Type:* str

The ARN of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}

---

###### `error_output_prefix`<sup>Optional</sup> <a name="error_output_prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDeadLetterQueueS3.parameter.errorOutputPrefix"></a>

- *Type:* str

The error output prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}

---

###### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDeadLetterQueueS3.parameter.expectedBucketOwner"></a>

- *Type:* str

Optional 12-digit AWS account ID expected to own the dead-letter S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}

---

##### `put_destination_table_list` <a name="put_destination_table_list" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDestinationTableList"></a>

```python
def put_destination_table_list(
  value: IResolvable | typing.List[MskChannelIcebergDestinationConfigurationDestinationTableListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDestinationTableList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>]

---

##### `put_schema_evolution` <a name="put_schema_evolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putSchemaEvolution"></a>

```python
def put_schema_evolution(
  enable_schema_evolution: bool | IResolvable = None
) -> None
```

###### `enable_schema_evolution`<sup>Optional</sup> <a name="enable_schema_evolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putSchemaEvolution.parameter.enableSchemaEvolution"></a>

- *Type:* bool | cdktn.IResolvable

Whether schema evolution is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#enable_schema_evolution MskChannel#enable_schema_evolution}

---

##### `put_table_creation` <a name="put_table_creation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putTableCreation"></a>

```python
def put_table_creation(
  enable_table_creation: bool | IResolvable = None
) -> None
```

###### `enable_table_creation`<sup>Optional</sup> <a name="enable_table_creation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putTableCreation.parameter.enableTableCreation"></a>

- *Type:* bool | cdktn.IResolvable

Whether table creation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#enable_table_creation MskChannel#enable_table_creation}

---

##### `reset_append_only` <a name="reset_append_only" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetAppendOnly"></a>

```python
def reset_append_only() -> None
```

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_compression_type` <a name="reset_compression_type" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetCompressionType"></a>

```python
def reset_compression_type() -> None
```

##### `reset_data_freshness_in_seconds` <a name="reset_data_freshness_in_seconds" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetDataFreshnessInSeconds"></a>

```python
def reset_data_freshness_in_seconds() -> None
```

##### `reset_dead_letter_queue_s3` <a name="reset_dead_letter_queue_s3" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetDeadLetterQueueS3"></a>

```python
def reset_dead_letter_queue_s3() -> None
```

##### `reset_destination_table_list` <a name="reset_destination_table_list" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetDestinationTableList"></a>

```python
def reset_destination_table_list() -> None
```

##### `reset_schema_evolution` <a name="reset_schema_evolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetSchemaEvolution"></a>

```python
def reset_schema_evolution() -> None
```

##### `reset_service_execution_role_arn` <a name="reset_service_execution_role_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetServiceExecutionRoleArn"></a>

```python
def reset_service_execution_role_arn() -> None
```

##### `reset_table_creation` <a name="reset_table_creation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetTableCreation"></a>

```python
def reset_table_creation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference">MskChannelIcebergDestinationConfigurationCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.deadLetterQueueS3">dead_letter_queue_s3</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.destinationTableList">destination_table_list</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList">MskChannelIcebergDestinationConfigurationDestinationTableListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.schemaEvolution">schema_evolution</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference">MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.tableCreation">table_creation</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference">MskChannelIcebergDestinationConfigurationTableCreationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.appendOnlyInput">append_only_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.catalogInput">catalog_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.compressionTypeInput">compression_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput">data_freshness_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.deadLetterQueueS3Input">dead_letter_queue_s3_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.destinationTableListInput">destination_table_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.schemaEvolutionInput">schema_evolution_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.serviceExecutionRoleArnInput">service_execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.tableCreationInput">table_creation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.appendOnly">append_only</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.compressionType">compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.dataFreshnessInSeconds">data_freshness_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.catalog"></a>

```python
catalog: MskChannelIcebergDestinationConfigurationCatalogOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference">MskChannelIcebergDestinationConfigurationCatalogOutputReference</a>

---

##### `dead_letter_queue_s3`<sup>Required</sup> <a name="dead_letter_queue_s3" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.deadLetterQueueS3"></a>

```python
dead_letter_queue_s3: MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference</a>

---

##### `destination_table_list`<sup>Required</sup> <a name="destination_table_list" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.destinationTableList"></a>

```python
destination_table_list: MskChannelIcebergDestinationConfigurationDestinationTableListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList">MskChannelIcebergDestinationConfigurationDestinationTableListStructList</a>

---

##### `schema_evolution`<sup>Required</sup> <a name="schema_evolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.schemaEvolution"></a>

```python
schema_evolution: MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference">MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference</a>

---

##### `table_creation`<sup>Required</sup> <a name="table_creation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.tableCreation"></a>

```python
table_creation: MskChannelIcebergDestinationConfigurationTableCreationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference">MskChannelIcebergDestinationConfigurationTableCreationOutputReference</a>

---

##### `append_only_input`<sup>Optional</sup> <a name="append_only_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.appendOnlyInput"></a>

```python
append_only_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.catalogInput"></a>

```python
catalog_input: IResolvable | MskChannelIcebergDestinationConfigurationCatalog
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a>

---

##### `compression_type_input`<sup>Optional</sup> <a name="compression_type_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.compressionTypeInput"></a>

```python
compression_type_input: str
```

- *Type:* str

---

##### `data_freshness_in_seconds_input`<sup>Optional</sup> <a name="data_freshness_in_seconds_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput"></a>

```python
data_freshness_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dead_letter_queue_s3_input`<sup>Optional</sup> <a name="dead_letter_queue_s3_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.deadLetterQueueS3Input"></a>

```python
dead_letter_queue_s3_input: IResolvable | MskChannelIcebergDestinationConfigurationDeadLetterQueueS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a>

---

##### `destination_table_list_input`<sup>Optional</sup> <a name="destination_table_list_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.destinationTableListInput"></a>

```python
destination_table_list_input: IResolvable | typing.List[MskChannelIcebergDestinationConfigurationDestinationTableListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>]

---

##### `schema_evolution_input`<sup>Optional</sup> <a name="schema_evolution_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.schemaEvolutionInput"></a>

```python
schema_evolution_input: IResolvable | MskChannelIcebergDestinationConfigurationSchemaEvolution
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a>

---

##### `service_execution_role_arn_input`<sup>Optional</sup> <a name="service_execution_role_arn_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.serviceExecutionRoleArnInput"></a>

```python
service_execution_role_arn_input: str
```

- *Type:* str

---

##### `table_creation_input`<sup>Optional</sup> <a name="table_creation_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.tableCreationInput"></a>

```python
table_creation_input: IResolvable | MskChannelIcebergDestinationConfigurationTableCreation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a>

---

##### `append_only`<sup>Required</sup> <a name="append_only" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.appendOnly"></a>

```python
append_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `compression_type`<sup>Required</sup> <a name="compression_type" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

---

##### `data_freshness_in_seconds`<sup>Required</sup> <a name="data_freshness_in_seconds" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.dataFreshnessInSeconds"></a>

```python
data_freshness_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_execution_role_arn`<sup>Required</sup> <a name="service_execution_role_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.serviceExecutionRoleArn"></a>

```python
service_execution_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelIcebergDestinationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a>

---


### MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference <a name="MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.resetEnableSchemaEvolution">reset_enable_schema_evolution</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_schema_evolution` <a name="reset_enable_schema_evolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.resetEnableSchemaEvolution"></a>

```python
def reset_enable_schema_evolution() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.enableSchemaEvolutionInput">enable_schema_evolution_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.enableSchemaEvolution">enable_schema_evolution</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_schema_evolution_input`<sup>Optional</sup> <a name="enable_schema_evolution_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.enableSchemaEvolutionInput"></a>

```python
enable_schema_evolution_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_schema_evolution`<sup>Required</sup> <a name="enable_schema_evolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.enableSchemaEvolution"></a>

```python
enable_schema_evolution: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelIcebergDestinationConfigurationSchemaEvolution
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a>

---


### MskChannelIcebergDestinationConfigurationTableCreationOutputReference <a name="MskChannelIcebergDestinationConfigurationTableCreationOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.resetEnableTableCreation">reset_enable_table_creation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_table_creation` <a name="reset_enable_table_creation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.resetEnableTableCreation"></a>

```python
def reset_enable_table_creation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.enableTableCreationInput">enable_table_creation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.enableTableCreation">enable_table_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_table_creation_input`<sup>Optional</sup> <a name="enable_table_creation_input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.enableTableCreationInput"></a>

```python
enable_table_creation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_table_creation`<sup>Required</sup> <a name="enable_table_creation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.enableTableCreation"></a>

```python
enable_table_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelIcebergDestinationConfigurationTableCreation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a>

---


### MskChannelLoggingInfoCloudwatchLogsOutputReference <a name="MskChannelLoggingInfoCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetLogGroup">reset_log_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_log_group` <a name="reset_log_group" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetLogGroup"></a>

```python
def reset_log_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelLoggingInfoCloudwatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>

---


### MskChannelLoggingInfoFirehoseOutputReference <a name="MskChannelLoggingInfoFirehoseOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelLoggingInfoFirehoseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetDeliveryStream">reset_delivery_stream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delivery_stream` <a name="reset_delivery_stream" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetDeliveryStream"></a>

```python
def reset_delivery_stream() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStreamInput">delivery_stream_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStream">delivery_stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_stream_input`<sup>Optional</sup> <a name="delivery_stream_input" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStreamInput"></a>

```python
delivery_stream_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delivery_stream`<sup>Required</sup> <a name="delivery_stream" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStream"></a>

```python
delivery_stream: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelLoggingInfoFirehose
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>

---


### MskChannelLoggingInfoOutputReference <a name="MskChannelLoggingInfoOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelLoggingInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs">put_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose">put_firehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resetCloudwatchLogs">reset_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resetFirehose">reset_firehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logs` <a name="put_cloudwatch_logs" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs"></a>

```python
def put_cloudwatch_logs(
  enabled: bool | IResolvable = None,
  log_group: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether CloudWatch Logs logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#enabled MskChannel#enabled}

---

###### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs.parameter.logGroup"></a>

- *Type:* str

The CloudWatch log group for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#log_group MskChannel#log_group}

---

##### `put_firehose` <a name="put_firehose" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose"></a>

```python
def put_firehose(
  delivery_stream: str = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `delivery_stream`<sup>Optional</sup> <a name="delivery_stream" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose.parameter.deliveryStream"></a>

- *Type:* str

The Firehose delivery stream for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#delivery_stream MskChannel#delivery_stream}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Firehose logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#enabled MskChannel#enabled}

---

##### `put_s3` <a name="put_s3" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putS3"></a>

```python
def put_s3(
  bucket: str = None,
  enabled: bool | IResolvable = None,
  prefix: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putS3.parameter.bucket"></a>

- *Type:* str

The name of the S3 bucket for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#bucket MskChannel#bucket}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putS3.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether S3 logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#enabled MskChannel#enabled}

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putS3.parameter.prefix"></a>

- *Type:* str

The S3 prefix for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#prefix MskChannel#prefix}

---

##### `reset_cloudwatch_logs` <a name="reset_cloudwatch_logs" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resetCloudwatchLogs"></a>

```python
def reset_cloudwatch_logs() -> None
```

##### `reset_firehose` <a name="reset_firehose" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resetFirehose"></a>

```python
def reset_firehose() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference">MskChannelLoggingInfoCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference">MskChannelLoggingInfoFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference">MskChannelLoggingInfoS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogsInput">cloudwatch_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.firehoseInput">firehose_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.s3Input">s3_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs`<sup>Required</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: MskChannelLoggingInfoCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference">MskChannelLoggingInfoCloudwatchLogsOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.firehose"></a>

```python
firehose: MskChannelLoggingInfoFirehoseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference">MskChannelLoggingInfoFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.s3"></a>

```python
s3: MskChannelLoggingInfoS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference">MskChannelLoggingInfoS3OutputReference</a>

---

##### `cloudwatch_logs_input`<sup>Optional</sup> <a name="cloudwatch_logs_input" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogsInput"></a>

```python
cloudwatch_logs_input: IResolvable | MskChannelLoggingInfoCloudwatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>

---

##### `firehose_input`<sup>Optional</sup> <a name="firehose_input" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.firehoseInput"></a>

```python
firehose_input: IResolvable | MskChannelLoggingInfoFirehose
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.s3Input"></a>

```python
s3_input: IResolvable | MskChannelLoggingInfoS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelLoggingInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>

---


### MskChannelLoggingInfoS3OutputReference <a name="MskChannelLoggingInfoS3OutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelLoggingInfoS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelLoggingInfoS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>

---


### MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference <a name="MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resetBucketArn">reset_bucket_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix">reset_error_output_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_arn` <a name="reset_bucket_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resetBucketArn"></a>

```python
def reset_bucket_arn() -> None
```

##### `reset_error_output_prefix` <a name="reset_error_output_prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix"></a>

```python
def reset_error_output_prefix() -> None
```

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArnInput">bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput">error_output_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefix">error_output_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn_input`<sup>Optional</sup> <a name="bucket_arn_input" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArnInput"></a>

```python
bucket_arn_input: str
```

- *Type:* str

---

##### `error_output_prefix_input`<sup>Optional</sup> <a name="error_output_prefix_input" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput"></a>

```python
error_output_prefix_input: str
```

- *Type:* str

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `error_output_prefix`<sup>Required</sup> <a name="error_output_prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefix"></a>

```python
error_output_prefix: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelS3DestinationConfigurationDeadLetterQueueS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a>

---


### MskChannelS3DestinationConfigurationOutputReference <a name="MskChannelS3DestinationConfigurationOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelS3DestinationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3">put_dead_letter_queue_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putStorage">put_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetDataFreshnessInSeconds">reset_data_freshness_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetDeadLetterQueueS3">reset_dead_letter_queue_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetServiceExecutionRoleArn">reset_service_execution_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetStorage">reset_storage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dead_letter_queue_s3` <a name="put_dead_letter_queue_s3" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3"></a>

```python
def put_dead_letter_queue_s3(
  bucket_arn: str = None,
  error_output_prefix: str = None,
  expected_bucket_owner: str = None
) -> None
```

###### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3.parameter.bucketArn"></a>

- *Type:* str

The ARN of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}

---

###### `error_output_prefix`<sup>Optional</sup> <a name="error_output_prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3.parameter.errorOutputPrefix"></a>

- *Type:* str

The error output prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}

---

###### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3.parameter.expectedBucketOwner"></a>

- *Type:* str

Optional 12-digit AWS account ID expected to own the dead-letter S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}

---

##### `put_storage` <a name="put_storage" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putStorage"></a>

```python
def put_storage(
  bucket_arn: str = None,
  compression_type: str = None,
  expected_bucket_owner: str = None,
  output_key_template: str = None,
  output_prefix: str = None,
  storage_class: str = None
) -> None
```

###### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putStorage.parameter.bucketArn"></a>

- *Type:* str

ARN of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}

---

###### `compression_type`<sup>Optional</sup> <a name="compression_type" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putStorage.parameter.compressionType"></a>

- *Type:* str

S3 compression type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}

---

###### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putStorage.parameter.expectedBucketOwner"></a>

- *Type:* str

Optional 12-digit AWS account ID expected to own the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}

---

###### `output_key_template`<sup>Optional</sup> <a name="output_key_template" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putStorage.parameter.outputKeyTemplate"></a>

- *Type:* str

Template for S3 key for output objects, used for partitioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#output_key_template MskChannel#output_key_template}

---

###### `output_prefix`<sup>Optional</sup> <a name="output_prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putStorage.parameter.outputPrefix"></a>

- *Type:* str

Optional prefix for output objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#output_prefix MskChannel#output_prefix}

---

###### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putStorage.parameter.storageClass"></a>

- *Type:* str

S3 storage class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#storage_class MskChannel#storage_class}

---

##### `reset_data_freshness_in_seconds` <a name="reset_data_freshness_in_seconds" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetDataFreshnessInSeconds"></a>

```python
def reset_data_freshness_in_seconds() -> None
```

##### `reset_dead_letter_queue_s3` <a name="reset_dead_letter_queue_s3" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetDeadLetterQueueS3"></a>

```python
def reset_dead_letter_queue_s3() -> None
```

##### `reset_service_execution_role_arn` <a name="reset_service_execution_role_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetServiceExecutionRoleArn"></a>

```python
def reset_service_execution_role_arn() -> None
```

##### `reset_storage` <a name="reset_storage" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetStorage"></a>

```python
def reset_storage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3">dead_letter_queue_s3</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference">MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference">MskChannelS3DestinationConfigurationStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput">data_freshness_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3Input">dead_letter_queue_s3_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.serviceExecutionRoleArnInput">service_execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.storageInput">storage_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSeconds">data_freshness_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dead_letter_queue_s3`<sup>Required</sup> <a name="dead_letter_queue_s3" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3"></a>

```python
dead_letter_queue_s3: MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference">MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.storage"></a>

```python
storage: MskChannelS3DestinationConfigurationStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference">MskChannelS3DestinationConfigurationStorageOutputReference</a>

---

##### `data_freshness_in_seconds_input`<sup>Optional</sup> <a name="data_freshness_in_seconds_input" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput"></a>

```python
data_freshness_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dead_letter_queue_s3_input`<sup>Optional</sup> <a name="dead_letter_queue_s3_input" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3Input"></a>

```python
dead_letter_queue_s3_input: IResolvable | MskChannelS3DestinationConfigurationDeadLetterQueueS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a>

---

##### `service_execution_role_arn_input`<sup>Optional</sup> <a name="service_execution_role_arn_input" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.serviceExecutionRoleArnInput"></a>

```python
service_execution_role_arn_input: str
```

- *Type:* str

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.storageInput"></a>

```python
storage_input: IResolvable | MskChannelS3DestinationConfigurationStorage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a>

---

##### `data_freshness_in_seconds`<sup>Required</sup> <a name="data_freshness_in_seconds" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSeconds"></a>

```python
data_freshness_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_execution_role_arn`<sup>Required</sup> <a name="service_execution_role_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.serviceExecutionRoleArn"></a>

```python
service_execution_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelS3DestinationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a>

---


### MskChannelS3DestinationConfigurationStorageOutputReference <a name="MskChannelS3DestinationConfigurationStorageOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetBucketArn">reset_bucket_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetCompressionType">reset_compression_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetOutputKeyTemplate">reset_output_key_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetOutputPrefix">reset_output_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetStorageClass">reset_storage_class</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_arn` <a name="reset_bucket_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetBucketArn"></a>

```python
def reset_bucket_arn() -> None
```

##### `reset_compression_type` <a name="reset_compression_type" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetCompressionType"></a>

```python
def reset_compression_type() -> None
```

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```

##### `reset_output_key_template` <a name="reset_output_key_template" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetOutputKeyTemplate"></a>

```python
def reset_output_key_template() -> None
```

##### `reset_output_prefix` <a name="reset_output_prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetOutputPrefix"></a>

```python
def reset_output_prefix() -> None
```

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.bucketArnInput">bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.compressionTypeInput">compression_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputKeyTemplateInput">output_key_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputPrefixInput">output_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.compressionType">compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputKeyTemplate">output_key_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputPrefix">output_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn_input`<sup>Optional</sup> <a name="bucket_arn_input" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.bucketArnInput"></a>

```python
bucket_arn_input: str
```

- *Type:* str

---

##### `compression_type_input`<sup>Optional</sup> <a name="compression_type_input" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.compressionTypeInput"></a>

```python
compression_type_input: str
```

- *Type:* str

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `output_key_template_input`<sup>Optional</sup> <a name="output_key_template_input" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputKeyTemplateInput"></a>

```python
output_key_template_input: str
```

- *Type:* str

---

##### `output_prefix_input`<sup>Optional</sup> <a name="output_prefix_input" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputPrefixInput"></a>

```python
output_prefix_input: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `compression_type`<sup>Required</sup> <a name="compression_type" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `output_key_template`<sup>Required</sup> <a name="output_key_template" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputKeyTemplate"></a>

```python
output_key_template: str
```

- *Type:* str

---

##### `output_prefix`<sup>Required</sup> <a name="output_prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputPrefix"></a>

```python
output_prefix: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelS3DestinationConfigurationStorage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a>

---


### MskChannelStateInfoOutputReference <a name="MskChannelStateInfoOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelStateInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfo">MskChannelStateInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.internalValue"></a>

```python
internal_value: MskChannelStateInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfo">MskChannelStateInfo</a>

---


### MskChannelTopicConfigurationListRecordConverterOutputReference <a name="MskChannelTopicConfigurationListRecordConverterOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.valueConverterInput">value_converter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.valueConverter">value_converter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_converter_input`<sup>Optional</sup> <a name="value_converter_input" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.valueConverterInput"></a>

```python
value_converter_input: str
```

- *Type:* str

---

##### `value_converter`<sup>Required</sup> <a name="value_converter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.valueConverter"></a>

```python
value_converter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelTopicConfigurationListRecordConverter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a>

---


### MskChannelTopicConfigurationListRecordSchemaOutputReference <a name="MskChannelTopicConfigurationListRecordSchemaOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.resetGsrArn">reset_gsr_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gsr_arn` <a name="reset_gsr_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.resetGsrArn"></a>

```python
def reset_gsr_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.gsrArnInput">gsr_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.gsrArn">gsr_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gsr_arn_input`<sup>Optional</sup> <a name="gsr_arn_input" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.gsrArnInput"></a>

```python
gsr_arn_input: str
```

- *Type:* str

---

##### `gsr_arn`<sup>Required</sup> <a name="gsr_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.gsrArn"></a>

```python
gsr_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelTopicConfigurationListRecordSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a>

---


### MskChannelTopicConfigurationListStructList <a name="MskChannelTopicConfigurationListStructList" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelTopicConfigurationListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelTopicConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelTopicConfigurationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>]

---


### MskChannelTopicConfigurationListStructOutputReference <a name="MskChannelTopicConfigurationListStructOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import msk_channel

mskChannel.MskChannelTopicConfigurationListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.putRecordConverter">put_record_converter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.putRecordSchema">put_record_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.resetRecordSchema">reset_record_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_record_converter` <a name="put_record_converter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.putRecordConverter"></a>

```python
def put_record_converter(
  value_converter: str
) -> None
```

###### `value_converter`<sup>Required</sup> <a name="value_converter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.putRecordConverter.parameter.valueConverter"></a>

- *Type:* str

Value converter for topic data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#value_converter MskChannel#value_converter}

---

##### `put_record_schema` <a name="put_record_schema" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.putRecordSchema"></a>

```python
def put_record_schema(
  gsr_arn: str = None
) -> None
```

###### `gsr_arn`<sup>Optional</sup> <a name="gsr_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.putRecordSchema.parameter.gsrArn"></a>

- *Type:* str

ARN of Glue Schema Registry resource used for table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_channel#gsr_arn MskChannel#gsr_arn}

---

##### `reset_record_schema` <a name="reset_record_schema" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.resetRecordSchema"></a>

```python
def reset_record_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordConverter">record_converter</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference">MskChannelTopicConfigurationListRecordConverterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordSchema">record_schema</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference">MskChannelTopicConfigurationListRecordSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordConverterInput">record_converter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordSchemaInput">record_schema_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `record_converter`<sup>Required</sup> <a name="record_converter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordConverter"></a>

```python
record_converter: MskChannelTopicConfigurationListRecordConverterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference">MskChannelTopicConfigurationListRecordConverterOutputReference</a>

---

##### `record_schema`<sup>Required</sup> <a name="record_schema" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordSchema"></a>

```python
record_schema: MskChannelTopicConfigurationListRecordSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference">MskChannelTopicConfigurationListRecordSchemaOutputReference</a>

---

##### `record_converter_input`<sup>Optional</sup> <a name="record_converter_input" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordConverterInput"></a>

```python
record_converter_input: IResolvable | MskChannelTopicConfigurationListRecordConverter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a>

---

##### `record_schema_input`<sup>Optional</sup> <a name="record_schema_input" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordSchemaInput"></a>

```python
record_schema_input: IResolvable | MskChannelTopicConfigurationListRecordSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a>

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelTopicConfigurationListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>

---



