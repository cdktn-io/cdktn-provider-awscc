# `transcribeVocabulary` Submodule <a name="`transcribeVocabulary` Submodule" id="@cdktn/provider-awscc.transcribeVocabulary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeVocabulary <a name="TranscribeVocabulary" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary awscc_transcribe_vocabulary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_vocabulary

transcribeVocabulary.TranscribeVocabulary(
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
  data_access_role_arn: str = None,
  phrases: typing.List[str] = None,
  tags: IResolvable | typing.List[TranscribeVocabularyTags] = None,
  vocabulary_file_uri: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.languageCode">language_code</a></code> | <code>str</code> | The language code that represents the language of the entries in your custom vocabulary. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.vocabularyName">vocabulary_name</a></code> | <code>str</code> | A unique name, chosen by you, for your custom vocabulary. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.dataAccessRoleArn">data_access_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input file. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.phrases">phrases</a></code> | <code>typing.List[str]</code> | Use this parameter if you want to create your custom vocabulary by including all desired terms, as comma-separated values, within your request. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a>]</code> | Adds one or more custom tags, each in the form of a key:value pair, to the custom vocabulary. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.vocabularyFileUri">vocabulary_file_uri</a></code> | <code>str</code> | The Amazon S3 location of the text file that contains your custom vocabulary. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.languageCode"></a>

- *Type:* str

The language code that represents the language of the entries in your custom vocabulary.

Each custom vocabulary must contain terms in only one language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#language_code TranscribeVocabulary#language_code}

---

##### `vocabulary_name`<sup>Required</sup> <a name="vocabulary_name" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.vocabularyName"></a>

- *Type:* str

A unique name, chosen by you, for your custom vocabulary.

This name is case sensitive, cannot contain spaces, and must be unique within an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#vocabulary_name TranscribeVocabulary#vocabulary_name}

---

##### `data_access_role_arn`<sup>Optional</sup> <a name="data_access_role_arn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.dataAccessRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#data_access_role_arn TranscribeVocabulary#data_access_role_arn}

---

##### `phrases`<sup>Optional</sup> <a name="phrases" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.phrases"></a>

- *Type:* typing.List[str]

Use this parameter if you want to create your custom vocabulary by including all desired terms, as comma-separated values, within your request.

You cannot use this parameter together with VocabularyFileUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#phrases TranscribeVocabulary#phrases}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a>]

Adds one or more custom tags, each in the form of a key:value pair, to the custom vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#tags TranscribeVocabulary#tags}

---

##### `vocabulary_file_uri`<sup>Optional</sup> <a name="vocabulary_file_uri" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.vocabularyFileUri"></a>

- *Type:* str

The Amazon S3 location of the text file that contains your custom vocabulary.

You cannot use this parameter together with Phrases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#vocabulary_file_uri TranscribeVocabulary#vocabulary_file_uri}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetDataAccessRoleArn">reset_data_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetPhrases">reset_phrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetVocabularyFileUri">reset_vocabulary_file_uri</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[TranscribeVocabularyTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a>]

---

##### `reset_data_access_role_arn` <a name="reset_data_access_role_arn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetDataAccessRoleArn"></a>

```python
def reset_data_access_role_arn() -> None
```

##### `reset_phrases` <a name="reset_phrases" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetPhrases"></a>

```python
def reset_phrases() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vocabulary_file_uri` <a name="reset_vocabulary_file_uri" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetVocabularyFileUri"></a>

```python
def reset_vocabulary_file_uri() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TranscribeVocabulary resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isConstruct"></a>

```python
from cdktn_provider_awscc import transcribe_vocabulary

transcribeVocabulary.TranscribeVocabulary.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isTerraformElement"></a>

```python
from cdktn_provider_awscc import transcribe_vocabulary

transcribeVocabulary.TranscribeVocabulary.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isTerraformResource"></a>

```python
from cdktn_provider_awscc import transcribe_vocabulary

transcribeVocabulary.TranscribeVocabulary.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import transcribe_vocabulary

transcribeVocabulary.TranscribeVocabulary.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TranscribeVocabulary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TranscribeVocabulary to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TranscribeVocabulary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TranscribeVocabulary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList">TranscribeVocabularyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyState">vocabulary_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.dataAccessRoleArnInput">data_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.phrasesInput">phrases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUriInput">vocabulary_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyNameInput">vocabulary_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.dataAccessRoleArn">data_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.phrases">phrases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUri">vocabulary_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyName">vocabulary_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.tags"></a>

```python
tags: TranscribeVocabularyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList">TranscribeVocabularyTagsList</a>

---

##### `vocabulary_state`<sup>Required</sup> <a name="vocabulary_state" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyState"></a>

```python
vocabulary_state: str
```

- *Type:* str

---

##### `data_access_role_arn_input`<sup>Optional</sup> <a name="data_access_role_arn_input" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.dataAccessRoleArnInput"></a>

```python
data_access_role_arn_input: str
```

- *Type:* str

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `phrases_input`<sup>Optional</sup> <a name="phrases_input" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.phrasesInput"></a>

```python
phrases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[TranscribeVocabularyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a>]

---

##### `vocabulary_file_uri_input`<sup>Optional</sup> <a name="vocabulary_file_uri_input" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUriInput"></a>

```python
vocabulary_file_uri_input: str
```

- *Type:* str

---

##### `vocabulary_name_input`<sup>Optional</sup> <a name="vocabulary_name_input" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyNameInput"></a>

```python
vocabulary_name_input: str
```

- *Type:* str

---

##### `data_access_role_arn`<sup>Required</sup> <a name="data_access_role_arn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.dataAccessRoleArn"></a>

```python
data_access_role_arn: str
```

- *Type:* str

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `phrases`<sup>Required</sup> <a name="phrases" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.phrases"></a>

```python
phrases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vocabulary_file_uri`<sup>Required</sup> <a name="vocabulary_file_uri" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUri"></a>

```python
vocabulary_file_uri: str
```

- *Type:* str

---

##### `vocabulary_name`<sup>Required</sup> <a name="vocabulary_name" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyName"></a>

```python
vocabulary_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeVocabularyConfig <a name="TranscribeVocabularyConfig" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_vocabulary

transcribeVocabulary.TranscribeVocabularyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  language_code: str,
  vocabulary_name: str,
  data_access_role_arn: str = None,
  phrases: typing.List[str] = None,
  tags: IResolvable | typing.List[TranscribeVocabularyTags] = None,
  vocabulary_file_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.languageCode">language_code</a></code> | <code>str</code> | The language code that represents the language of the entries in your custom vocabulary. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyName">vocabulary_name</a></code> | <code>str</code> | A unique name, chosen by you, for your custom vocabulary. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.dataAccessRoleArn">data_access_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input file. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.phrases">phrases</a></code> | <code>typing.List[str]</code> | Use this parameter if you want to create your custom vocabulary by including all desired terms, as comma-separated values, within your request. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a>]</code> | Adds one or more custom tags, each in the form of a key:value pair, to the custom vocabulary. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyFileUri">vocabulary_file_uri</a></code> | <code>str</code> | The Amazon S3 location of the text file that contains your custom vocabulary. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

The language code that represents the language of the entries in your custom vocabulary.

Each custom vocabulary must contain terms in only one language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#language_code TranscribeVocabulary#language_code}

---

##### `vocabulary_name`<sup>Required</sup> <a name="vocabulary_name" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyName"></a>

```python
vocabulary_name: str
```

- *Type:* str

A unique name, chosen by you, for your custom vocabulary.

This name is case sensitive, cannot contain spaces, and must be unique within an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#vocabulary_name TranscribeVocabulary#vocabulary_name}

---

##### `data_access_role_arn`<sup>Optional</sup> <a name="data_access_role_arn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.dataAccessRoleArn"></a>

```python
data_access_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#data_access_role_arn TranscribeVocabulary#data_access_role_arn}

---

##### `phrases`<sup>Optional</sup> <a name="phrases" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.phrases"></a>

```python
phrases: typing.List[str]
```

- *Type:* typing.List[str]

Use this parameter if you want to create your custom vocabulary by including all desired terms, as comma-separated values, within your request.

You cannot use this parameter together with VocabularyFileUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#phrases TranscribeVocabulary#phrases}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[TranscribeVocabularyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a>]

Adds one or more custom tags, each in the form of a key:value pair, to the custom vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#tags TranscribeVocabulary#tags}

---

##### `vocabulary_file_uri`<sup>Optional</sup> <a name="vocabulary_file_uri" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyFileUri"></a>

```python
vocabulary_file_uri: str
```

- *Type:* str

The Amazon S3 location of the text file that contains your custom vocabulary.

You cannot use this parameter together with Phrases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#vocabulary_file_uri TranscribeVocabulary#vocabulary_file_uri}

---

### TranscribeVocabularyTags <a name="TranscribeVocabularyTags" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_vocabulary

transcribeVocabulary.TranscribeVocabularyTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#key TranscribeVocabulary#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#value TranscribeVocabulary#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeVocabularyTagsList <a name="TranscribeVocabularyTagsList" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_vocabulary

transcribeVocabulary.TranscribeVocabularyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscribeVocabularyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TranscribeVocabularyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a>]

---


### TranscribeVocabularyTagsOutputReference <a name="TranscribeVocabularyTagsOutputReference" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_vocabulary

transcribeVocabulary.TranscribeVocabularyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscribeVocabularyTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a>

---



