# `comprehendDocumentClassifier` Submodule <a name="`comprehendDocumentClassifier` Submodule" id="@cdktn/provider-awscc.comprehendDocumentClassifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendDocumentClassifier <a name="ComprehendDocumentClassifier" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier awscc_comprehend_document_classifier}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifier(
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
  document_classifier_name: str,
  input_data_config: ComprehendDocumentClassifierInputDataConfig,
  language_code: str,
  mode: str = None,
  model_kms_key_id: str = None,
  model_policy: str = None,
  output_data_config: ComprehendDocumentClassifierOutputDataConfig = None,
  tags: IResolvable | typing.List[ComprehendDocumentClassifierTags] = None,
  version_name: str = None,
  volume_kms_key_id: str = None,
  vpc_config: ComprehendDocumentClassifierVpcConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.dataAccessRoleArn">data_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#data_access_role_arn ComprehendDocumentClassifier#data_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.documentClassifierName">document_classifier_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#document_classifier_name ComprehendDocumentClassifier#document_classifier_name}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#input_data_config ComprehendDocumentClassifier#input_data_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.languageCode">language_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#language_code ComprehendDocumentClassifier#language_code}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#mode ComprehendDocumentClassifier#mode}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.modelKmsKeyId">model_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#model_kms_key_id ComprehendDocumentClassifier#model_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.modelPolicy">model_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#model_policy ComprehendDocumentClassifier#model_policy}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.outputDataConfig">output_data_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#output_data_config ComprehendDocumentClassifier#output_data_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags">ComprehendDocumentClassifierTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#tags ComprehendDocumentClassifier#tags}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.versionName">version_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#version_name ComprehendDocumentClassifier#version_name}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#volume_kms_key_id ComprehendDocumentClassifier#volume_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#vpc_config ComprehendDocumentClassifier#vpc_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_access_role_arn`<sup>Required</sup> <a name="data_access_role_arn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.dataAccessRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#data_access_role_arn ComprehendDocumentClassifier#data_access_role_arn}.

---

##### `document_classifier_name`<sup>Required</sup> <a name="document_classifier_name" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.documentClassifierName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#document_classifier_name ComprehendDocumentClassifier#document_classifier_name}.

---

##### `input_data_config`<sup>Required</sup> <a name="input_data_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.inputDataConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#input_data_config ComprehendDocumentClassifier#input_data_config}.

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.languageCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#language_code ComprehendDocumentClassifier#language_code}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#mode ComprehendDocumentClassifier#mode}.

---

##### `model_kms_key_id`<sup>Optional</sup> <a name="model_kms_key_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.modelKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#model_kms_key_id ComprehendDocumentClassifier#model_kms_key_id}.

---

##### `model_policy`<sup>Optional</sup> <a name="model_policy" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.modelPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#model_policy ComprehendDocumentClassifier#model_policy}.

---

##### `output_data_config`<sup>Optional</sup> <a name="output_data_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.outputDataConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#output_data_config ComprehendDocumentClassifier#output_data_config}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags">ComprehendDocumentClassifierTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#tags ComprehendDocumentClassifier#tags}.

---

##### `version_name`<sup>Optional</sup> <a name="version_name" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.versionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#version_name ComprehendDocumentClassifier#version_name}.

---

##### `volume_kms_key_id`<sup>Optional</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.volumeKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#volume_kms_key_id ComprehendDocumentClassifier#volume_kms_key_id}.

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#vpc_config ComprehendDocumentClassifier#vpc_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig">put_input_data_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putOutputDataConfig">put_output_data_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetModelKmsKeyId">reset_model_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetModelPolicy">reset_model_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOutputDataConfig">reset_output_data_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVersionName">reset_version_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVolumeKmsKeyId">reset_volume_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_input_data_config` <a name="put_input_data_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig"></a>

```python
def put_input_data_config(
  augmented_manifests: IResolvable | typing.List[ComprehendDocumentClassifierInputDataConfigAugmentedManifests] = None,
  data_format: str = None,
  document_reader_config: ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig = None,
  documents: ComprehendDocumentClassifierInputDataConfigDocuments = None,
  document_type: str = None,
  label_delimiter: str = None,
  s3_uri: str = None,
  test_s3_uri: str = None
) -> None
```

###### `augmented_manifests`<sup>Optional</sup> <a name="augmented_manifests" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig.parameter.augmentedManifests"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#augmented_manifests ComprehendDocumentClassifier#augmented_manifests}.

---

###### `data_format`<sup>Optional</sup> <a name="data_format" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig.parameter.dataFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#data_format ComprehendDocumentClassifier#data_format}.

---

###### `document_reader_config`<sup>Optional</sup> <a name="document_reader_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig.parameter.documentReaderConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig">ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#document_reader_config ComprehendDocumentClassifier#document_reader_config}.

---

###### `documents`<sup>Optional</sup> <a name="documents" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig.parameter.documents"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments">ComprehendDocumentClassifierInputDataConfigDocuments</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#documents ComprehendDocumentClassifier#documents}.

---

###### `document_type`<sup>Optional</sup> <a name="document_type" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig.parameter.documentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#document_type ComprehendDocumentClassifier#document_type}.

---

###### `label_delimiter`<sup>Optional</sup> <a name="label_delimiter" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig.parameter.labelDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#label_delimiter ComprehendDocumentClassifier#label_delimiter}.

---

###### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig.parameter.s3Uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

###### `test_s3_uri`<sup>Optional</sup> <a name="test_s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig.parameter.testS3Uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#test_s3_uri ComprehendDocumentClassifier#test_s3_uri}.

---

##### `put_output_data_config` <a name="put_output_data_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putOutputDataConfig"></a>

```python
def put_output_data_config(
  kms_key_id: str = None,
  s3_uri: str = None
) -> None
```

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putOutputDataConfig.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#kms_key_id ComprehendDocumentClassifier#kms_key_id}.

---

###### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putOutputDataConfig.parameter.s3Uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ComprehendDocumentClassifierTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags">ComprehendDocumentClassifierTags</a>]

---

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putVpcConfig"></a>

```python
def put_vpc_config(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#security_group_ids ComprehendDocumentClassifier#security_group_ids}.

---

###### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putVpcConfig.parameter.subnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#subnets ComprehendDocumentClassifier#subnets}.

---

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_model_kms_key_id` <a name="reset_model_kms_key_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetModelKmsKeyId"></a>

```python
def reset_model_kms_key_id() -> None
```

##### `reset_model_policy` <a name="reset_model_policy" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetModelPolicy"></a>

```python
def reset_model_policy() -> None
```

##### `reset_output_data_config` <a name="reset_output_data_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOutputDataConfig"></a>

```python
def reset_output_data_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_version_name` <a name="reset_version_name" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVersionName"></a>

```python
def reset_version_name() -> None
```

##### `reset_volume_kms_key_id` <a name="reset_volume_kms_key_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVolumeKmsKeyId"></a>

```python
def reset_volume_kms_key_id() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComprehendDocumentClassifier resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.isConstruct"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifier.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformElement"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifier.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformResource"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifier.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifier.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComprehendDocumentClassifier resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComprehendDocumentClassifier to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComprehendDocumentClassifier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComprehendDocumentClassifier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference">ComprehendDocumentClassifierInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfig">output_data_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference">ComprehendDocumentClassifierOutputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList">ComprehendDocumentClassifierTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference">ComprehendDocumentClassifierVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArnInput">data_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.documentClassifierNameInput">document_classifier_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfigInput">input_data_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyIdInput">model_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelPolicyInput">model_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfigInput">output_data_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags">ComprehendDocumentClassifierTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNameInput">version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyIdInput">volume_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfigInput">vpc_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArn">data_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.documentClassifierName">document_classifier_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyId">model_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelPolicy">model_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_data_config`<sup>Required</sup> <a name="input_data_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfig"></a>

```python
input_data_config: ComprehendDocumentClassifierInputDataConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference">ComprehendDocumentClassifierInputDataConfigOutputReference</a>

---

##### `output_data_config`<sup>Required</sup> <a name="output_data_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfig"></a>

```python
output_data_config: ComprehendDocumentClassifierOutputDataConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference">ComprehendDocumentClassifierOutputDataConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tags"></a>

```python
tags: ComprehendDocumentClassifierTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList">ComprehendDocumentClassifierTagsList</a>

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfig"></a>

```python
vpc_config: ComprehendDocumentClassifierVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference">ComprehendDocumentClassifierVpcConfigOutputReference</a>

---

##### `data_access_role_arn_input`<sup>Optional</sup> <a name="data_access_role_arn_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArnInput"></a>

```python
data_access_role_arn_input: str
```

- *Type:* str

---

##### `document_classifier_name_input`<sup>Optional</sup> <a name="document_classifier_name_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.documentClassifierNameInput"></a>

```python
document_classifier_name_input: str
```

- *Type:* str

---

##### `input_data_config_input`<sup>Optional</sup> <a name="input_data_config_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfigInput"></a>

```python
input_data_config_input: IResolvable | ComprehendDocumentClassifierInputDataConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a>

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `model_kms_key_id_input`<sup>Optional</sup> <a name="model_kms_key_id_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyIdInput"></a>

```python
model_kms_key_id_input: str
```

- *Type:* str

---

##### `model_policy_input`<sup>Optional</sup> <a name="model_policy_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelPolicyInput"></a>

```python
model_policy_input: str
```

- *Type:* str

---

##### `output_data_config_input`<sup>Optional</sup> <a name="output_data_config_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfigInput"></a>

```python
output_data_config_input: IResolvable | ComprehendDocumentClassifierOutputDataConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ComprehendDocumentClassifierTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags">ComprehendDocumentClassifierTags</a>]

---

##### `version_name_input`<sup>Optional</sup> <a name="version_name_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNameInput"></a>

```python
version_name_input: str
```

- *Type:* str

---

##### `volume_kms_key_id_input`<sup>Optional</sup> <a name="volume_kms_key_id_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyIdInput"></a>

```python
volume_kms_key_id_input: str
```

- *Type:* str

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfigInput"></a>

```python
vpc_config_input: IResolvable | ComprehendDocumentClassifierVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a>

---

##### `data_access_role_arn`<sup>Required</sup> <a name="data_access_role_arn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArn"></a>

```python
data_access_role_arn: str
```

- *Type:* str

---

##### `document_classifier_name`<sup>Required</sup> <a name="document_classifier_name" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.documentClassifierName"></a>

```python
document_classifier_name: str
```

- *Type:* str

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `model_kms_key_id`<sup>Required</sup> <a name="model_kms_key_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyId"></a>

```python
model_kms_key_id: str
```

- *Type:* str

---

##### `model_policy`<sup>Required</sup> <a name="model_policy" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelPolicy"></a>

```python
model_policy: str
```

- *Type:* str

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `volume_kms_key_id`<sup>Required</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendDocumentClassifierConfig <a name="ComprehendDocumentClassifierConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifierConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_access_role_arn: str,
  document_classifier_name: str,
  input_data_config: ComprehendDocumentClassifierInputDataConfig,
  language_code: str,
  mode: str = None,
  model_kms_key_id: str = None,
  model_policy: str = None,
  output_data_config: ComprehendDocumentClassifierOutputDataConfig = None,
  tags: IResolvable | typing.List[ComprehendDocumentClassifierTags] = None,
  version_name: str = None,
  volume_kms_key_id: str = None,
  vpc_config: ComprehendDocumentClassifierVpcConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dataAccessRoleArn">data_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#data_access_role_arn ComprehendDocumentClassifier#data_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.documentClassifierName">document_classifier_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#document_classifier_name ComprehendDocumentClassifier#document_classifier_name}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#input_data_config ComprehendDocumentClassifier#input_data_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.languageCode">language_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#language_code ComprehendDocumentClassifier#language_code}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#mode ComprehendDocumentClassifier#mode}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.modelKmsKeyId">model_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#model_kms_key_id ComprehendDocumentClassifier#model_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.modelPolicy">model_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#model_policy ComprehendDocumentClassifier#model_policy}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.outputDataConfig">output_data_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#output_data_config ComprehendDocumentClassifier#output_data_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags">ComprehendDocumentClassifierTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#tags ComprehendDocumentClassifier#tags}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.versionName">version_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#version_name ComprehendDocumentClassifier#version_name}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#volume_kms_key_id ComprehendDocumentClassifier#volume_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#vpc_config ComprehendDocumentClassifier#vpc_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_access_role_arn`<sup>Required</sup> <a name="data_access_role_arn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dataAccessRoleArn"></a>

```python
data_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#data_access_role_arn ComprehendDocumentClassifier#data_access_role_arn}.

---

##### `document_classifier_name`<sup>Required</sup> <a name="document_classifier_name" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.documentClassifierName"></a>

```python
document_classifier_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#document_classifier_name ComprehendDocumentClassifier#document_classifier_name}.

---

##### `input_data_config`<sup>Required</sup> <a name="input_data_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.inputDataConfig"></a>

```python
input_data_config: ComprehendDocumentClassifierInputDataConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#input_data_config ComprehendDocumentClassifier#input_data_config}.

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#language_code ComprehendDocumentClassifier#language_code}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#mode ComprehendDocumentClassifier#mode}.

---

##### `model_kms_key_id`<sup>Optional</sup> <a name="model_kms_key_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.modelKmsKeyId"></a>

```python
model_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#model_kms_key_id ComprehendDocumentClassifier#model_kms_key_id}.

---

##### `model_policy`<sup>Optional</sup> <a name="model_policy" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.modelPolicy"></a>

```python
model_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#model_policy ComprehendDocumentClassifier#model_policy}.

---

##### `output_data_config`<sup>Optional</sup> <a name="output_data_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.outputDataConfig"></a>

```python
output_data_config: ComprehendDocumentClassifierOutputDataConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#output_data_config ComprehendDocumentClassifier#output_data_config}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ComprehendDocumentClassifierTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags">ComprehendDocumentClassifierTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#tags ComprehendDocumentClassifier#tags}.

---

##### `version_name`<sup>Optional</sup> <a name="version_name" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#version_name ComprehendDocumentClassifier#version_name}.

---

##### `volume_kms_key_id`<sup>Optional</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#volume_kms_key_id ComprehendDocumentClassifier#volume_kms_key_id}.

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.vpcConfig"></a>

```python
vpc_config: ComprehendDocumentClassifierVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#vpc_config ComprehendDocumentClassifier#vpc_config}.

---

### ComprehendDocumentClassifierInputDataConfig <a name="ComprehendDocumentClassifierInputDataConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig(
  augmented_manifests: IResolvable | typing.List[ComprehendDocumentClassifierInputDataConfigAugmentedManifests] = None,
  data_format: str = None,
  document_reader_config: ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig = None,
  documents: ComprehendDocumentClassifierInputDataConfigDocuments = None,
  document_type: str = None,
  label_delimiter: str = None,
  s3_uri: str = None,
  test_s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.augmentedManifests">augmented_manifests</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#augmented_manifests ComprehendDocumentClassifier#augmented_manifests}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.dataFormat">data_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#data_format ComprehendDocumentClassifier#data_format}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.documentReaderConfig">document_reader_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig">ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#document_reader_config ComprehendDocumentClassifier#document_reader_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.documents">documents</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments">ComprehendDocumentClassifierInputDataConfigDocuments</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#documents ComprehendDocumentClassifier#documents}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.documentType">document_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#document_type ComprehendDocumentClassifier#document_type}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.labelDelimiter">label_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#label_delimiter ComprehendDocumentClassifier#label_delimiter}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.s3Uri">s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.testS3Uri">test_s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#test_s3_uri ComprehendDocumentClassifier#test_s3_uri}. |

---

##### `augmented_manifests`<sup>Optional</sup> <a name="augmented_manifests" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.augmentedManifests"></a>

```python
augmented_manifests: IResolvable | typing.List[ComprehendDocumentClassifierInputDataConfigAugmentedManifests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#augmented_manifests ComprehendDocumentClassifier#augmented_manifests}.

---

##### `data_format`<sup>Optional</sup> <a name="data_format" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.dataFormat"></a>

```python
data_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#data_format ComprehendDocumentClassifier#data_format}.

---

##### `document_reader_config`<sup>Optional</sup> <a name="document_reader_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.documentReaderConfig"></a>

```python
document_reader_config: ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig">ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#document_reader_config ComprehendDocumentClassifier#document_reader_config}.

---

##### `documents`<sup>Optional</sup> <a name="documents" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.documents"></a>

```python
documents: ComprehendDocumentClassifierInputDataConfigDocuments
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments">ComprehendDocumentClassifierInputDataConfigDocuments</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#documents ComprehendDocumentClassifier#documents}.

---

##### `document_type`<sup>Optional</sup> <a name="document_type" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.documentType"></a>

```python
document_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#document_type ComprehendDocumentClassifier#document_type}.

---

##### `label_delimiter`<sup>Optional</sup> <a name="label_delimiter" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.labelDelimiter"></a>

```python
label_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#label_delimiter ComprehendDocumentClassifier#label_delimiter}.

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

##### `test_s3_uri`<sup>Optional</sup> <a name="test_s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.testS3Uri"></a>

```python
test_s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#test_s3_uri ComprehendDocumentClassifier#test_s3_uri}.

---

### ComprehendDocumentClassifierInputDataConfigAugmentedManifests <a name="ComprehendDocumentClassifierInputDataConfigAugmentedManifests" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests(
  attribute_names: typing.List[str] = None,
  s3_uri: str = None,
  split: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.attributeNames">attribute_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#attribute_names ComprehendDocumentClassifier#attribute_names}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.s3Uri">s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.split">split</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#split ComprehendDocumentClassifier#split}. |

---

##### `attribute_names`<sup>Optional</sup> <a name="attribute_names" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.attributeNames"></a>

```python
attribute_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#attribute_names ComprehendDocumentClassifier#attribute_names}.

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

##### `split`<sup>Optional</sup> <a name="split" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.split"></a>

```python
split: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#split ComprehendDocumentClassifier#split}.

---

### ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig <a name="ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig(
  document_read_action: str = None,
  document_read_mode: str = None,
  feature_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig.property.documentReadAction">document_read_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#document_read_action ComprehendDocumentClassifier#document_read_action}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig.property.documentReadMode">document_read_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#document_read_mode ComprehendDocumentClassifier#document_read_mode}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig.property.featureTypes">feature_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#feature_types ComprehendDocumentClassifier#feature_types}. |

---

##### `document_read_action`<sup>Optional</sup> <a name="document_read_action" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig.property.documentReadAction"></a>

```python
document_read_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#document_read_action ComprehendDocumentClassifier#document_read_action}.

---

##### `document_read_mode`<sup>Optional</sup> <a name="document_read_mode" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig.property.documentReadMode"></a>

```python
document_read_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#document_read_mode ComprehendDocumentClassifier#document_read_mode}.

---

##### `feature_types`<sup>Optional</sup> <a name="feature_types" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig.property.featureTypes"></a>

```python
feature_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#feature_types ComprehendDocumentClassifier#feature_types}.

---

### ComprehendDocumentClassifierInputDataConfigDocuments <a name="ComprehendDocumentClassifierInputDataConfigDocuments" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments(
  s3_uri: str = None,
  test_s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments.property.s3Uri">s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments.property.testS3Uri">test_s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#test_s3_uri ComprehendDocumentClassifier#test_s3_uri}. |

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

##### `test_s3_uri`<sup>Optional</sup> <a name="test_s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments.property.testS3Uri"></a>

```python
test_s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#test_s3_uri ComprehendDocumentClassifier#test_s3_uri}.

---

### ComprehendDocumentClassifierOutputDataConfig <a name="ComprehendDocumentClassifierOutputDataConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig(
  kms_key_id: str = None,
  s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#kms_key_id ComprehendDocumentClassifier#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.s3Uri">s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}. |

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#kms_key_id ComprehendDocumentClassifier#kms_key_id}.

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

### ComprehendDocumentClassifierTags <a name="ComprehendDocumentClassifierTags" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifierTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#key ComprehendDocumentClassifier#key}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#value ComprehendDocumentClassifier#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#key ComprehendDocumentClassifier#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#value ComprehendDocumentClassifier#value}.

---

### ComprehendDocumentClassifierVpcConfig <a name="ComprehendDocumentClassifierVpcConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#security_group_ids ComprehendDocumentClassifier#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#subnets ComprehendDocumentClassifier#subnets}. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#security_group_ids ComprehendDocumentClassifier#security_group_ids}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#subnets ComprehendDocumentClassifier#subnets}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList <a name="ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComprehendDocumentClassifierInputDataConfigAugmentedManifests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a>]

---


### ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference <a name="ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetAttributeNames">reset_attribute_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetSplit">reset_split</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_names` <a name="reset_attribute_names" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetAttributeNames"></a>

```python
def reset_attribute_names() -> None
```

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```

##### `reset_split` <a name="reset_split" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetSplit"></a>

```python
def reset_split() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNamesInput">attribute_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.splitInput">split_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNames">attribute_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.split">split</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_names_input`<sup>Optional</sup> <a name="attribute_names_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNamesInput"></a>

```python
attribute_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `split_input`<sup>Optional</sup> <a name="split_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.splitInput"></a>

```python
split_input: str
```

- *Type:* str

---

##### `attribute_names`<sup>Required</sup> <a name="attribute_names" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNames"></a>

```python
attribute_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.split"></a>

```python
split: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendDocumentClassifierInputDataConfigAugmentedManifests
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a>

---


### ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference <a name="ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resetDocumentReadAction">reset_document_read_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resetDocumentReadMode">reset_document_read_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resetFeatureTypes">reset_feature_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_document_read_action` <a name="reset_document_read_action" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resetDocumentReadAction"></a>

```python
def reset_document_read_action() -> None
```

##### `reset_document_read_mode` <a name="reset_document_read_mode" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resetDocumentReadMode"></a>

```python
def reset_document_read_mode() -> None
```

##### `reset_feature_types` <a name="reset_feature_types" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resetFeatureTypes"></a>

```python
def reset_feature_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadActionInput">document_read_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadModeInput">document_read_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.featureTypesInput">feature_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadAction">document_read_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadMode">document_read_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.featureTypes">feature_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig">ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `document_read_action_input`<sup>Optional</sup> <a name="document_read_action_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadActionInput"></a>

```python
document_read_action_input: str
```

- *Type:* str

---

##### `document_read_mode_input`<sup>Optional</sup> <a name="document_read_mode_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadModeInput"></a>

```python
document_read_mode_input: str
```

- *Type:* str

---

##### `feature_types_input`<sup>Optional</sup> <a name="feature_types_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.featureTypesInput"></a>

```python
feature_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `document_read_action`<sup>Required</sup> <a name="document_read_action" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadAction"></a>

```python
document_read_action: str
```

- *Type:* str

---

##### `document_read_mode`<sup>Required</sup> <a name="document_read_mode" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadMode"></a>

```python
document_read_mode: str
```

- *Type:* str

---

##### `feature_types`<sup>Required</sup> <a name="feature_types" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.featureTypes"></a>

```python
feature_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig">ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig</a>

---


### ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference <a name="ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.resetTestS3Uri">reset_test_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```

##### `reset_test_s3_uri` <a name="reset_test_s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.resetTestS3Uri"></a>

```python
def reset_test_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.testS3UriInput">test_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.testS3Uri">test_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments">ComprehendDocumentClassifierInputDataConfigDocuments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `test_s3_uri_input`<sup>Optional</sup> <a name="test_s3_uri_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.testS3UriInput"></a>

```python
test_s3_uri_input: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `test_s3_uri`<sup>Required</sup> <a name="test_s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.testS3Uri"></a>

```python
test_s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendDocumentClassifierInputDataConfigDocuments
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments">ComprehendDocumentClassifierInputDataConfigDocuments</a>

---


### ComprehendDocumentClassifierInputDataConfigOutputReference <a name="ComprehendDocumentClassifierInputDataConfigOutputReference" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putAugmentedManifests">put_augmented_manifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putDocumentReaderConfig">put_document_reader_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putDocuments">put_documents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetAugmentedManifests">reset_augmented_manifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDataFormat">reset_data_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDocumentReaderConfig">reset_document_reader_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDocuments">reset_documents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDocumentType">reset_document_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetLabelDelimiter">reset_label_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetTestS3Uri">reset_test_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_augmented_manifests` <a name="put_augmented_manifests" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putAugmentedManifests"></a>

```python
def put_augmented_manifests(
  value: IResolvable | typing.List[ComprehendDocumentClassifierInputDataConfigAugmentedManifests]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putAugmentedManifests.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a>]

---

##### `put_document_reader_config` <a name="put_document_reader_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putDocumentReaderConfig"></a>

```python
def put_document_reader_config(
  document_read_action: str = None,
  document_read_mode: str = None,
  feature_types: typing.List[str] = None
) -> None
```

###### `document_read_action`<sup>Optional</sup> <a name="document_read_action" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putDocumentReaderConfig.parameter.documentReadAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#document_read_action ComprehendDocumentClassifier#document_read_action}.

---

###### `document_read_mode`<sup>Optional</sup> <a name="document_read_mode" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putDocumentReaderConfig.parameter.documentReadMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#document_read_mode ComprehendDocumentClassifier#document_read_mode}.

---

###### `feature_types`<sup>Optional</sup> <a name="feature_types" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putDocumentReaderConfig.parameter.featureTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#feature_types ComprehendDocumentClassifier#feature_types}.

---

##### `put_documents` <a name="put_documents" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putDocuments"></a>

```python
def put_documents(
  s3_uri: str = None,
  test_s3_uri: str = None
) -> None
```

###### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putDocuments.parameter.s3Uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

###### `test_s3_uri`<sup>Optional</sup> <a name="test_s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putDocuments.parameter.testS3Uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/comprehend_document_classifier#test_s3_uri ComprehendDocumentClassifier#test_s3_uri}.

---

##### `reset_augmented_manifests` <a name="reset_augmented_manifests" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetAugmentedManifests"></a>

```python
def reset_augmented_manifests() -> None
```

##### `reset_data_format` <a name="reset_data_format" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDataFormat"></a>

```python
def reset_data_format() -> None
```

##### `reset_document_reader_config` <a name="reset_document_reader_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDocumentReaderConfig"></a>

```python
def reset_document_reader_config() -> None
```

##### `reset_documents` <a name="reset_documents" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDocuments"></a>

```python
def reset_documents() -> None
```

##### `reset_document_type` <a name="reset_document_type" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDocumentType"></a>

```python
def reset_document_type() -> None
```

##### `reset_label_delimiter` <a name="reset_label_delimiter" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetLabelDelimiter"></a>

```python
def reset_label_delimiter() -> None
```

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```

##### `reset_test_s3_uri` <a name="reset_test_s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetTestS3Uri"></a>

```python
def reset_test_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifests">augmented_manifests</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList">ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentReaderConfig">document_reader_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference">ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documents">documents</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference">ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifestsInput">augmented_manifests_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormatInput">data_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentReaderConfigInput">document_reader_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig">ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentsInput">documents_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments">ComprehendDocumentClassifierInputDataConfigDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentTypeInput">document_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiterInput">label_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3UriInput">test_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormat">data_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentType">document_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiter">label_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3Uri">test_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `augmented_manifests`<sup>Required</sup> <a name="augmented_manifests" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifests"></a>

```python
augmented_manifests: ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList">ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList</a>

---

##### `document_reader_config`<sup>Required</sup> <a name="document_reader_config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentReaderConfig"></a>

```python
document_reader_config: ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference">ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference</a>

---

##### `documents`<sup>Required</sup> <a name="documents" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documents"></a>

```python
documents: ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference">ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference</a>

---

##### `augmented_manifests_input`<sup>Optional</sup> <a name="augmented_manifests_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifestsInput"></a>

```python
augmented_manifests_input: IResolvable | typing.List[ComprehendDocumentClassifierInputDataConfigAugmentedManifests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a>]

---

##### `data_format_input`<sup>Optional</sup> <a name="data_format_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormatInput"></a>

```python
data_format_input: str
```

- *Type:* str

---

##### `document_reader_config_input`<sup>Optional</sup> <a name="document_reader_config_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentReaderConfigInput"></a>

```python
document_reader_config_input: IResolvable | ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig">ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig</a>

---

##### `documents_input`<sup>Optional</sup> <a name="documents_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentsInput"></a>

```python
documents_input: IResolvable | ComprehendDocumentClassifierInputDataConfigDocuments
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments">ComprehendDocumentClassifierInputDataConfigDocuments</a>

---

##### `document_type_input`<sup>Optional</sup> <a name="document_type_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentTypeInput"></a>

```python
document_type_input: str
```

- *Type:* str

---

##### `label_delimiter_input`<sup>Optional</sup> <a name="label_delimiter_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiterInput"></a>

```python
label_delimiter_input: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `test_s3_uri_input`<sup>Optional</sup> <a name="test_s3_uri_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3UriInput"></a>

```python
test_s3_uri_input: str
```

- *Type:* str

---

##### `data_format`<sup>Required</sup> <a name="data_format" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormat"></a>

```python
data_format: str
```

- *Type:* str

---

##### `document_type`<sup>Required</sup> <a name="document_type" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentType"></a>

```python
document_type: str
```

- *Type:* str

---

##### `label_delimiter`<sup>Required</sup> <a name="label_delimiter" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiter"></a>

```python
label_delimiter: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `test_s3_uri`<sup>Required</sup> <a name="test_s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3Uri"></a>

```python
test_s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendDocumentClassifierInputDataConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a>

---


### ComprehendDocumentClassifierOutputDataConfigOutputReference <a name="ComprehendDocumentClassifierOutputDataConfigOutputReference" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendDocumentClassifierOutputDataConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a>

---


### ComprehendDocumentClassifierTagsList <a name="ComprehendDocumentClassifierTagsList" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComprehendDocumentClassifierTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags">ComprehendDocumentClassifierTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComprehendDocumentClassifierTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags">ComprehendDocumentClassifierTags</a>]

---


### ComprehendDocumentClassifierTagsOutputReference <a name="ComprehendDocumentClassifierTagsOutputReference" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags">ComprehendDocumentClassifierTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendDocumentClassifierTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags">ComprehendDocumentClassifierTags</a>

---


### ComprehendDocumentClassifierVpcConfigOutputReference <a name="ComprehendDocumentClassifierVpcConfigOutputReference" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_document_classifier

comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resetSubnets">reset_subnets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resetSubnets"></a>

```python
def reset_subnets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendDocumentClassifierVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a>

---



