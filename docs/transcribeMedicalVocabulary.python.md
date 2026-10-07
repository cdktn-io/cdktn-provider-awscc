# `transcribeMedicalVocabulary` Submodule <a name="`transcribeMedicalVocabulary` Submodule" id="@cdktn/provider-awscc.transcribeMedicalVocabulary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeMedicalVocabulary <a name="TranscribeMedicalVocabulary" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary awscc_transcribe_medical_vocabulary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_medical_vocabulary

transcribeMedicalVocabulary.TranscribeMedicalVocabulary(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  language_code: str,
  vocabulary_name: str,
  tags: IResolvable | typing.List[TranscribeMedicalVocabularyTags] = None,
  vocabulary_file_uri: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.languageCode">language_code</a></code> | <code>str</code> | The language code of the vocabulary entries. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.vocabularyName">vocabulary_name</a></code> | <code>str</code> | The name of the medical vocabulary. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags">TranscribeMedicalVocabularyTags</a>]</code> | Tags associated with the medical vocabulary. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.vocabularyFileUri">vocabulary_file_uri</a></code> | <code>str</code> | The Amazon S3 location of the text file that contains the medical vocabulary. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.languageCode"></a>

- *Type:* str

The language code of the vocabulary entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary#language_code TranscribeMedicalVocabulary#language_code}

---

##### `vocabulary_name`<sup>Required</sup> <a name="vocabulary_name" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.vocabularyName"></a>

- *Type:* str

The name of the medical vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary#vocabulary_name TranscribeMedicalVocabulary#vocabulary_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags">TranscribeMedicalVocabularyTags</a>]

Tags associated with the medical vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary#tags TranscribeMedicalVocabulary#tags}

---

##### `vocabulary_file_uri`<sup>Optional</sup> <a name="vocabulary_file_uri" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.vocabularyFileUri"></a>

- *Type:* str

The Amazon S3 location of the text file that contains the medical vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary#vocabulary_file_uri TranscribeMedicalVocabulary#vocabulary_file_uri}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetVocabularyFileUri">reset_vocabulary_file_uri</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[TranscribeMedicalVocabularyTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags">TranscribeMedicalVocabularyTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vocabulary_file_uri` <a name="reset_vocabulary_file_uri" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetVocabularyFileUri"></a>

```python
def reset_vocabulary_file_uri() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TranscribeMedicalVocabulary resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isConstruct"></a>

```python
from cdktn_provider_awscc import transcribe_medical_vocabulary

transcribeMedicalVocabulary.TranscribeMedicalVocabulary.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformElement"></a>

```python
from cdktn_provider_awscc import transcribe_medical_vocabulary

transcribeMedicalVocabulary.TranscribeMedicalVocabulary.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformResource"></a>

```python
from cdktn_provider_awscc import transcribe_medical_vocabulary

transcribeMedicalVocabulary.TranscribeMedicalVocabulary.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import transcribe_medical_vocabulary

transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TranscribeMedicalVocabulary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TranscribeMedicalVocabulary to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TranscribeMedicalVocabulary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TranscribeMedicalVocabulary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList">TranscribeMedicalVocabularyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags">TranscribeMedicalVocabularyTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyFileUriInput">vocabulary_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyNameInput">vocabulary_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyFileUri">vocabulary_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyName">vocabulary_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tags"></a>

```python
tags: TranscribeMedicalVocabularyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList">TranscribeMedicalVocabularyTagsList</a>

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[TranscribeMedicalVocabularyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags">TranscribeMedicalVocabularyTags</a>]

---

##### `vocabulary_file_uri_input`<sup>Optional</sup> <a name="vocabulary_file_uri_input" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyFileUriInput"></a>

```python
vocabulary_file_uri_input: str
```

- *Type:* str

---

##### `vocabulary_name_input`<sup>Optional</sup> <a name="vocabulary_name_input" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyNameInput"></a>

```python
vocabulary_name_input: str
```

- *Type:* str

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `vocabulary_file_uri`<sup>Required</sup> <a name="vocabulary_file_uri" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyFileUri"></a>

```python
vocabulary_file_uri: str
```

- *Type:* str

---

##### `vocabulary_name`<sup>Required</sup> <a name="vocabulary_name" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyName"></a>

```python
vocabulary_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeMedicalVocabularyConfig <a name="TranscribeMedicalVocabularyConfig" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_medical_vocabulary

transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  language_code: str,
  vocabulary_name: str,
  tags: IResolvable | typing.List[TranscribeMedicalVocabularyTags] = None,
  vocabulary_file_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.languageCode">language_code</a></code> | <code>str</code> | The language code of the vocabulary entries. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.vocabularyName">vocabulary_name</a></code> | <code>str</code> | The name of the medical vocabulary. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags">TranscribeMedicalVocabularyTags</a>]</code> | Tags associated with the medical vocabulary. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.vocabularyFileUri">vocabulary_file_uri</a></code> | <code>str</code> | The Amazon S3 location of the text file that contains the medical vocabulary. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

The language code of the vocabulary entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary#language_code TranscribeMedicalVocabulary#language_code}

---

##### `vocabulary_name`<sup>Required</sup> <a name="vocabulary_name" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.vocabularyName"></a>

```python
vocabulary_name: str
```

- *Type:* str

The name of the medical vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary#vocabulary_name TranscribeMedicalVocabulary#vocabulary_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[TranscribeMedicalVocabularyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags">TranscribeMedicalVocabularyTags</a>]

Tags associated with the medical vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary#tags TranscribeMedicalVocabulary#tags}

---

##### `vocabulary_file_uri`<sup>Optional</sup> <a name="vocabulary_file_uri" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.vocabularyFileUri"></a>

```python
vocabulary_file_uri: str
```

- *Type:* str

The Amazon S3 location of the text file that contains the medical vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary#vocabulary_file_uri TranscribeMedicalVocabulary#vocabulary_file_uri}

---

### TranscribeMedicalVocabularyTags <a name="TranscribeMedicalVocabularyTags" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_medical_vocabulary

transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary#key TranscribeMedicalVocabulary#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary#value TranscribeMedicalVocabulary#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeMedicalVocabularyTagsList <a name="TranscribeMedicalVocabularyTagsList" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_medical_vocabulary

transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscribeMedicalVocabularyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags">TranscribeMedicalVocabularyTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TranscribeMedicalVocabularyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags">TranscribeMedicalVocabularyTags</a>]

---


### TranscribeMedicalVocabularyTagsOutputReference <a name="TranscribeMedicalVocabularyTagsOutputReference" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_medical_vocabulary

transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags">TranscribeMedicalVocabularyTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscribeMedicalVocabularyTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags">TranscribeMedicalVocabularyTags</a>

---



