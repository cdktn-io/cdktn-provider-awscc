# `configDeliveryChannel` Submodule <a name="`configDeliveryChannel` Submodule" id="@cdktn/provider-awscc.configDeliveryChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigDeliveryChannel <a name="ConfigDeliveryChannel" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel awscc_config_delivery_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer"></a>

```python
from cdktn_provider_awscc import config_delivery_channel

configDeliveryChannel.ConfigDeliveryChannel(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  s3_bucket_name: str,
  config_snapshot_delivery_properties: ConfigDeliveryChannelConfigSnapshotDeliveryProperties = None,
  name: str = None,
  s3_key_prefix: str = None,
  s3_kms_key_arn: str = None,
  sns_topic_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.configSnapshotDeliveryProperties">config_snapshot_delivery_properties</a></code> | <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a></code> | The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the delivery channel. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | The prefix for the specified Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3KmsKeyArn">s3_kms_key_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3BucketName"></a>

- *Type:* str

The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}

---

##### `config_snapshot_delivery_properties`<sup>Optional</sup> <a name="config_snapshot_delivery_properties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.configSnapshotDeliveryProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#config_snapshot_delivery_properties ConfigDeliveryChannel#config_snapshot_delivery_properties}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.name"></a>

- *Type:* str

The name of the delivery channel.

By default, AWS Config assigns the name "default" when creating the delivery channel. To change the delivery channel name, you must use the DeleteDeliveryChannel action to delete your current delivery channel, and then you must use the PutDeliveryChannel command to create a delivery channel that has the desired name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#name ConfigDeliveryChannel#name}

---

##### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3KeyPrefix"></a>

- *Type:* str

The prefix for the specified Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}

---

##### `s3_kms_key_arn`<sup>Optional</sup> <a name="s3_kms_key_arn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3KmsKeyArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config.

Must belong to the same Region as the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.snsTopicArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.putConfigSnapshotDeliveryProperties">put_config_snapshot_delivery_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetConfigSnapshotDeliveryProperties">reset_config_snapshot_delivery_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KeyPrefix">reset_s3_key_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KmsKeyArn">reset_s3_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetSnsTopicArn">reset_sns_topic_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config_snapshot_delivery_properties` <a name="put_config_snapshot_delivery_properties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.putConfigSnapshotDeliveryProperties"></a>

```python
def put_config_snapshot_delivery_properties(
  delivery_frequency: str = None
) -> None
```

###### `delivery_frequency`<sup>Optional</sup> <a name="delivery_frequency" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.putConfigSnapshotDeliveryProperties.parameter.deliveryFrequency"></a>

- *Type:* str

The frequency with which AWS Config delivers configuration snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#delivery_frequency ConfigDeliveryChannel#delivery_frequency}

---

##### `reset_config_snapshot_delivery_properties` <a name="reset_config_snapshot_delivery_properties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetConfigSnapshotDeliveryProperties"></a>

```python
def reset_config_snapshot_delivery_properties() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_s3_key_prefix` <a name="reset_s3_key_prefix" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KeyPrefix"></a>

```python
def reset_s3_key_prefix() -> None
```

##### `reset_s3_kms_key_arn` <a name="reset_s3_kms_key_arn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KmsKeyArn"></a>

```python
def reset_s3_kms_key_arn() -> None
```

##### `reset_sns_topic_arn` <a name="reset_sns_topic_arn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetSnsTopicArn"></a>

```python
def reset_sns_topic_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConfigDeliveryChannel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isConstruct"></a>

```python
from cdktn_provider_awscc import config_delivery_channel

configDeliveryChannel.ConfigDeliveryChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement"></a>

```python
from cdktn_provider_awscc import config_delivery_channel

configDeliveryChannel.ConfigDeliveryChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource"></a>

```python
from cdktn_provider_awscc import config_delivery_channel

configDeliveryChannel.ConfigDeliveryChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import config_delivery_channel

configDeliveryChannel.ConfigDeliveryChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConfigDeliveryChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConfigDeliveryChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConfigDeliveryChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigDeliveryChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryProperties">config_snapshot_delivery_properties</a></code> | <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference">ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryPropertiesInput">config_snapshot_delivery_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefixInput">s3_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArnInput">s3_kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArnInput">sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArn">s3_kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config_snapshot_delivery_properties`<sup>Required</sup> <a name="config_snapshot_delivery_properties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryProperties"></a>

```python
config_snapshot_delivery_properties: ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference">ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `config_snapshot_delivery_properties_input`<sup>Optional</sup> <a name="config_snapshot_delivery_properties_input" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryPropertiesInput"></a>

```python
config_snapshot_delivery_properties_input: IResolvable | ConfigDeliveryChannelConfigSnapshotDeliveryProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `s3_key_prefix_input`<sup>Optional</sup> <a name="s3_key_prefix_input" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefixInput"></a>

```python
s3_key_prefix_input: str
```

- *Type:* str

---

##### `s3_kms_key_arn_input`<sup>Optional</sup> <a name="s3_kms_key_arn_input" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArnInput"></a>

```python
s3_kms_key_arn_input: str
```

- *Type:* str

---

##### `sns_topic_arn_input`<sup>Optional</sup> <a name="sns_topic_arn_input" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArnInput"></a>

```python
sns_topic_arn_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_key_prefix`<sup>Required</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

---

##### `s3_kms_key_arn`<sup>Required</sup> <a name="s3_kms_key_arn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArn"></a>

```python
s3_kms_key_arn: str
```

- *Type:* str

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigDeliveryChannelConfig <a name="ConfigDeliveryChannelConfig" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import config_delivery_channel

configDeliveryChannel.ConfigDeliveryChannelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  s3_bucket_name: str,
  config_snapshot_delivery_properties: ConfigDeliveryChannelConfigSnapshotDeliveryProperties = None,
  name: str = None,
  s3_key_prefix: str = None,
  s3_kms_key_arn: str = None,
  sns_topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.configSnapshotDeliveryProperties">config_snapshot_delivery_properties</a></code> | <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a></code> | The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.name">name</a></code> | <code>str</code> | The name of the delivery channel. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | The prefix for the specified Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KmsKeyArn">s3_kms_key_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}

---

##### `config_snapshot_delivery_properties`<sup>Optional</sup> <a name="config_snapshot_delivery_properties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.configSnapshotDeliveryProperties"></a>

```python
config_snapshot_delivery_properties: ConfigDeliveryChannelConfigSnapshotDeliveryProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#config_snapshot_delivery_properties ConfigDeliveryChannel#config_snapshot_delivery_properties}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the delivery channel.

By default, AWS Config assigns the name "default" when creating the delivery channel. To change the delivery channel name, you must use the DeleteDeliveryChannel action to delete your current delivery channel, and then you must use the PutDeliveryChannel command to create a delivery channel that has the desired name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#name ConfigDeliveryChannel#name}

---

##### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

The prefix for the specified Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}

---

##### `s3_kms_key_arn`<sup>Optional</sup> <a name="s3_kms_key_arn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KmsKeyArn"></a>

```python
s3_kms_key_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config.

Must belong to the same Region as the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}

---

### ConfigDeliveryChannelConfigSnapshotDeliveryProperties <a name="ConfigDeliveryChannelConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties.Initializer"></a>

```python
from cdktn_provider_awscc import config_delivery_channel

configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties(
  delivery_frequency: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties.property.deliveryFrequency">delivery_frequency</a></code> | <code>str</code> | The frequency with which AWS Config delivers configuration snapshots. |

---

##### `delivery_frequency`<sup>Optional</sup> <a name="delivery_frequency" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties.property.deliveryFrequency"></a>

```python
delivery_frequency: str
```

- *Type:* str

The frequency with which AWS Config delivers configuration snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#delivery_frequency ConfigDeliveryChannel#delivery_frequency}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference <a name="ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_delivery_channel

configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resetDeliveryFrequency">reset_delivery_frequency</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delivery_frequency` <a name="reset_delivery_frequency" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resetDeliveryFrequency"></a>

```python
def reset_delivery_frequency() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequencyInput">delivery_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency">delivery_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_frequency_input`<sup>Optional</sup> <a name="delivery_frequency_input" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequencyInput"></a>

```python
delivery_frequency_input: str
```

- *Type:* str

---

##### `delivery_frequency`<sup>Required</sup> <a name="delivery_frequency" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency"></a>

```python
delivery_frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigDeliveryChannelConfigSnapshotDeliveryProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

---



