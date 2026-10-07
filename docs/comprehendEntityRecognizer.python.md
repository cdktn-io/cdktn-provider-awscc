# `comprehendEntityRecognizer` Submodule <a name="`comprehendEntityRecognizer` Submodule" id="@cdktn/provider-awscc.comprehendEntityRecognizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendEntityRecognizer <a name="ComprehendEntityRecognizer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer awscc_comprehend_entity_recognizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizer(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_access_role_arn: str,
  input_data_config: ComprehendEntityRecognizerInputDataConfig,
  language_code: str,
  recognizer_name: str,
  model_kms_key_id: str = None,
  model_policy: str = None,
  tags: IResolvable | typing.List[ComprehendEntityRecognizerTags] = None,
  version_name: str = None,
  volume_kms_key_id: str = None,
  vpc_config: ComprehendEntityRecognizerVpcConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.dataAccessRoleArn">data_access_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a></code> | Specifies the format and location of the input data. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.languageCode">language_code</a></code> | <code>str</code> | The language of the input documents. All documents must be in the same language. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.recognizerName">recognizer_name</a></code> | <code>str</code> | The name given to the entity recognizer. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.modelKmsKeyId">model_kms_key_id</a></code> | <code>str</code> | ID for the AWS KMS key that Amazon Comprehend uses to encrypt trained custom models. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.modelPolicy">model_policy</a></code> | <code>str</code> | The JSON resource-based policy to attach to your custom entity recognizer model. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>]</code> | Tags to associate with the entity recognizer. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.versionName">version_name</a></code> | <code>str</code> | The version name given to the entity recognizer. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | ID for the AWS KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s). |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a></code> | Configuration parameters for an optional private VPC containing the resources you are using for your custom entity recognizer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_access_role_arn`<sup>Required</sup> <a name="data_access_role_arn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.dataAccessRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#data_access_role_arn ComprehendEntityRecognizer#data_access_role_arn}

---

##### `input_data_config`<sup>Required</sup> <a name="input_data_config" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.inputDataConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a>

Specifies the format and location of the input data.

The S3 bucket containing the input data must be located in the same Region as the entity recognizer being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#input_data_config ComprehendEntityRecognizer#input_data_config}

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.languageCode"></a>

- *Type:* str

The language of the input documents. All documents must be in the same language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#language_code ComprehendEntityRecognizer#language_code}

---

##### `recognizer_name`<sup>Required</sup> <a name="recognizer_name" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.recognizerName"></a>

- *Type:* str

The name given to the entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#recognizer_name ComprehendEntityRecognizer#recognizer_name}

---

##### `model_kms_key_id`<sup>Optional</sup> <a name="model_kms_key_id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.modelKmsKeyId"></a>

- *Type:* str

ID for the AWS KMS key that Amazon Comprehend uses to encrypt trained custom models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#model_kms_key_id ComprehendEntityRecognizer#model_kms_key_id}

---

##### `model_policy`<sup>Optional</sup> <a name="model_policy" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.modelPolicy"></a>

- *Type:* str

The JSON resource-based policy to attach to your custom entity recognizer model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#model_policy ComprehendEntityRecognizer#model_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>]

Tags to associate with the entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#tags ComprehendEntityRecognizer#tags}

---

##### `version_name`<sup>Optional</sup> <a name="version_name" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.versionName"></a>

- *Type:* str

The version name given to the entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#version_name ComprehendEntityRecognizer#version_name}

---

##### `volume_kms_key_id`<sup>Optional</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.volumeKmsKeyId"></a>

- *Type:* str

ID for the AWS KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#volume_kms_key_id ComprehendEntityRecognizer#volume_kms_key_id}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a>

Configuration parameters for an optional private VPC containing the resources you are using for your custom entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#vpc_config ComprehendEntityRecognizer#vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putInputDataConfig">put_input_data_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetModelKmsKeyId">reset_model_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetModelPolicy">reset_model_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVersionName">reset_version_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVolumeKmsKeyId">reset_volume_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_input_data_config` <a name="put_input_data_config" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putInputDataConfig"></a>

```python
def put_input_data_config(
  entity_types: IResolvable | typing.List[ComprehendEntityRecognizerInputDataConfigEntityTypes],
  annotations: ComprehendEntityRecognizerInputDataConfigAnnotations = None,
  augmented_manifests: IResolvable | typing.List[ComprehendEntityRecognizerInputDataConfigAugmentedManifests] = None,
  data_format: str = None,
  documents: ComprehendEntityRecognizerInputDataConfigDocuments = None,
  entity_list: ComprehendEntityRecognizerInputDataConfigEntityListStruct = None
) -> None
```

###### `entity_types`<sup>Required</sup> <a name="entity_types" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putInputDataConfig.parameter.entityTypes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>]

The entity types in the labeled training data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#entity_types ComprehendEntityRecognizer#entity_types}

---

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putInputDataConfig.parameter.annotations"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a>

The S3 location of the CSV file that annotates your training documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#annotations ComprehendEntityRecognizer#annotations}

---

###### `augmented_manifests`<sup>Optional</sup> <a name="augmented_manifests" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putInputDataConfig.parameter.augmentedManifests"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>]

A list of augmented manifest files that provide training data for a custom model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#augmented_manifests ComprehendEntityRecognizer#augmented_manifests}

---

###### `data_format`<sup>Optional</sup> <a name="data_format" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putInputDataConfig.parameter.dataFormat"></a>

- *Type:* str

The format of your training data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#data_format ComprehendEntityRecognizer#data_format}

---

###### `documents`<sup>Optional</sup> <a name="documents" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putInputDataConfig.parameter.documents"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a>

The S3 location of the folder that contains the training documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#documents ComprehendEntityRecognizer#documents}

---

###### `entity_list`<sup>Optional</sup> <a name="entity_list" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putInputDataConfig.parameter.entityList"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a>

The S3 location of the CSV file that has the entity list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#entity_list ComprehendEntityRecognizer#entity_list}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ComprehendEntityRecognizerTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>]

---

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putVpcConfig"></a>

```python
def put_vpc_config(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The ID number for a security group on an instance of your private VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#security_group_ids ComprehendEntityRecognizer#security_group_ids}

---

###### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putVpcConfig.parameter.subnets"></a>

- *Type:* typing.List[str]

The ID for each subnet being used in your private VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#subnets ComprehendEntityRecognizer#subnets}

---

##### `reset_model_kms_key_id` <a name="reset_model_kms_key_id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetModelKmsKeyId"></a>

```python
def reset_model_kms_key_id() -> None
```

##### `reset_model_policy` <a name="reset_model_policy" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetModelPolicy"></a>

```python
def reset_model_policy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_version_name` <a name="reset_version_name" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVersionName"></a>

```python
def reset_version_name() -> None
```

##### `reset_volume_kms_key_id` <a name="reset_volume_kms_key_id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVolumeKmsKeyId"></a>

```python
def reset_volume_kms_key_id() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComprehendEntityRecognizer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isConstruct"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformElement"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformResource"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComprehendEntityRecognizer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComprehendEntityRecognizer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComprehendEntityRecognizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComprehendEntityRecognizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference">ComprehendEntityRecognizerInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList">ComprehendEntityRecognizerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference">ComprehendEntityRecognizerVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dataAccessRoleArnInput">data_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.inputDataConfigInput">input_data_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelKmsKeyIdInput">model_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelPolicyInput">model_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.recognizerNameInput">recognizer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionNameInput">version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.volumeKmsKeyIdInput">volume_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.vpcConfigInput">vpc_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dataAccessRoleArn">data_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelKmsKeyId">model_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelPolicy">model_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.recognizerName">recognizer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_data_config`<sup>Required</sup> <a name="input_data_config" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.inputDataConfig"></a>

```python
input_data_config: ComprehendEntityRecognizerInputDataConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference">ComprehendEntityRecognizerInputDataConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tags"></a>

```python
tags: ComprehendEntityRecognizerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList">ComprehendEntityRecognizerTagsList</a>

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.vpcConfig"></a>

```python
vpc_config: ComprehendEntityRecognizerVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference">ComprehendEntityRecognizerVpcConfigOutputReference</a>

---

##### `data_access_role_arn_input`<sup>Optional</sup> <a name="data_access_role_arn_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dataAccessRoleArnInput"></a>

```python
data_access_role_arn_input: str
```

- *Type:* str

---

##### `input_data_config_input`<sup>Optional</sup> <a name="input_data_config_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.inputDataConfigInput"></a>

```python
input_data_config_input: IResolvable | ComprehendEntityRecognizerInputDataConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a>

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `model_kms_key_id_input`<sup>Optional</sup> <a name="model_kms_key_id_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelKmsKeyIdInput"></a>

```python
model_kms_key_id_input: str
```

- *Type:* str

---

##### `model_policy_input`<sup>Optional</sup> <a name="model_policy_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelPolicyInput"></a>

```python
model_policy_input: str
```

- *Type:* str

---

##### `recognizer_name_input`<sup>Optional</sup> <a name="recognizer_name_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.recognizerNameInput"></a>

```python
recognizer_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ComprehendEntityRecognizerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>]

---

##### `version_name_input`<sup>Optional</sup> <a name="version_name_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionNameInput"></a>

```python
version_name_input: str
```

- *Type:* str

---

##### `volume_kms_key_id_input`<sup>Optional</sup> <a name="volume_kms_key_id_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.volumeKmsKeyIdInput"></a>

```python
volume_kms_key_id_input: str
```

- *Type:* str

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.vpcConfigInput"></a>

```python
vpc_config_input: IResolvable | ComprehendEntityRecognizerVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a>

---

##### `data_access_role_arn`<sup>Required</sup> <a name="data_access_role_arn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dataAccessRoleArn"></a>

```python
data_access_role_arn: str
```

- *Type:* str

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `model_kms_key_id`<sup>Required</sup> <a name="model_kms_key_id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelKmsKeyId"></a>

```python
model_kms_key_id: str
```

- *Type:* str

---

##### `model_policy`<sup>Required</sup> <a name="model_policy" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelPolicy"></a>

```python
model_policy: str
```

- *Type:* str

---

##### `recognizer_name`<sup>Required</sup> <a name="recognizer_name" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.recognizerName"></a>

```python
recognizer_name: str
```

- *Type:* str

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `volume_kms_key_id`<sup>Required</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendEntityRecognizerConfig <a name="ComprehendEntityRecognizerConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_access_role_arn: str,
  input_data_config: ComprehendEntityRecognizerInputDataConfig,
  language_code: str,
  recognizer_name: str,
  model_kms_key_id: str = None,
  model_policy: str = None,
  tags: IResolvable | typing.List[ComprehendEntityRecognizerTags] = None,
  version_name: str = None,
  volume_kms_key_id: str = None,
  vpc_config: ComprehendEntityRecognizerVpcConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.dataAccessRoleArn">data_access_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a></code> | Specifies the format and location of the input data. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.languageCode">language_code</a></code> | <code>str</code> | The language of the input documents. All documents must be in the same language. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.recognizerName">recognizer_name</a></code> | <code>str</code> | The name given to the entity recognizer. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.modelKmsKeyId">model_kms_key_id</a></code> | <code>str</code> | ID for the AWS KMS key that Amazon Comprehend uses to encrypt trained custom models. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.modelPolicy">model_policy</a></code> | <code>str</code> | The JSON resource-based policy to attach to your custom entity recognizer model. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>]</code> | Tags to associate with the entity recognizer. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.versionName">version_name</a></code> | <code>str</code> | The version name given to the entity recognizer. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | ID for the AWS KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s). |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a></code> | Configuration parameters for an optional private VPC containing the resources you are using for your custom entity recognizer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_access_role_arn`<sup>Required</sup> <a name="data_access_role_arn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.dataAccessRoleArn"></a>

```python
data_access_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#data_access_role_arn ComprehendEntityRecognizer#data_access_role_arn}

---

##### `input_data_config`<sup>Required</sup> <a name="input_data_config" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.inputDataConfig"></a>

```python
input_data_config: ComprehendEntityRecognizerInputDataConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a>

Specifies the format and location of the input data.

The S3 bucket containing the input data must be located in the same Region as the entity recognizer being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#input_data_config ComprehendEntityRecognizer#input_data_config}

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

The language of the input documents. All documents must be in the same language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#language_code ComprehendEntityRecognizer#language_code}

---

##### `recognizer_name`<sup>Required</sup> <a name="recognizer_name" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.recognizerName"></a>

```python
recognizer_name: str
```

- *Type:* str

The name given to the entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#recognizer_name ComprehendEntityRecognizer#recognizer_name}

---

##### `model_kms_key_id`<sup>Optional</sup> <a name="model_kms_key_id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.modelKmsKeyId"></a>

```python
model_kms_key_id: str
```

- *Type:* str

ID for the AWS KMS key that Amazon Comprehend uses to encrypt trained custom models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#model_kms_key_id ComprehendEntityRecognizer#model_kms_key_id}

---

##### `model_policy`<sup>Optional</sup> <a name="model_policy" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.modelPolicy"></a>

```python
model_policy: str
```

- *Type:* str

The JSON resource-based policy to attach to your custom entity recognizer model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#model_policy ComprehendEntityRecognizer#model_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ComprehendEntityRecognizerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>]

Tags to associate with the entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#tags ComprehendEntityRecognizer#tags}

---

##### `version_name`<sup>Optional</sup> <a name="version_name" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

The version name given to the entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#version_name ComprehendEntityRecognizer#version_name}

---

##### `volume_kms_key_id`<sup>Optional</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

ID for the AWS KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#volume_kms_key_id ComprehendEntityRecognizer#volume_kms_key_id}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.vpcConfig"></a>

```python
vpc_config: ComprehendEntityRecognizerVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a>

Configuration parameters for an optional private VPC containing the resources you are using for your custom entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#vpc_config ComprehendEntityRecognizer#vpc_config}

---

### ComprehendEntityRecognizerInputDataConfig <a name="ComprehendEntityRecognizerInputDataConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig(
  entity_types: IResolvable | typing.List[ComprehendEntityRecognizerInputDataConfigEntityTypes],
  annotations: ComprehendEntityRecognizerInputDataConfigAnnotations = None,
  augmented_manifests: IResolvable | typing.List[ComprehendEntityRecognizerInputDataConfigAugmentedManifests] = None,
  data_format: str = None,
  documents: ComprehendEntityRecognizerInputDataConfigDocuments = None,
  entity_list: ComprehendEntityRecognizerInputDataConfigEntityListStruct = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.entityTypes">entity_types</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>]</code> | The entity types in the labeled training data. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.annotations">annotations</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a></code> | The S3 location of the CSV file that annotates your training documents. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.augmentedManifests">augmented_manifests</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>]</code> | A list of augmented manifest files that provide training data for a custom model. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.dataFormat">data_format</a></code> | <code>str</code> | The format of your training data. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.documents">documents</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a></code> | The S3 location of the folder that contains the training documents. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.entityList">entity_list</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a></code> | The S3 location of the CSV file that has the entity list. |

---

##### `entity_types`<sup>Required</sup> <a name="entity_types" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.entityTypes"></a>

```python
entity_types: IResolvable | typing.List[ComprehendEntityRecognizerInputDataConfigEntityTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>]

The entity types in the labeled training data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#entity_types ComprehendEntityRecognizer#entity_types}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.annotations"></a>

```python
annotations: ComprehendEntityRecognizerInputDataConfigAnnotations
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a>

The S3 location of the CSV file that annotates your training documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#annotations ComprehendEntityRecognizer#annotations}

---

##### `augmented_manifests`<sup>Optional</sup> <a name="augmented_manifests" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.augmentedManifests"></a>

```python
augmented_manifests: IResolvable | typing.List[ComprehendEntityRecognizerInputDataConfigAugmentedManifests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>]

A list of augmented manifest files that provide training data for a custom model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#augmented_manifests ComprehendEntityRecognizer#augmented_manifests}

---

##### `data_format`<sup>Optional</sup> <a name="data_format" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.dataFormat"></a>

```python
data_format: str
```

- *Type:* str

The format of your training data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#data_format ComprehendEntityRecognizer#data_format}

---

##### `documents`<sup>Optional</sup> <a name="documents" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.documents"></a>

```python
documents: ComprehendEntityRecognizerInputDataConfigDocuments
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a>

The S3 location of the folder that contains the training documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#documents ComprehendEntityRecognizer#documents}

---

##### `entity_list`<sup>Optional</sup> <a name="entity_list" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.entityList"></a>

```python
entity_list: ComprehendEntityRecognizerInputDataConfigEntityListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a>

The S3 location of the CSV file that has the entity list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#entity_list ComprehendEntityRecognizer#entity_list}

---

### ComprehendEntityRecognizerInputDataConfigAnnotations <a name="ComprehendEntityRecognizerInputDataConfigAnnotations" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations(
  s3_uri: str = None,
  test_s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.property.s3Uri">s3_uri</a></code> | <code>str</code> | Specifies the Amazon S3 location where the annotations are located. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.property.testS3Uri">test_s3_uri</a></code> | <code>str</code> | Specifies the Amazon S3 location where the test annotations are located. |

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

Specifies the Amazon S3 location where the annotations are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}

---

##### `test_s3_uri`<sup>Optional</sup> <a name="test_s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.property.testS3Uri"></a>

```python
test_s3_uri: str
```

- *Type:* str

Specifies the Amazon S3 location where the test annotations are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#test_s3_uri ComprehendEntityRecognizer#test_s3_uri}

---

### ComprehendEntityRecognizerInputDataConfigAugmentedManifests <a name="ComprehendEntityRecognizerInputDataConfigAugmentedManifests" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests(
  annotation_data_s3_uri: str = None,
  attribute_names: typing.List[str] = None,
  document_type: str = None,
  s3_uri: str = None,
  source_documents_s3_uri: str = None,
  split: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.annotationDataS3Uri">annotation_data_s3_uri</a></code> | <code>str</code> | The S3 prefix to the annotation files that are referred in the augmented manifest file. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.attributeNames">attribute_names</a></code> | <code>typing.List[str]</code> | The JSON attribute that contains the annotations for your training documents. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.documentType">document_type</a></code> | <code>str</code> | The type of augmented manifest. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.s3Uri">s3_uri</a></code> | <code>str</code> | The Amazon S3 location of the augmented manifest file. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.sourceDocumentsS3Uri">source_documents_s3_uri</a></code> | <code>str</code> | The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest file. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.split">split</a></code> | <code>str</code> | The purpose of the data you've provided in the augmented manifest. |

---

##### `annotation_data_s3_uri`<sup>Optional</sup> <a name="annotation_data_s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.annotationDataS3Uri"></a>

```python
annotation_data_s3_uri: str
```

- *Type:* str

The S3 prefix to the annotation files that are referred in the augmented manifest file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#annotation_data_s3_uri ComprehendEntityRecognizer#annotation_data_s3_uri}

---

##### `attribute_names`<sup>Optional</sup> <a name="attribute_names" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.attributeNames"></a>

```python
attribute_names: typing.List[str]
```

- *Type:* typing.List[str]

The JSON attribute that contains the annotations for your training documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#attribute_names ComprehendEntityRecognizer#attribute_names}

---

##### `document_type`<sup>Optional</sup> <a name="document_type" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.documentType"></a>

```python
document_type: str
```

- *Type:* str

The type of augmented manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#document_type ComprehendEntityRecognizer#document_type}

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

The Amazon S3 location of the augmented manifest file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}

---

##### `source_documents_s3_uri`<sup>Optional</sup> <a name="source_documents_s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.sourceDocumentsS3Uri"></a>

```python
source_documents_s3_uri: str
```

- *Type:* str

The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#source_documents_s3_uri ComprehendEntityRecognizer#source_documents_s3_uri}

---

##### `split`<sup>Optional</sup> <a name="split" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.split"></a>

```python
split: str
```

- *Type:* str

The purpose of the data you've provided in the augmented manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#split ComprehendEntityRecognizer#split}

---

### ComprehendEntityRecognizerInputDataConfigDocuments <a name="ComprehendEntityRecognizerInputDataConfigDocuments" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments(
  input_format: str = None,
  s3_uri: str = None,
  test_s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.inputFormat">input_format</a></code> | <code>str</code> | Specifies how the text in an input file should be processed. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.s3Uri">s3_uri</a></code> | <code>str</code> | Specifies the Amazon S3 location where the training documents are located. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.testS3Uri">test_s3_uri</a></code> | <code>str</code> | Specifies the Amazon S3 location where the test documents are located. |

---

##### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

Specifies how the text in an input file should be processed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#input_format ComprehendEntityRecognizer#input_format}

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

Specifies the Amazon S3 location where the training documents are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}

---

##### `test_s3_uri`<sup>Optional</sup> <a name="test_s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.testS3Uri"></a>

```python
test_s3_uri: str
```

- *Type:* str

Specifies the Amazon S3 location where the test documents are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#test_s3_uri ComprehendEntityRecognizer#test_s3_uri}

---

### ComprehendEntityRecognizerInputDataConfigEntityListStruct <a name="ComprehendEntityRecognizerInputDataConfigEntityListStruct" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct(
  s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct.property.s3Uri">s3_uri</a></code> | <code>str</code> | Specifies the Amazon S3 location where the entity list is located. |

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

Specifies the Amazon S3 location where the entity list is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}

---

### ComprehendEntityRecognizerInputDataConfigEntityTypes <a name="ComprehendEntityRecognizerInputDataConfigEntityTypes" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes.property.type">type</a></code> | <code>str</code> | An entity type within a labeled training dataset. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes.property.type"></a>

```python
type: str
```

- *Type:* str

An entity type within a labeled training dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#type ComprehendEntityRecognizer#type}

---

### ComprehendEntityRecognizerTags <a name="ComprehendEntityRecognizerTags" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags.property.key">key</a></code> | <code>str</code> | The key of the key-value pair that forms a tag. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags.property.value">value</a></code> | <code>str</code> | The value of the key-value pair that forms a tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the key-value pair that forms a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#key ComprehendEntityRecognizer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the key-value pair that forms a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#value ComprehendEntityRecognizer#value}

---

### ComprehendEntityRecognizerVpcConfig <a name="ComprehendEntityRecognizerVpcConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The ID number for a security group on an instance of your private VPC. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | The ID for each subnet being used in your private VPC. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The ID number for a security group on an instance of your private VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#security_group_ids ComprehendEntityRecognizer#security_group_ids}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

The ID for each subnet being used in your private VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#subnets ComprehendEntityRecognizer#subnets}

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference <a name="ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resetTestS3Uri">reset_test_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```

##### `reset_test_s3_uri` <a name="reset_test_s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resetTestS3Uri"></a>

```python
def reset_test_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3UriInput">test_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3Uri">test_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `test_s3_uri_input`<sup>Optional</sup> <a name="test_s3_uri_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3UriInput"></a>

```python
test_s3_uri_input: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `test_s3_uri`<sup>Required</sup> <a name="test_s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3Uri"></a>

```python
test_s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendEntityRecognizerInputDataConfigAnnotations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a>

---


### ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList <a name="ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComprehendEntityRecognizerInputDataConfigAugmentedManifests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>]

---


### ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference <a name="ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetAnnotationDataS3Uri">reset_annotation_data_s3_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetAttributeNames">reset_attribute_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetDocumentType">reset_document_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetSourceDocumentsS3Uri">reset_source_documents_s3_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetSplit">reset_split</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotation_data_s3_uri` <a name="reset_annotation_data_s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetAnnotationDataS3Uri"></a>

```python
def reset_annotation_data_s3_uri() -> None
```

##### `reset_attribute_names` <a name="reset_attribute_names" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetAttributeNames"></a>

```python
def reset_attribute_names() -> None
```

##### `reset_document_type` <a name="reset_document_type" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetDocumentType"></a>

```python
def reset_document_type() -> None
```

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```

##### `reset_source_documents_s3_uri` <a name="reset_source_documents_s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetSourceDocumentsS3Uri"></a>

```python
def reset_source_documents_s3_uri() -> None
```

##### `reset_split` <a name="reset_split" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetSplit"></a>

```python
def reset_split() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3UriInput">annotation_data_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNamesInput">attribute_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentTypeInput">document_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3UriInput">source_documents_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.splitInput">split_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri">annotation_data_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNames">attribute_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentType">document_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri">source_documents_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.split">split</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `annotation_data_s3_uri_input`<sup>Optional</sup> <a name="annotation_data_s3_uri_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3UriInput"></a>

```python
annotation_data_s3_uri_input: str
```

- *Type:* str

---

##### `attribute_names_input`<sup>Optional</sup> <a name="attribute_names_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNamesInput"></a>

```python
attribute_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `document_type_input`<sup>Optional</sup> <a name="document_type_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentTypeInput"></a>

```python
document_type_input: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `source_documents_s3_uri_input`<sup>Optional</sup> <a name="source_documents_s3_uri_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3UriInput"></a>

```python
source_documents_s3_uri_input: str
```

- *Type:* str

---

##### `split_input`<sup>Optional</sup> <a name="split_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.splitInput"></a>

```python
split_input: str
```

- *Type:* str

---

##### `annotation_data_s3_uri`<sup>Required</sup> <a name="annotation_data_s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri"></a>

```python
annotation_data_s3_uri: str
```

- *Type:* str

---

##### `attribute_names`<sup>Required</sup> <a name="attribute_names" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNames"></a>

```python
attribute_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `document_type`<sup>Required</sup> <a name="document_type" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentType"></a>

```python
document_type: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `source_documents_s3_uri`<sup>Required</sup> <a name="source_documents_s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri"></a>

```python
source_documents_s3_uri: str
```

- *Type:* str

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.split"></a>

```python
split: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendEntityRecognizerInputDataConfigAugmentedManifests
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>

---


### ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference <a name="ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetInputFormat">reset_input_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetTestS3Uri">reset_test_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_input_format` <a name="reset_input_format" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetInputFormat"></a>

```python
def reset_input_format() -> None
```

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```

##### `reset_test_s3_uri` <a name="reset_test_s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetTestS3Uri"></a>

```python
def reset_test_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormatInput">input_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3UriInput">test_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormat">input_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3Uri">test_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_format_input`<sup>Optional</sup> <a name="input_format_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormatInput"></a>

```python
input_format_input: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `test_s3_uri_input`<sup>Optional</sup> <a name="test_s3_uri_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3UriInput"></a>

```python
test_s3_uri_input: str
```

- *Type:* str

---

##### `input_format`<sup>Required</sup> <a name="input_format" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `test_s3_uri`<sup>Required</sup> <a name="test_s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3Uri"></a>

```python
test_s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendEntityRecognizerInputDataConfigDocuments
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a>

---


### ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference <a name="ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendEntityRecognizerInputDataConfigEntityListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a>

---


### ComprehendEntityRecognizerInputDataConfigEntityTypesList <a name="ComprehendEntityRecognizerInputDataConfigEntityTypesList" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComprehendEntityRecognizerInputDataConfigEntityTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>]

---


### ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference <a name="ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendEntityRecognizerInputDataConfigEntityTypes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>

---


### ComprehendEntityRecognizerInputDataConfigOutputReference <a name="ComprehendEntityRecognizerInputDataConfigOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAnnotations">put_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAugmentedManifests">put_augmented_manifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putDocuments">put_documents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityList">put_entity_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityTypes">put_entity_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetAugmentedManifests">reset_augmented_manifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetDataFormat">reset_data_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetDocuments">reset_documents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetEntityList">reset_entity_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_annotations` <a name="put_annotations" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAnnotations"></a>

```python
def put_annotations(
  s3_uri: str = None,
  test_s3_uri: str = None
) -> None
```

###### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAnnotations.parameter.s3Uri"></a>

- *Type:* str

Specifies the Amazon S3 location where the annotations are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}

---

###### `test_s3_uri`<sup>Optional</sup> <a name="test_s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAnnotations.parameter.testS3Uri"></a>

- *Type:* str

Specifies the Amazon S3 location where the test annotations are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#test_s3_uri ComprehendEntityRecognizer#test_s3_uri}

---

##### `put_augmented_manifests` <a name="put_augmented_manifests" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAugmentedManifests"></a>

```python
def put_augmented_manifests(
  value: IResolvable | typing.List[ComprehendEntityRecognizerInputDataConfigAugmentedManifests]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAugmentedManifests.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>]

---

##### `put_documents` <a name="put_documents" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putDocuments"></a>

```python
def put_documents(
  input_format: str = None,
  s3_uri: str = None,
  test_s3_uri: str = None
) -> None
```

###### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putDocuments.parameter.inputFormat"></a>

- *Type:* str

Specifies how the text in an input file should be processed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#input_format ComprehendEntityRecognizer#input_format}

---

###### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putDocuments.parameter.s3Uri"></a>

- *Type:* str

Specifies the Amazon S3 location where the training documents are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}

---

###### `test_s3_uri`<sup>Optional</sup> <a name="test_s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putDocuments.parameter.testS3Uri"></a>

- *Type:* str

Specifies the Amazon S3 location where the test documents are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#test_s3_uri ComprehendEntityRecognizer#test_s3_uri}

---

##### `put_entity_list` <a name="put_entity_list" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityList"></a>

```python
def put_entity_list(
  s3_uri: str = None
) -> None
```

###### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityList.parameter.s3Uri"></a>

- *Type:* str

Specifies the Amazon S3 location where the entity list is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}

---

##### `put_entity_types` <a name="put_entity_types" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityTypes"></a>

```python
def put_entity_types(
  value: IResolvable | typing.List[ComprehendEntityRecognizerInputDataConfigEntityTypes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>]

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_augmented_manifests` <a name="reset_augmented_manifests" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetAugmentedManifests"></a>

```python
def reset_augmented_manifests() -> None
```

##### `reset_data_format` <a name="reset_data_format" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetDataFormat"></a>

```python
def reset_data_format() -> None
```

##### `reset_documents` <a name="reset_documents" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetDocuments"></a>

```python
def reset_documents() -> None
```

##### `reset_entity_list` <a name="reset_entity_list" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetEntityList"></a>

```python
def reset_entity_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.annotations">annotations</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference">ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifests">augmented_manifests</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList">ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.documents">documents</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference">ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityList">entity_list</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference">ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypes">entity_types</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList">ComprehendEntityRecognizerInputDataConfigEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.annotationsInput">annotations_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifestsInput">augmented_manifests_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormatInput">data_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.documentsInput">documents_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityListInput">entity_list_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypesInput">entity_types_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormat">data_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.annotations"></a>

```python
annotations: ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference">ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference</a>

---

##### `augmented_manifests`<sup>Required</sup> <a name="augmented_manifests" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifests"></a>

```python
augmented_manifests: ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList">ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList</a>

---

##### `documents`<sup>Required</sup> <a name="documents" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.documents"></a>

```python
documents: ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference">ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference</a>

---

##### `entity_list`<sup>Required</sup> <a name="entity_list" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityList"></a>

```python
entity_list: ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference">ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference</a>

---

##### `entity_types`<sup>Required</sup> <a name="entity_types" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypes"></a>

```python
entity_types: ComprehendEntityRecognizerInputDataConfigEntityTypesList
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList">ComprehendEntityRecognizerInputDataConfigEntityTypesList</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.annotationsInput"></a>

```python
annotations_input: IResolvable | ComprehendEntityRecognizerInputDataConfigAnnotations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a>

---

##### `augmented_manifests_input`<sup>Optional</sup> <a name="augmented_manifests_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifestsInput"></a>

```python
augmented_manifests_input: IResolvable | typing.List[ComprehendEntityRecognizerInputDataConfigAugmentedManifests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>]

---

##### `data_format_input`<sup>Optional</sup> <a name="data_format_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormatInput"></a>

```python
data_format_input: str
```

- *Type:* str

---

##### `documents_input`<sup>Optional</sup> <a name="documents_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.documentsInput"></a>

```python
documents_input: IResolvable | ComprehendEntityRecognizerInputDataConfigDocuments
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a>

---

##### `entity_list_input`<sup>Optional</sup> <a name="entity_list_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityListInput"></a>

```python
entity_list_input: IResolvable | ComprehendEntityRecognizerInputDataConfigEntityListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a>

---

##### `entity_types_input`<sup>Optional</sup> <a name="entity_types_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypesInput"></a>

```python
entity_types_input: IResolvable | typing.List[ComprehendEntityRecognizerInputDataConfigEntityTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>]

---

##### `data_format`<sup>Required</sup> <a name="data_format" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormat"></a>

```python
data_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendEntityRecognizerInputDataConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a>

---


### ComprehendEntityRecognizerTagsList <a name="ComprehendEntityRecognizerTagsList" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComprehendEntityRecognizerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComprehendEntityRecognizerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>]

---


### ComprehendEntityRecognizerTagsOutputReference <a name="ComprehendEntityRecognizerTagsOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendEntityRecognizerTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>

---


### ComprehendEntityRecognizerVpcConfigOutputReference <a name="ComprehendEntityRecognizerVpcConfigOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_entity_recognizer

comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resetSubnets">reset_subnets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resetSubnets"></a>

```python
def reset_subnets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendEntityRecognizerVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a>

---



