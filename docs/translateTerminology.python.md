# `translateTerminology` Submodule <a name="`translateTerminology` Submodule" id="@cdktn/provider-awscc.translateTerminology"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranslateTerminology <a name="TranslateTerminology" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology awscc_translate_terminology}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer"></a>

```python
from cdktn_provider_awscc import translate_terminology

translateTerminology.TranslateTerminology(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  encryption_key: TranslateTerminologyEncryptionKey = None,
  merge_strategy: str = None,
  tags: IResolvable | typing.List[TranslateTerminologyTags] = None,
  terminology_data: TranslateTerminologyTerminologyData = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the custom terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the custom terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a></code> | The encryption key for the custom terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.mergeStrategy">merge_strategy</a></code> | <code>str</code> | The merge strategy for the custom terminology. Currently only OVERWRITE is supported. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>]</code> | Tags associated with the terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.terminologyData">terminology_data</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a></code> | The terminology data for the custom terminology being imported. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.name"></a>

- *Type:* str

The name of the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#name TranslateTerminology#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.description"></a>

- *Type:* str

The description of the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#description TranslateTerminology#description}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.encryptionKey"></a>

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a>

The encryption key for the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#encryption_key TranslateTerminology#encryption_key}

---

##### `merge_strategy`<sup>Optional</sup> <a name="merge_strategy" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.mergeStrategy"></a>

- *Type:* str

The merge strategy for the custom terminology. Currently only OVERWRITE is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#merge_strategy TranslateTerminology#merge_strategy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>]

Tags associated with the terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#tags TranslateTerminology#tags}

---

##### `terminology_data`<sup>Optional</sup> <a name="terminology_data" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.terminologyData"></a>

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a>

The terminology data for the custom terminology being imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#terminology_data TranslateTerminology#terminology_data}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putEncryptionKey">put_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTerminologyData">put_terminology_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetEncryptionKey">reset_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetMergeStrategy">reset_merge_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetTerminologyData">reset_terminology_data</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_key` <a name="put_encryption_key" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putEncryptionKey"></a>

```python
def put_encryption_key(
  id: str = None,
  type: str = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putEncryptionKey.parameter.id"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#id TranslateTerminology#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putEncryptionKey.parameter.type"></a>

- *Type:* str

The type of encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#type TranslateTerminology#type}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[TranslateTerminologyTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>]

---

##### `put_terminology_data` <a name="put_terminology_data" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTerminologyData"></a>

```python
def put_terminology_data(
  directionality: str = None,
  file: str = None,
  format: str = None
) -> None
```

###### `directionality`<sup>Optional</sup> <a name="directionality" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTerminologyData.parameter.directionality"></a>

- *Type:* str

The directionality of the terminology resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#directionality TranslateTerminology#directionality}

---

###### `file`<sup>Optional</sup> <a name="file" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTerminologyData.parameter.file"></a>

- *Type:* str

The file containing the custom terminology data, base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#file TranslateTerminology#file}

---

###### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTerminologyData.parameter.format"></a>

- *Type:* str

The data format of the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#format TranslateTerminology#format}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_key` <a name="reset_encryption_key" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetEncryptionKey"></a>

```python
def reset_encryption_key() -> None
```

##### `reset_merge_strategy` <a name="reset_merge_strategy" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetMergeStrategy"></a>

```python
def reset_merge_strategy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_terminology_data` <a name="reset_terminology_data" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetTerminologyData"></a>

```python
def reset_terminology_data() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TranslateTerminology resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isConstruct"></a>

```python
from cdktn_provider_awscc import translate_terminology

translateTerminology.TranslateTerminology.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformElement"></a>

```python
from cdktn_provider_awscc import translate_terminology

translateTerminology.TranslateTerminology.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformResource"></a>

```python
from cdktn_provider_awscc import translate_terminology

translateTerminology.TranslateTerminology.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import translate_terminology

translateTerminology.TranslateTerminology.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TranslateTerminology resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TranslateTerminology to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TranslateTerminology that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TranslateTerminology to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.directionality">directionality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference">TranslateTerminologyEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.sizeBytes">size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.sourceLanguageCode">source_language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList">TranslateTerminologyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.targetLanguageCodes">target_language_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.termCount">term_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terminologyData">terminology_data</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference">TranslateTerminologyTerminologyDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.encryptionKeyInput">encryption_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.mergeStrategyInput">merge_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terminologyDataInput">terminology_data_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.mergeStrategy">merge_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `directionality`<sup>Required</sup> <a name="directionality" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.directionality"></a>

```python
directionality: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.encryptionKey"></a>

```python
encryption_key: TranslateTerminologyEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference">TranslateTerminologyEncryptionKeyOutputReference</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `size_bytes`<sup>Required</sup> <a name="size_bytes" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.sizeBytes"></a>

```python
size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_language_code`<sup>Required</sup> <a name="source_language_code" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.sourceLanguageCode"></a>

```python
source_language_code: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tags"></a>

```python
tags: TranslateTerminologyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList">TranslateTerminologyTagsList</a>

---

##### `target_language_codes`<sup>Required</sup> <a name="target_language_codes" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.targetLanguageCodes"></a>

```python
target_language_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `term_count`<sup>Required</sup> <a name="term_count" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.termCount"></a>

```python
term_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `terminology_data`<sup>Required</sup> <a name="terminology_data" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terminologyData"></a>

```python
terminology_data: TranslateTerminologyTerminologyDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference">TranslateTerminologyTerminologyDataOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.encryptionKeyInput"></a>

```python
encryption_key_input: IResolvable | TranslateTerminologyEncryptionKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a>

---

##### `merge_strategy_input`<sup>Optional</sup> <a name="merge_strategy_input" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.mergeStrategyInput"></a>

```python
merge_strategy_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[TranslateTerminologyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>]

---

##### `terminology_data_input`<sup>Optional</sup> <a name="terminology_data_input" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terminologyDataInput"></a>

```python
terminology_data_input: IResolvable | TranslateTerminologyTerminologyData
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `merge_strategy`<sup>Required</sup> <a name="merge_strategy" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.mergeStrategy"></a>

```python
merge_strategy: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TranslateTerminologyConfig <a name="TranslateTerminologyConfig" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import translate_terminology

translateTerminology.TranslateTerminologyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  encryption_key: TranslateTerminologyEncryptionKey = None,
  merge_strategy: str = None,
  tags: IResolvable | typing.List[TranslateTerminologyTags] = None,
  terminology_data: TranslateTerminologyTerminologyData = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.name">name</a></code> | <code>str</code> | The name of the custom terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.description">description</a></code> | <code>str</code> | The description of the custom terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a></code> | The encryption key for the custom terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.mergeStrategy">merge_strategy</a></code> | <code>str</code> | The merge strategy for the custom terminology. Currently only OVERWRITE is supported. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>]</code> | Tags associated with the terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.terminologyData">terminology_data</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a></code> | The terminology data for the custom terminology being imported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#name TranslateTerminology#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#description TranslateTerminology#description}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.encryptionKey"></a>

```python
encryption_key: TranslateTerminologyEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a>

The encryption key for the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#encryption_key TranslateTerminology#encryption_key}

---

##### `merge_strategy`<sup>Optional</sup> <a name="merge_strategy" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.mergeStrategy"></a>

```python
merge_strategy: str
```

- *Type:* str

The merge strategy for the custom terminology. Currently only OVERWRITE is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#merge_strategy TranslateTerminology#merge_strategy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[TranslateTerminologyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>]

Tags associated with the terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#tags TranslateTerminology#tags}

---

##### `terminology_data`<sup>Optional</sup> <a name="terminology_data" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.terminologyData"></a>

```python
terminology_data: TranslateTerminologyTerminologyData
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a>

The terminology data for the custom terminology being imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#terminology_data TranslateTerminology#terminology_data}

---

### TranslateTerminologyEncryptionKey <a name="TranslateTerminologyEncryptionKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.Initializer"></a>

```python
from cdktn_provider_awscc import translate_terminology

translateTerminology.TranslateTerminologyEncryptionKey(
  id: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.property.id">id</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the encryption key. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.property.type">type</a></code> | <code>str</code> | The type of encryption key. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.property.id"></a>

```python
id: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#id TranslateTerminology#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.property.type"></a>

```python
type: str
```

- *Type:* str

The type of encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#type TranslateTerminology#type}

---

### TranslateTerminologyTags <a name="TranslateTerminologyTags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.Initializer"></a>

```python
from cdktn_provider_awscc import translate_terminology

translateTerminology.TranslateTerminologyTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#key TranslateTerminology#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#value TranslateTerminology#value}

---

### TranslateTerminologyTerminologyData <a name="TranslateTerminologyTerminologyData" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.Initializer"></a>

```python
from cdktn_provider_awscc import translate_terminology

translateTerminology.TranslateTerminologyTerminologyData(
  directionality: str = None,
  file: str = None,
  format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.directionality">directionality</a></code> | <code>str</code> | The directionality of the terminology resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.file">file</a></code> | <code>str</code> | The file containing the custom terminology data, base64-encoded. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.format">format</a></code> | <code>str</code> | The data format of the custom terminology. |

---

##### `directionality`<sup>Optional</sup> <a name="directionality" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.directionality"></a>

```python
directionality: str
```

- *Type:* str

The directionality of the terminology resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#directionality TranslateTerminology#directionality}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.file"></a>

```python
file: str
```

- *Type:* str

The file containing the custom terminology data, base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#file TranslateTerminology#file}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.format"></a>

```python
format: str
```

- *Type:* str

The data format of the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#format TranslateTerminology#format}

---

## Classes <a name="Classes" id="Classes"></a>

### TranslateTerminologyEncryptionKeyOutputReference <a name="TranslateTerminologyEncryptionKeyOutputReference" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import translate_terminology

translateTerminology.TranslateTerminologyEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranslateTerminologyEncryptionKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a>

---


### TranslateTerminologyTagsList <a name="TranslateTerminologyTagsList" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import translate_terminology

translateTerminology.TranslateTerminologyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranslateTerminologyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TranslateTerminologyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>]

---


### TranslateTerminologyTagsOutputReference <a name="TranslateTerminologyTagsOutputReference" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import translate_terminology

translateTerminology.TranslateTerminologyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranslateTerminologyTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>

---


### TranslateTerminologyTerminologyDataOutputReference <a name="TranslateTerminologyTerminologyDataOutputReference" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import translate_terminology

translateTerminology.TranslateTerminologyTerminologyDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetDirectionality">reset_directionality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetFile">reset_file</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetFormat">reset_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_directionality` <a name="reset_directionality" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetDirectionality"></a>

```python
def reset_directionality() -> None
```

##### `reset_file` <a name="reset_file" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetFile"></a>

```python
def reset_file() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.directionalityInput">directionality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.directionality">directionality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directionality_input`<sup>Optional</sup> <a name="directionality_input" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.directionalityInput"></a>

```python
directionality_input: str
```

- *Type:* str

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `directionality`<sup>Required</sup> <a name="directionality" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.directionality"></a>

```python
directionality: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranslateTerminologyTerminologyData
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a>

---



