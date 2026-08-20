# `lookoutequipmentInferenceScheduler` Submodule <a name="`lookoutequipmentInferenceScheduler` Submodule" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LookoutequipmentInferenceScheduler <a name="LookoutequipmentInferenceScheduler" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler awscc_lookoutequipment_inference_scheduler}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_input_configuration: LookoutequipmentInferenceSchedulerDataInputConfiguration,
  data_output_configuration: LookoutequipmentInferenceSchedulerDataOutputConfiguration,
  data_upload_frequency: str,
  model_name: str,
  role_arn: str,
  data_delay_offset_in_minutes: typing.Union[int, float] = None,
  inference_scheduler_name: str = None,
  server_side_kms_key_id: str = None,
  tags: IResolvable | typing.List[LookoutequipmentInferenceSchedulerTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dataInputConfiguration">data_input_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a></code> | Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dataOutputConfiguration">data_output_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a></code> | Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dataUploadFrequency">data_upload_frequency</a></code> | <code>str</code> | How often data is uploaded to the source S3 bucket for the input data. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.modelName">model_name</a></code> | <code>str</code> | The name of the previously trained ML model being used to create the inference scheduler. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dataDelayOffsetInMinutes">data_delay_offset_in_minutes</a></code> | <code>typing.Union[int, float]</code> | A period of time (in minutes) by which inference on the data is delayed after the data starts. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.inferenceSchedulerName">inference_scheduler_name</a></code> | <code>str</code> | The name of the inference scheduler being created. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.serverSideKmsKeyId">server_side_kms_key_id</a></code> | <code>str</code> | Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>]</code> | Any tags associated with the inference scheduler. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_input_configuration`<sup>Required</sup> <a name="data_input_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dataInputConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a>

Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#data_input_configuration LookoutequipmentInferenceScheduler#data_input_configuration}

---

##### `data_output_configuration`<sup>Required</sup> <a name="data_output_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dataOutputConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#data_output_configuration LookoutequipmentInferenceScheduler#data_output_configuration}

---

##### `data_upload_frequency`<sup>Required</sup> <a name="data_upload_frequency" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dataUploadFrequency"></a>

- *Type:* str

How often data is uploaded to the source S3 bucket for the input data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#data_upload_frequency LookoutequipmentInferenceScheduler#data_upload_frequency}

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.modelName"></a>

- *Type:* str

The name of the previously trained ML model being used to create the inference scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#model_name LookoutequipmentInferenceScheduler#model_name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#role_arn LookoutequipmentInferenceScheduler#role_arn}

---

##### `data_delay_offset_in_minutes`<sup>Optional</sup> <a name="data_delay_offset_in_minutes" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dataDelayOffsetInMinutes"></a>

- *Type:* typing.Union[int, float]

A period of time (in minutes) by which inference on the data is delayed after the data starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#data_delay_offset_in_minutes LookoutequipmentInferenceScheduler#data_delay_offset_in_minutes}

---

##### `inference_scheduler_name`<sup>Optional</sup> <a name="inference_scheduler_name" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.inferenceSchedulerName"></a>

- *Type:* str

The name of the inference scheduler being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#inference_scheduler_name LookoutequipmentInferenceScheduler#inference_scheduler_name}

---

##### `server_side_kms_key_id`<sup>Optional</sup> <a name="server_side_kms_key_id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.serverSideKmsKeyId"></a>

- *Type:* str

Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#server_side_kms_key_id LookoutequipmentInferenceScheduler#server_side_kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>]

Any tags associated with the inference scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#tags LookoutequipmentInferenceScheduler#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataInputConfiguration">put_data_input_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataOutputConfiguration">put_data_output_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetDataDelayOffsetInMinutes">reset_data_delay_offset_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetInferenceSchedulerName">reset_inference_scheduler_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetServerSideKmsKeyId">reset_server_side_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_input_configuration` <a name="put_data_input_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataInputConfiguration"></a>

```python
def put_data_input_configuration(
  s3_input_configuration: LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration,
  inference_input_name_configuration: LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration = None,
  input_time_zone_offset: str = None
) -> None
```

###### `s3_input_configuration`<sup>Required</sup> <a name="s3_input_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataInputConfiguration.parameter.s3InputConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

Specifies configuration information for the input data for the inference, including input data S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#s3_input_configuration LookoutequipmentInferenceScheduler#s3_input_configuration}

---

###### `inference_input_name_configuration`<sup>Optional</sup> <a name="inference_input_name_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataInputConfiguration.parameter.inferenceInputNameConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

Specifies configuration information for the input data for the inference, including timestamp format and delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#inference_input_name_configuration LookoutequipmentInferenceScheduler#inference_input_name_configuration}

---

###### `input_time_zone_offset`<sup>Optional</sup> <a name="input_time_zone_offset" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataInputConfiguration.parameter.inputTimeZoneOffset"></a>

- *Type:* str

Indicates the difference between your time zone and Greenwich Mean Time (GMT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#input_time_zone_offset LookoutequipmentInferenceScheduler#input_time_zone_offset}

---

##### `put_data_output_configuration` <a name="put_data_output_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataOutputConfiguration"></a>

```python
def put_data_output_configuration(
  s3_output_configuration: LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration,
  kms_key_id: str = None
) -> None
```

###### `s3_output_configuration`<sup>Required</sup> <a name="s3_output_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataOutputConfiguration.parameter.s3OutputConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

Specifies configuration information for the output results from the inference, including output S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#s3_output_configuration LookoutequipmentInferenceScheduler#s3_output_configuration}

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataOutputConfiguration.parameter.kmsKeyId"></a>

- *Type:* str

The ID number for the AWS KMS key used to encrypt the inference output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#kms_key_id LookoutequipmentInferenceScheduler#kms_key_id}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LookoutequipmentInferenceSchedulerTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>]

---

##### `reset_data_delay_offset_in_minutes` <a name="reset_data_delay_offset_in_minutes" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetDataDelayOffsetInMinutes"></a>

```python
def reset_data_delay_offset_in_minutes() -> None
```

##### `reset_inference_scheduler_name` <a name="reset_inference_scheduler_name" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetInferenceSchedulerName"></a>

```python
def reset_inference_scheduler_name() -> None
```

##### `reset_server_side_kms_key_id` <a name="reset_server_side_kms_key_id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetServerSideKmsKeyId"></a>

```python
def reset_server_side_kms_key_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LookoutequipmentInferenceScheduler resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isConstruct"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LookoutequipmentInferenceScheduler resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LookoutequipmentInferenceScheduler to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LookoutequipmentInferenceScheduler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LookoutequipmentInferenceScheduler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataInputConfiguration">data_input_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataOutputConfiguration">data_output_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerArn">inference_scheduler_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList">LookoutequipmentInferenceSchedulerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutesInput">data_delay_offset_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataInputConfigurationInput">data_input_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataOutputConfigurationInput">data_output_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataUploadFrequencyInput">data_upload_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerNameInput">inference_scheduler_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.modelNameInput">model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.serverSideKmsKeyIdInput">server_side_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutes">data_delay_offset_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataUploadFrequency">data_upload_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerName">inference_scheduler_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.serverSideKmsKeyId">server_side_kms_key_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_input_configuration`<sup>Required</sup> <a name="data_input_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataInputConfiguration"></a>

```python
data_input_configuration: LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference</a>

---

##### `data_output_configuration`<sup>Required</sup> <a name="data_output_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataOutputConfiguration"></a>

```python
data_output_configuration: LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inference_scheduler_arn`<sup>Required</sup> <a name="inference_scheduler_arn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerArn"></a>

```python
inference_scheduler_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tags"></a>

```python
tags: LookoutequipmentInferenceSchedulerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList">LookoutequipmentInferenceSchedulerTagsList</a>

---

##### `data_delay_offset_in_minutes_input`<sup>Optional</sup> <a name="data_delay_offset_in_minutes_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutesInput"></a>

```python
data_delay_offset_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_input_configuration_input`<sup>Optional</sup> <a name="data_input_configuration_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataInputConfigurationInput"></a>

```python
data_input_configuration_input: IResolvable | LookoutequipmentInferenceSchedulerDataInputConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a>

---

##### `data_output_configuration_input`<sup>Optional</sup> <a name="data_output_configuration_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataOutputConfigurationInput"></a>

```python
data_output_configuration_input: IResolvable | LookoutequipmentInferenceSchedulerDataOutputConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

---

##### `data_upload_frequency_input`<sup>Optional</sup> <a name="data_upload_frequency_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataUploadFrequencyInput"></a>

```python
data_upload_frequency_input: str
```

- *Type:* str

---

##### `inference_scheduler_name_input`<sup>Optional</sup> <a name="inference_scheduler_name_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerNameInput"></a>

```python
inference_scheduler_name_input: str
```

- *Type:* str

---

##### `model_name_input`<sup>Optional</sup> <a name="model_name_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.modelNameInput"></a>

```python
model_name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `server_side_kms_key_id_input`<sup>Optional</sup> <a name="server_side_kms_key_id_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.serverSideKmsKeyIdInput"></a>

```python
server_side_kms_key_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LookoutequipmentInferenceSchedulerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>]

---

##### `data_delay_offset_in_minutes`<sup>Required</sup> <a name="data_delay_offset_in_minutes" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutes"></a>

```python
data_delay_offset_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_upload_frequency`<sup>Required</sup> <a name="data_upload_frequency" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataUploadFrequency"></a>

```python
data_upload_frequency: str
```

- *Type:* str

---

##### `inference_scheduler_name`<sup>Required</sup> <a name="inference_scheduler_name" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerName"></a>

```python
inference_scheduler_name: str
```

- *Type:* str

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `server_side_kms_key_id`<sup>Required</sup> <a name="server_side_kms_key_id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.serverSideKmsKeyId"></a>

```python
server_side_kms_key_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LookoutequipmentInferenceSchedulerConfig <a name="LookoutequipmentInferenceSchedulerConfig" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_input_configuration: LookoutequipmentInferenceSchedulerDataInputConfiguration,
  data_output_configuration: LookoutequipmentInferenceSchedulerDataOutputConfiguration,
  data_upload_frequency: str,
  model_name: str,
  role_arn: str,
  data_delay_offset_in_minutes: typing.Union[int, float] = None,
  inference_scheduler_name: str = None,
  server_side_kms_key_id: str = None,
  tags: IResolvable | typing.List[LookoutequipmentInferenceSchedulerTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataInputConfiguration">data_input_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a></code> | Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataOutputConfiguration">data_output_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a></code> | Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataUploadFrequency">data_upload_frequency</a></code> | <code>str</code> | How often data is uploaded to the source S3 bucket for the input data. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.modelName">model_name</a></code> | <code>str</code> | The name of the previously trained ML model being used to create the inference scheduler. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataDelayOffsetInMinutes">data_delay_offset_in_minutes</a></code> | <code>typing.Union[int, float]</code> | A period of time (in minutes) by which inference on the data is delayed after the data starts. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.inferenceSchedulerName">inference_scheduler_name</a></code> | <code>str</code> | The name of the inference scheduler being created. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.serverSideKmsKeyId">server_side_kms_key_id</a></code> | <code>str</code> | Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>]</code> | Any tags associated with the inference scheduler. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_input_configuration`<sup>Required</sup> <a name="data_input_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataInputConfiguration"></a>

```python
data_input_configuration: LookoutequipmentInferenceSchedulerDataInputConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a>

Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#data_input_configuration LookoutequipmentInferenceScheduler#data_input_configuration}

---

##### `data_output_configuration`<sup>Required</sup> <a name="data_output_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataOutputConfiguration"></a>

```python
data_output_configuration: LookoutequipmentInferenceSchedulerDataOutputConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#data_output_configuration LookoutequipmentInferenceScheduler#data_output_configuration}

---

##### `data_upload_frequency`<sup>Required</sup> <a name="data_upload_frequency" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataUploadFrequency"></a>

```python
data_upload_frequency: str
```

- *Type:* str

How often data is uploaded to the source S3 bucket for the input data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#data_upload_frequency LookoutequipmentInferenceScheduler#data_upload_frequency}

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

The name of the previously trained ML model being used to create the inference scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#model_name LookoutequipmentInferenceScheduler#model_name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#role_arn LookoutequipmentInferenceScheduler#role_arn}

---

##### `data_delay_offset_in_minutes`<sup>Optional</sup> <a name="data_delay_offset_in_minutes" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataDelayOffsetInMinutes"></a>

```python
data_delay_offset_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A period of time (in minutes) by which inference on the data is delayed after the data starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#data_delay_offset_in_minutes LookoutequipmentInferenceScheduler#data_delay_offset_in_minutes}

---

##### `inference_scheduler_name`<sup>Optional</sup> <a name="inference_scheduler_name" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.inferenceSchedulerName"></a>

```python
inference_scheduler_name: str
```

- *Type:* str

The name of the inference scheduler being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#inference_scheduler_name LookoutequipmentInferenceScheduler#inference_scheduler_name}

---

##### `server_side_kms_key_id`<sup>Optional</sup> <a name="server_side_kms_key_id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.serverSideKmsKeyId"></a>

```python
server_side_kms_key_id: str
```

- *Type:* str

Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#server_side_kms_key_id LookoutequipmentInferenceScheduler#server_side_kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LookoutequipmentInferenceSchedulerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>]

Any tags associated with the inference scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#tags LookoutequipmentInferenceScheduler#tags}

---

### LookoutequipmentInferenceSchedulerDataInputConfiguration <a name="LookoutequipmentInferenceSchedulerDataInputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration(
  s3_input_configuration: LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration,
  inference_input_name_configuration: LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration = None,
  input_time_zone_offset: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.s3InputConfiguration">s3_input_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a></code> | Specifies configuration information for the input data for the inference, including input data S3 location. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.inferenceInputNameConfiguration">inference_input_name_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a></code> | Specifies configuration information for the input data for the inference, including timestamp format and delimiter. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.inputTimeZoneOffset">input_time_zone_offset</a></code> | <code>str</code> | Indicates the difference between your time zone and Greenwich Mean Time (GMT). |

---

##### `s3_input_configuration`<sup>Required</sup> <a name="s3_input_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.s3InputConfiguration"></a>

```python
s3_input_configuration: LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

Specifies configuration information for the input data for the inference, including input data S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#s3_input_configuration LookoutequipmentInferenceScheduler#s3_input_configuration}

---

##### `inference_input_name_configuration`<sup>Optional</sup> <a name="inference_input_name_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.inferenceInputNameConfiguration"></a>

```python
inference_input_name_configuration: LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

Specifies configuration information for the input data for the inference, including timestamp format and delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#inference_input_name_configuration LookoutequipmentInferenceScheduler#inference_input_name_configuration}

---

##### `input_time_zone_offset`<sup>Optional</sup> <a name="input_time_zone_offset" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.inputTimeZoneOffset"></a>

```python
input_time_zone_offset: str
```

- *Type:* str

Indicates the difference between your time zone and Greenwich Mean Time (GMT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#input_time_zone_offset LookoutequipmentInferenceScheduler#input_time_zone_offset}

---

### LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration(
  component_timestamp_delimiter: str = None,
  timestamp_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.property.componentTimestampDelimiter">component_timestamp_delimiter</a></code> | <code>str</code> | Indicates the delimiter character used between items in the data. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | The format of the timestamp, whether Epoch time, or standard, with or without hyphens (-). |

---

##### `component_timestamp_delimiter`<sup>Optional</sup> <a name="component_timestamp_delimiter" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.property.componentTimestampDelimiter"></a>

```python
component_timestamp_delimiter: str
```

- *Type:* str

Indicates the delimiter character used between items in the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#component_timestamp_delimiter LookoutequipmentInferenceScheduler#component_timestamp_delimiter}

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

The format of the timestamp, whether Epoch time, or standard, with or without hyphens (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#timestamp_format LookoutequipmentInferenceScheduler#timestamp_format}

---

### LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration(
  bucket: str,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#bucket LookoutequipmentInferenceScheduler#bucket}. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#prefix LookoutequipmentInferenceScheduler#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#bucket LookoutequipmentInferenceScheduler#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#prefix LookoutequipmentInferenceScheduler#prefix}.

---

### LookoutequipmentInferenceSchedulerDataOutputConfiguration <a name="LookoutequipmentInferenceSchedulerDataOutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration(
  s3_output_configuration: LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration,
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.property.s3OutputConfiguration">s3_output_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a></code> | Specifies configuration information for the output results from the inference, including output S3 location. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ID number for the AWS KMS key used to encrypt the inference output. |

---

##### `s3_output_configuration`<sup>Required</sup> <a name="s3_output_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.property.s3OutputConfiguration"></a>

```python
s3_output_configuration: LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

Specifies configuration information for the output results from the inference, including output S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#s3_output_configuration LookoutequipmentInferenceScheduler#s3_output_configuration}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The ID number for the AWS KMS key used to encrypt the inference output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#kms_key_id LookoutequipmentInferenceScheduler#kms_key_id}

---

### LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration <a name="LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration(
  bucket: str,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#bucket LookoutequipmentInferenceScheduler#bucket}. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#prefix LookoutequipmentInferenceScheduler#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#bucket LookoutequipmentInferenceScheduler#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#prefix LookoutequipmentInferenceScheduler#prefix}.

---

### LookoutequipmentInferenceSchedulerTags <a name="LookoutequipmentInferenceSchedulerTags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.property.key">key</a></code> | <code>str</code> | The key for the specified tag. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.property.value">value</a></code> | <code>str</code> | The value for the specified tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key for the specified tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#key LookoutequipmentInferenceScheduler#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the specified tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#value LookoutequipmentInferenceScheduler#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resetComponentTimestampDelimiter">reset_component_timestamp_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resetTimestampFormat">reset_timestamp_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_component_timestamp_delimiter` <a name="reset_component_timestamp_delimiter" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resetComponentTimestampDelimiter"></a>

```python
def reset_component_timestamp_delimiter() -> None
```

##### `reset_timestamp_format` <a name="reset_timestamp_format" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resetTimestampFormat"></a>

```python
def reset_timestamp_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiterInput">component_timestamp_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormatInput">timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiter">component_timestamp_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_timestamp_delimiter_input`<sup>Optional</sup> <a name="component_timestamp_delimiter_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiterInput"></a>

```python
component_timestamp_delimiter_input: str
```

- *Type:* str

---

##### `timestamp_format_input`<sup>Optional</sup> <a name="timestamp_format_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormatInput"></a>

```python
timestamp_format_input: str
```

- *Type:* str

---

##### `component_timestamp_delimiter`<sup>Required</sup> <a name="component_timestamp_delimiter" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiter"></a>

```python
component_timestamp_delimiter: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

---


### LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putInferenceInputNameConfiguration">put_inference_input_name_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putS3InputConfiguration">put_s3_input_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resetInferenceInputNameConfiguration">reset_inference_input_name_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resetInputTimeZoneOffset">reset_input_time_zone_offset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_inference_input_name_configuration` <a name="put_inference_input_name_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putInferenceInputNameConfiguration"></a>

```python
def put_inference_input_name_configuration(
  component_timestamp_delimiter: str = None,
  timestamp_format: str = None
) -> None
```

###### `component_timestamp_delimiter`<sup>Optional</sup> <a name="component_timestamp_delimiter" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putInferenceInputNameConfiguration.parameter.componentTimestampDelimiter"></a>

- *Type:* str

Indicates the delimiter character used between items in the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#component_timestamp_delimiter LookoutequipmentInferenceScheduler#component_timestamp_delimiter}

---

###### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putInferenceInputNameConfiguration.parameter.timestampFormat"></a>

- *Type:* str

The format of the timestamp, whether Epoch time, or standard, with or without hyphens (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#timestamp_format LookoutequipmentInferenceScheduler#timestamp_format}

---

##### `put_s3_input_configuration` <a name="put_s3_input_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putS3InputConfiguration"></a>

```python
def put_s3_input_configuration(
  bucket: str,
  prefix: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putS3InputConfiguration.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#bucket LookoutequipmentInferenceScheduler#bucket}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putS3InputConfiguration.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#prefix LookoutequipmentInferenceScheduler#prefix}.

---

##### `reset_inference_input_name_configuration` <a name="reset_inference_input_name_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resetInferenceInputNameConfiguration"></a>

```python
def reset_inference_input_name_configuration() -> None
```

##### `reset_input_time_zone_offset` <a name="reset_input_time_zone_offset" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resetInputTimeZoneOffset"></a>

```python
def reset_input_time_zone_offset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfiguration">inference_input_name_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfiguration">s3_input_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfigurationInput">inference_input_name_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffsetInput">input_time_zone_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfigurationInput">s3_input_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffset">input_time_zone_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inference_input_name_configuration`<sup>Required</sup> <a name="inference_input_name_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfiguration"></a>

```python
inference_input_name_configuration: LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference</a>

---

##### `s3_input_configuration`<sup>Required</sup> <a name="s3_input_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfiguration"></a>

```python
s3_input_configuration: LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference</a>

---

##### `inference_input_name_configuration_input`<sup>Optional</sup> <a name="inference_input_name_configuration_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfigurationInput"></a>

```python
inference_input_name_configuration_input: IResolvable | LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

---

##### `input_time_zone_offset_input`<sup>Optional</sup> <a name="input_time_zone_offset_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffsetInput"></a>

```python
input_time_zone_offset_input: str
```

- *Type:* str

---

##### `s3_input_configuration_input`<sup>Optional</sup> <a name="s3_input_configuration_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfigurationInput"></a>

```python
s3_input_configuration_input: IResolvable | LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

---

##### `input_time_zone_offset`<sup>Required</sup> <a name="input_time_zone_offset" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffset"></a>

```python
input_time_zone_offset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutequipmentInferenceSchedulerDataInputConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a>

---


### LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

---


### LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.putS3OutputConfiguration">put_s3_output_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_output_configuration` <a name="put_s3_output_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.putS3OutputConfiguration"></a>

```python
def put_s3_output_configuration(
  bucket: str,
  prefix: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.putS3OutputConfiguration.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#bucket LookoutequipmentInferenceScheduler#bucket}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.putS3OutputConfiguration.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutequipment_inference_scheduler#prefix LookoutequipmentInferenceScheduler#prefix}.

---

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfiguration">s3_output_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfigurationInput">s3_output_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_output_configuration`<sup>Required</sup> <a name="s3_output_configuration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfiguration"></a>

```python
s3_output_configuration: LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference</a>

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `s3_output_configuration_input`<sup>Optional</sup> <a name="s3_output_configuration_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfigurationInput"></a>

```python
s3_output_configuration_input: IResolvable | LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutequipmentInferenceSchedulerDataOutputConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

---


### LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

---


### LookoutequipmentInferenceSchedulerTagsList <a name="LookoutequipmentInferenceSchedulerTagsList" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LookoutequipmentInferenceSchedulerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LookoutequipmentInferenceSchedulerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>]

---


### LookoutequipmentInferenceSchedulerTagsOutputReference <a name="LookoutequipmentInferenceSchedulerTagsOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutequipment_inference_scheduler

lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutequipmentInferenceSchedulerTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>

---



