# `databrewDataset` Submodule <a name="`databrewDataset` Submodule" id="@cdktn/provider-awscc.databrewDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabrewDataset <a name="DatabrewDataset" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset awscc_databrew_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDataset(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  input: DatabrewDatasetInput,
  name: str,
  format: str = None,
  format_options: DatabrewDatasetFormatOptions = None,
  path_options: DatabrewDatasetPathOptions = None,
  source: str = None,
  tags: IResolvable | typing.List[DatabrewDatasetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.input">input</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a></code> | Input. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.name">name</a></code> | <code>str</code> | Dataset name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.format">format</a></code> | <code>str</code> | Dataset format. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.formatOptions">format_options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a></code> | Format options for dataset. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.pathOptions">path_options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a></code> | PathOptions. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.source">source</a></code> | <code>str</code> | Source type of the dataset. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#tags DatabrewDataset#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.input"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a>

Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#input DatabrewDataset#input}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.name"></a>

- *Type:* str

Dataset name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#name DatabrewDataset#name}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.format"></a>

- *Type:* str

Dataset format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#format DatabrewDataset#format}

---

##### `format_options`<sup>Optional</sup> <a name="format_options" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.formatOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a>

Format options for dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#format_options DatabrewDataset#format_options}

---

##### `path_options`<sup>Optional</sup> <a name="path_options" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.pathOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a>

PathOptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#path_options DatabrewDataset#path_options}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.source"></a>

- *Type:* str

Source type of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#source DatabrewDataset#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#tags DatabrewDataset#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putFormatOptions">put_format_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putInput">put_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putPathOptions">put_path_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetFormatOptions">reset_format_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetPathOptions">reset_path_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_format_options` <a name="put_format_options" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putFormatOptions"></a>

```python
def put_format_options(
  csv: DatabrewDatasetFormatOptionsCsv = None,
  excel: DatabrewDatasetFormatOptionsExcel = None,
  json: DatabrewDatasetFormatOptionsJson = None
) -> None
```

###### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putFormatOptions.parameter.csv"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a>

Csv options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#csv DatabrewDataset#csv}

---

###### `excel`<sup>Optional</sup> <a name="excel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putFormatOptions.parameter.excel"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#excel DatabrewDataset#excel}.

---

###### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putFormatOptions.parameter.json"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a>

Json options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#json DatabrewDataset#json}

---

##### `put_input` <a name="put_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putInput"></a>

```python
def put_input(
  database_input_definition: DatabrewDatasetInputDatabaseInputDefinition = None,
  data_catalog_input_definition: DatabrewDatasetInputDataCatalogInputDefinition = None,
  metadata: DatabrewDatasetInputMetadata = None,
  s3_input_definition: DatabrewDatasetInputS3InputDefinition = None
) -> None
```

###### `database_input_definition`<sup>Optional</sup> <a name="database_input_definition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putInput.parameter.databaseInputDefinition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#database_input_definition DatabrewDataset#database_input_definition}.

---

###### `data_catalog_input_definition`<sup>Optional</sup> <a name="data_catalog_input_definition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putInput.parameter.dataCatalogInputDefinition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#data_catalog_input_definition DatabrewDataset#data_catalog_input_definition}.

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putInput.parameter.metadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#metadata DatabrewDataset#metadata}.

---

###### `s3_input_definition`<sup>Optional</sup> <a name="s3_input_definition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putInput.parameter.s3InputDefinition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a>

Input location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#s3_input_definition DatabrewDataset#s3_input_definition}

---

##### `put_path_options` <a name="put_path_options" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putPathOptions"></a>

```python
def put_path_options(
  files_limit: DatabrewDatasetPathOptionsFilesLimit = None,
  last_modified_date_condition: DatabrewDatasetPathOptionsLastModifiedDateCondition = None,
  parameters: IResolvable | typing.List[DatabrewDatasetPathOptionsParameters] = None
) -> None
```

###### `files_limit`<sup>Optional</sup> <a name="files_limit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putPathOptions.parameter.filesLimit"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#files_limit DatabrewDataset#files_limit}.

---

###### `last_modified_date_condition`<sup>Optional</sup> <a name="last_modified_date_condition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putPathOptions.parameter.lastModifiedDateCondition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#last_modified_date_condition DatabrewDataset#last_modified_date_condition}.

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putPathOptions.parameter.parameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#parameters DatabrewDataset#parameters}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DatabrewDatasetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>]

---

##### `reset_format` <a name="reset_format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_format_options` <a name="reset_format_options" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetFormatOptions"></a>

```python
def reset_format_options() -> None
```

##### `reset_path_options` <a name="reset_path_options" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetPathOptions"></a>

```python
def reset_path_options() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DatabrewDataset resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isConstruct"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDataset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformElement"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDataset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformResource"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDataset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDataset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DatabrewDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabrewDataset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabrewDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatabrewDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatOptions">format_options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference">DatabrewDatasetFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.input">input</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference">DatabrewDatasetInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.pathOptions">path_options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference">DatabrewDatasetPathOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList">DatabrewDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatOptionsInput">format_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.inputInput">input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.pathOptionsInput">path_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.source">source</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `format_options`<sup>Required</sup> <a name="format_options" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatOptions"></a>

```python
format_options: DatabrewDatasetFormatOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference">DatabrewDatasetFormatOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.input"></a>

```python
input: DatabrewDatasetInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference">DatabrewDatasetInputOutputReference</a>

---

##### `path_options`<sup>Required</sup> <a name="path_options" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.pathOptions"></a>

```python
path_options: DatabrewDatasetPathOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference">DatabrewDatasetPathOptionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tags"></a>

```python
tags: DatabrewDatasetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList">DatabrewDatasetTagsList</a>

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `format_options_input`<sup>Optional</sup> <a name="format_options_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatOptionsInput"></a>

```python
format_options_input: IResolvable | DatabrewDatasetFormatOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a>

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.inputInput"></a>

```python
input_input: IResolvable | DatabrewDatasetInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_options_input`<sup>Optional</sup> <a name="path_options_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.pathOptionsInput"></a>

```python
path_options_input: IResolvable | DatabrewDatasetPathOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a>

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DatabrewDatasetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.source"></a>

```python
source: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabrewDatasetConfig <a name="DatabrewDatasetConfig" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  input: DatabrewDatasetInput,
  name: str,
  format: str = None,
  format_options: DatabrewDatasetFormatOptions = None,
  path_options: DatabrewDatasetPathOptions = None,
  source: str = None,
  tags: IResolvable | typing.List[DatabrewDatasetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.input">input</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a></code> | Input. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.name">name</a></code> | <code>str</code> | Dataset name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.format">format</a></code> | <code>str</code> | Dataset format. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.formatOptions">format_options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a></code> | Format options for dataset. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.pathOptions">path_options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a></code> | PathOptions. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.source">source</a></code> | <code>str</code> | Source type of the dataset. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#tags DatabrewDataset#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.input"></a>

```python
input: DatabrewDatasetInput
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a>

Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#input DatabrewDataset#input}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Dataset name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#name DatabrewDataset#name}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.format"></a>

```python
format: str
```

- *Type:* str

Dataset format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#format DatabrewDataset#format}

---

##### `format_options`<sup>Optional</sup> <a name="format_options" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.formatOptions"></a>

```python
format_options: DatabrewDatasetFormatOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a>

Format options for dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#format_options DatabrewDataset#format_options}

---

##### `path_options`<sup>Optional</sup> <a name="path_options" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.pathOptions"></a>

```python
path_options: DatabrewDatasetPathOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a>

PathOptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#path_options DatabrewDataset#path_options}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Source type of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#source DatabrewDataset#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DatabrewDatasetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#tags DatabrewDataset#tags}.

---

### DatabrewDatasetFormatOptions <a name="DatabrewDatasetFormatOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetFormatOptions(
  csv: DatabrewDatasetFormatOptionsCsv = None,
  excel: DatabrewDatasetFormatOptionsExcel = None,
  json: DatabrewDatasetFormatOptionsJson = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a></code> | Csv options. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.excel">excel</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#excel DatabrewDataset#excel}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a></code> | Json options. |

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.csv"></a>

```python
csv: DatabrewDatasetFormatOptionsCsv
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a>

Csv options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#csv DatabrewDataset#csv}

---

##### `excel`<sup>Optional</sup> <a name="excel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.excel"></a>

```python
excel: DatabrewDatasetFormatOptionsExcel
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#excel DatabrewDataset#excel}.

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.json"></a>

```python
json: DatabrewDatasetFormatOptionsJson
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a>

Json options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#json DatabrewDataset#json}

---

### DatabrewDatasetFormatOptionsCsv <a name="DatabrewDatasetFormatOptionsCsv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetFormatOptionsCsv(
  delimiter: str = None,
  header_row: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.property.delimiter">delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#delimiter DatabrewDataset#delimiter}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.property.headerRow">header_row</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#delimiter DatabrewDataset#delimiter}.

---

##### `header_row`<sup>Optional</sup> <a name="header_row" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.property.headerRow"></a>

```python
header_row: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}.

---

### DatabrewDatasetFormatOptionsExcel <a name="DatabrewDatasetFormatOptionsExcel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetFormatOptionsExcel(
  header_row: bool | IResolvable = None,
  sheet_indexes: typing.List[typing.Union[int, float]] = None,
  sheet_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.headerRow">header_row</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.sheetIndexes">sheet_indexes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#sheet_indexes DatabrewDataset#sheet_indexes}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.sheetNames">sheet_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#sheet_names DatabrewDataset#sheet_names}. |

---

##### `header_row`<sup>Optional</sup> <a name="header_row" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.headerRow"></a>

```python
header_row: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}.

---

##### `sheet_indexes`<sup>Optional</sup> <a name="sheet_indexes" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.sheetIndexes"></a>

```python
sheet_indexes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#sheet_indexes DatabrewDataset#sheet_indexes}.

---

##### `sheet_names`<sup>Optional</sup> <a name="sheet_names" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.sheetNames"></a>

```python
sheet_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#sheet_names DatabrewDataset#sheet_names}.

---

### DatabrewDatasetFormatOptionsJson <a name="DatabrewDatasetFormatOptionsJson" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetFormatOptionsJson(
  multi_line: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson.property.multiLine">multi_line</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#multi_line DatabrewDataset#multi_line}. |

---

##### `multi_line`<sup>Optional</sup> <a name="multi_line" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson.property.multiLine"></a>

```python
multi_line: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#multi_line DatabrewDataset#multi_line}.

---

### DatabrewDatasetInput <a name="DatabrewDatasetInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetInput(
  database_input_definition: DatabrewDatasetInputDatabaseInputDefinition = None,
  data_catalog_input_definition: DatabrewDatasetInputDataCatalogInputDefinition = None,
  metadata: DatabrewDatasetInputMetadata = None,
  s3_input_definition: DatabrewDatasetInputS3InputDefinition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.databaseInputDefinition">database_input_definition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#database_input_definition DatabrewDataset#database_input_definition}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.dataCatalogInputDefinition">data_catalog_input_definition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#data_catalog_input_definition DatabrewDataset#data_catalog_input_definition}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#metadata DatabrewDataset#metadata}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.s3InputDefinition">s3_input_definition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a></code> | Input location. |

---

##### `database_input_definition`<sup>Optional</sup> <a name="database_input_definition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.databaseInputDefinition"></a>

```python
database_input_definition: DatabrewDatasetInputDatabaseInputDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#database_input_definition DatabrewDataset#database_input_definition}.

---

##### `data_catalog_input_definition`<sup>Optional</sup> <a name="data_catalog_input_definition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.dataCatalogInputDefinition"></a>

```python
data_catalog_input_definition: DatabrewDatasetInputDataCatalogInputDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#data_catalog_input_definition DatabrewDataset#data_catalog_input_definition}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.metadata"></a>

```python
metadata: DatabrewDatasetInputMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#metadata DatabrewDataset#metadata}.

---

##### `s3_input_definition`<sup>Optional</sup> <a name="s3_input_definition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.s3InputDefinition"></a>

```python
s3_input_definition: DatabrewDatasetInputS3InputDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a>

Input location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#s3_input_definition DatabrewDataset#s3_input_definition}

---

### DatabrewDatasetInputDatabaseInputDefinition <a name="DatabrewDatasetInputDatabaseInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetInputDatabaseInputDefinition(
  database_table_name: str = None,
  glue_connection_name: str = None,
  query_string: str = None,
  temp_directory: DatabrewDatasetInputDatabaseInputDefinitionTempDirectory = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.databaseTableName">database_table_name</a></code> | <code>str</code> | Database table name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.glueConnectionName">glue_connection_name</a></code> | <code>str</code> | Glue connection name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.queryString">query_string</a></code> | <code>str</code> | Custom SQL to run against the provided AWS Glue connection. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.tempDirectory">temp_directory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a></code> | Input location. |

---

##### `database_table_name`<sup>Optional</sup> <a name="database_table_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.databaseTableName"></a>

```python
database_table_name: str
```

- *Type:* str

Database table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#database_table_name DatabrewDataset#database_table_name}

---

##### `glue_connection_name`<sup>Optional</sup> <a name="glue_connection_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.glueConnectionName"></a>

```python
glue_connection_name: str
```

- *Type:* str

Glue connection name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#glue_connection_name DatabrewDataset#glue_connection_name}

---

##### `query_string`<sup>Optional</sup> <a name="query_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

Custom SQL to run against the provided AWS Glue connection.

This SQL will be used as the input for DataBrew projects and jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#query_string DatabrewDataset#query_string}

---

##### `temp_directory`<sup>Optional</sup> <a name="temp_directory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.tempDirectory"></a>

```python
temp_directory: DatabrewDatasetInputDatabaseInputDefinitionTempDirectory
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a>

Input location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#temp_directory DatabrewDataset#temp_directory}

---

### DatabrewDatasetInputDatabaseInputDefinitionTempDirectory <a name="DatabrewDatasetInputDatabaseInputDefinitionTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory(
  bucket: str = None,
  bucket_owner: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | Bucket owner. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}.

---

##### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

Bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket_owner DatabrewDataset#bucket_owner}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

### DatabrewDatasetInputDataCatalogInputDefinition <a name="DatabrewDatasetInputDataCatalogInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition(
  catalog_id: str = None,
  database_name: str = None,
  table_name: str = None,
  temp_directory: DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.catalogId">catalog_id</a></code> | <code>str</code> | Catalog id. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.databaseName">database_name</a></code> | <code>str</code> | Database name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.tableName">table_name</a></code> | <code>str</code> | Table name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.tempDirectory">temp_directory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a></code> | Input location. |

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Catalog id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#catalog_id DatabrewDataset#catalog_id}

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#database_name DatabrewDataset#database_name}

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#table_name DatabrewDataset#table_name}

---

##### `temp_directory`<sup>Optional</sup> <a name="temp_directory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.tempDirectory"></a>

```python
temp_directory: DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a>

Input location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#temp_directory DatabrewDataset#temp_directory}

---

### DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory <a name="DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory(
  bucket: str = None,
  bucket_owner: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | Bucket owner. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}.

---

##### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

Bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket_owner DatabrewDataset#bucket_owner}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

### DatabrewDatasetInputMetadata <a name="DatabrewDatasetInputMetadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetInputMetadata(
  source_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata.property.sourceArn">source_arn</a></code> | <code>str</code> | Arn of the source of the dataset. For e.g.: AppFlow Flow ARN. |

---

##### `source_arn`<sup>Optional</sup> <a name="source_arn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

Arn of the source of the dataset. For e.g.: AppFlow Flow ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#source_arn DatabrewDataset#source_arn}

---

### DatabrewDatasetInputS3InputDefinition <a name="DatabrewDatasetInputS3InputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetInputS3InputDefinition(
  bucket: str = None,
  bucket_owner: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | Bucket owner. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}.

---

##### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

Bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket_owner DatabrewDataset#bucket_owner}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

### DatabrewDatasetPathOptions <a name="DatabrewDatasetPathOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptions(
  files_limit: DatabrewDatasetPathOptionsFilesLimit = None,
  last_modified_date_condition: DatabrewDatasetPathOptionsLastModifiedDateCondition = None,
  parameters: IResolvable | typing.List[DatabrewDatasetPathOptionsParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.filesLimit">files_limit</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#files_limit DatabrewDataset#files_limit}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.lastModifiedDateCondition">last_modified_date_condition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#last_modified_date_condition DatabrewDataset#last_modified_date_condition}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#parameters DatabrewDataset#parameters}. |

---

##### `files_limit`<sup>Optional</sup> <a name="files_limit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.filesLimit"></a>

```python
files_limit: DatabrewDatasetPathOptionsFilesLimit
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#files_limit DatabrewDataset#files_limit}.

---

##### `last_modified_date_condition`<sup>Optional</sup> <a name="last_modified_date_condition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.lastModifiedDateCondition"></a>

```python
last_modified_date_condition: DatabrewDatasetPathOptionsLastModifiedDateCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#last_modified_date_condition DatabrewDataset#last_modified_date_condition}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.parameters"></a>

```python
parameters: IResolvable | typing.List[DatabrewDatasetPathOptionsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#parameters DatabrewDataset#parameters}.

---

### DatabrewDatasetPathOptionsFilesLimit <a name="DatabrewDatasetPathOptionsFilesLimit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsFilesLimit(
  max_files: typing.Union[int, float] = None,
  order: str = None,
  ordered_by: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.maxFiles">max_files</a></code> | <code>typing.Union[int, float]</code> | Maximum number of files. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.order">order</a></code> | <code>str</code> | Order. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.orderedBy">ordered_by</a></code> | <code>str</code> | Ordered by. |

---

##### `max_files`<sup>Optional</sup> <a name="max_files" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.maxFiles"></a>

```python
max_files: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#max_files DatabrewDataset#max_files}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.order"></a>

```python
order: str
```

- *Type:* str

Order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#order DatabrewDataset#order}

---

##### `ordered_by`<sup>Optional</sup> <a name="ordered_by" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.orderedBy"></a>

```python
ordered_by: str
```

- *Type:* str

Ordered by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#ordered_by DatabrewDataset#ordered_by}

---

### DatabrewDatasetPathOptionsLastModifiedDateCondition <a name="DatabrewDatasetPathOptionsLastModifiedDateCondition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition(
  expression: str = None,
  values_map: IResolvable | typing.List[DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.property.expression">expression</a></code> | <code>str</code> | Filtering expression for a parameter. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.property.valuesMap">values_map</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Filtering expression for a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#expression DatabrewDataset#expression}

---

##### `values_map`<sup>Optional</sup> <a name="values_map" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.property.valuesMap"></a>

```python
values_map: IResolvable | typing.List[DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}.

---

### DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap <a name="DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap(
  value: str = None,
  value_reference: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#value DatabrewDataset#value}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.property.valueReference">value_reference</a></code> | <code>str</code> | Variable name. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#value DatabrewDataset#value}.

---

##### `value_reference`<sup>Optional</sup> <a name="value_reference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.property.valueReference"></a>

```python
value_reference: str
```

- *Type:* str

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#value_reference DatabrewDataset#value_reference}

---

### DatabrewDatasetPathOptionsParameters <a name="DatabrewDatasetPathOptionsParameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsParameters(
  dataset_parameter: DatabrewDatasetPathOptionsParametersDatasetParameter = None,
  path_parameter_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.property.datasetParameter">dataset_parameter</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#dataset_parameter DatabrewDataset#dataset_parameter}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.property.pathParameterName">path_parameter_name</a></code> | <code>str</code> | Parameter name. |

---

##### `dataset_parameter`<sup>Optional</sup> <a name="dataset_parameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.property.datasetParameter"></a>

```python
dataset_parameter: DatabrewDatasetPathOptionsParametersDatasetParameter
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#dataset_parameter DatabrewDataset#dataset_parameter}.

---

##### `path_parameter_name`<sup>Optional</sup> <a name="path_parameter_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.property.pathParameterName"></a>

```python
path_parameter_name: str
```

- *Type:* str

Parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#path_parameter_name DatabrewDataset#path_parameter_name}

---

### DatabrewDatasetPathOptionsParametersDatasetParameter <a name="DatabrewDatasetPathOptionsParametersDatasetParameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter(
  create_column: bool | IResolvable = None,
  datetime_options: DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions = None,
  filter: DatabrewDatasetPathOptionsParametersDatasetParameterFilter = None,
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.createColumn">create_column</a></code> | <code>bool \| cdktn.IResolvable</code> | Add the value of this parameter as a column in a dataset. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.datetimeOptions">datetime_options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#datetime_options DatabrewDataset#datetime_options}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#filter DatabrewDataset#filter}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.name">name</a></code> | <code>str</code> | Parameter name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.type">type</a></code> | <code>str</code> | Parameter type. |

---

##### `create_column`<sup>Optional</sup> <a name="create_column" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.createColumn"></a>

```python
create_column: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Add the value of this parameter as a column in a dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#create_column DatabrewDataset#create_column}

---

##### `datetime_options`<sup>Optional</sup> <a name="datetime_options" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.datetimeOptions"></a>

```python
datetime_options: DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#datetime_options DatabrewDataset#datetime_options}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.filter"></a>

```python
filter: DatabrewDatasetPathOptionsParametersDatasetParameterFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#filter DatabrewDataset#filter}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#name DatabrewDataset#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.type"></a>

```python
type: str
```

- *Type:* str

Parameter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#type DatabrewDataset#type}

---

### DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions <a name="DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions(
  format: str = None,
  locale_code: str = None,
  timezone_offset: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.format">format</a></code> | <code>str</code> | Date/time format of a date parameter. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.localeCode">locale_code</a></code> | <code>str</code> | Locale code for a date parameter. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.timezoneOffset">timezone_offset</a></code> | <code>str</code> | Timezone offset. |

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.format"></a>

```python
format: str
```

- *Type:* str

Date/time format of a date parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#format DatabrewDataset#format}

---

##### `locale_code`<sup>Optional</sup> <a name="locale_code" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.localeCode"></a>

```python
locale_code: str
```

- *Type:* str

Locale code for a date parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#locale_code DatabrewDataset#locale_code}

---

##### `timezone_offset`<sup>Optional</sup> <a name="timezone_offset" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.timezoneOffset"></a>

```python
timezone_offset: str
```

- *Type:* str

Timezone offset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#timezone_offset DatabrewDataset#timezone_offset}

---

### DatabrewDatasetPathOptionsParametersDatasetParameterFilter <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter(
  expression: str = None,
  values_map: IResolvable | typing.List[DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.property.expression">expression</a></code> | <code>str</code> | Filtering expression for a parameter. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.property.valuesMap">values_map</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.property.expression"></a>

```python
expression: str
```

- *Type:* str

Filtering expression for a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#expression DatabrewDataset#expression}

---

##### `values_map`<sup>Optional</sup> <a name="values_map" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.property.valuesMap"></a>

```python
values_map: IResolvable | typing.List[DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}.

---

### DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap(
  value: str = None,
  value_reference: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#value DatabrewDataset#value}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.property.valueReference">value_reference</a></code> | <code>str</code> | Variable name. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#value DatabrewDataset#value}.

---

##### `value_reference`<sup>Optional</sup> <a name="value_reference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.property.valueReference"></a>

```python
value_reference: str
```

- *Type:* str

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#value_reference DatabrewDataset#value_reference}

---

### DatabrewDatasetTags <a name="DatabrewDatasetTags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#value DatabrewDataset#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#value DatabrewDataset#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabrewDatasetFormatOptionsCsvOutputReference <a name="DatabrewDatasetFormatOptionsCsvOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resetDelimiter">reset_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resetHeaderRow">reset_header_row</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delimiter` <a name="reset_delimiter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resetDelimiter"></a>

```python
def reset_delimiter() -> None
```

##### `reset_header_row` <a name="reset_header_row" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resetHeaderRow"></a>

```python
def reset_header_row() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.delimiterInput">delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.headerRowInput">header_row_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.headerRow">header_row</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delimiter_input`<sup>Optional</sup> <a name="delimiter_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.delimiterInput"></a>

```python
delimiter_input: str
```

- *Type:* str

---

##### `header_row_input`<sup>Optional</sup> <a name="header_row_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.headerRowInput"></a>

```python
header_row_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `header_row`<sup>Required</sup> <a name="header_row" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.headerRow"></a>

```python
header_row: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetFormatOptionsCsv
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a>

---


### DatabrewDatasetFormatOptionsExcelOutputReference <a name="DatabrewDatasetFormatOptionsExcelOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetHeaderRow">reset_header_row</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetSheetIndexes">reset_sheet_indexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetSheetNames">reset_sheet_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header_row` <a name="reset_header_row" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetHeaderRow"></a>

```python
def reset_header_row() -> None
```

##### `reset_sheet_indexes` <a name="reset_sheet_indexes" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetSheetIndexes"></a>

```python
def reset_sheet_indexes() -> None
```

##### `reset_sheet_names` <a name="reset_sheet_names" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetSheetNames"></a>

```python
def reset_sheet_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.headerRowInput">header_row_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetIndexesInput">sheet_indexes_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetNamesInput">sheet_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.headerRow">header_row</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetIndexes">sheet_indexes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetNames">sheet_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_row_input`<sup>Optional</sup> <a name="header_row_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.headerRowInput"></a>

```python
header_row_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sheet_indexes_input`<sup>Optional</sup> <a name="sheet_indexes_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetIndexesInput"></a>

```python
sheet_indexes_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `sheet_names_input`<sup>Optional</sup> <a name="sheet_names_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetNamesInput"></a>

```python
sheet_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `header_row`<sup>Required</sup> <a name="header_row" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.headerRow"></a>

```python
header_row: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sheet_indexes`<sup>Required</sup> <a name="sheet_indexes" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetIndexes"></a>

```python
sheet_indexes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `sheet_names`<sup>Required</sup> <a name="sheet_names" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetNames"></a>

```python
sheet_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetFormatOptionsExcel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a>

---


### DatabrewDatasetFormatOptionsJsonOutputReference <a name="DatabrewDatasetFormatOptionsJsonOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resetMultiLine">reset_multi_line</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_multi_line` <a name="reset_multi_line" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resetMultiLine"></a>

```python
def reset_multi_line() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.multiLineInput">multi_line_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.multiLine">multi_line</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `multi_line_input`<sup>Optional</sup> <a name="multi_line_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.multiLineInput"></a>

```python
multi_line_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `multi_line`<sup>Required</sup> <a name="multi_line" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.multiLine"></a>

```python
multi_line: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetFormatOptionsJson
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a>

---


### DatabrewDatasetFormatOptionsOutputReference <a name="DatabrewDatasetFormatOptionsOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetFormatOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putCsv">put_csv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putExcel">put_excel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putJson">put_json</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetCsv">reset_csv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetExcel">reset_excel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetJson">reset_json</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_csv` <a name="put_csv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putCsv"></a>

```python
def put_csv(
  delimiter: str = None,
  header_row: bool | IResolvable = None
) -> None
```

###### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putCsv.parameter.delimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#delimiter DatabrewDataset#delimiter}.

---

###### `header_row`<sup>Optional</sup> <a name="header_row" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putCsv.parameter.headerRow"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}.

---

##### `put_excel` <a name="put_excel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putExcel"></a>

```python
def put_excel(
  header_row: bool | IResolvable = None,
  sheet_indexes: typing.List[typing.Union[int, float]] = None,
  sheet_names: typing.List[str] = None
) -> None
```

###### `header_row`<sup>Optional</sup> <a name="header_row" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putExcel.parameter.headerRow"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}.

---

###### `sheet_indexes`<sup>Optional</sup> <a name="sheet_indexes" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putExcel.parameter.sheetIndexes"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#sheet_indexes DatabrewDataset#sheet_indexes}.

---

###### `sheet_names`<sup>Optional</sup> <a name="sheet_names" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putExcel.parameter.sheetNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#sheet_names DatabrewDataset#sheet_names}.

---

##### `put_json` <a name="put_json" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putJson"></a>

```python
def put_json(
  multi_line: bool | IResolvable = None
) -> None
```

###### `multi_line`<sup>Optional</sup> <a name="multi_line" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putJson.parameter.multiLine"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#multi_line DatabrewDataset#multi_line}.

---

##### `reset_csv` <a name="reset_csv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetCsv"></a>

```python
def reset_csv() -> None
```

##### `reset_excel` <a name="reset_excel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetExcel"></a>

```python
def reset_excel() -> None
```

##### `reset_json` <a name="reset_json" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetJson"></a>

```python
def reset_json() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference">DatabrewDatasetFormatOptionsCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.excel">excel</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference">DatabrewDatasetFormatOptionsExcelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference">DatabrewDatasetFormatOptionsJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.csvInput">csv_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.excelInput">excel_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.jsonInput">json_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.csv"></a>

```python
csv: DatabrewDatasetFormatOptionsCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference">DatabrewDatasetFormatOptionsCsvOutputReference</a>

---

##### `excel`<sup>Required</sup> <a name="excel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.excel"></a>

```python
excel: DatabrewDatasetFormatOptionsExcelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference">DatabrewDatasetFormatOptionsExcelOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.json"></a>

```python
json: DatabrewDatasetFormatOptionsJsonOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference">DatabrewDatasetFormatOptionsJsonOutputReference</a>

---

##### `csv_input`<sup>Optional</sup> <a name="csv_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.csvInput"></a>

```python
csv_input: IResolvable | DatabrewDatasetFormatOptionsCsv
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a>

---

##### `excel_input`<sup>Optional</sup> <a name="excel_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.excelInput"></a>

```python
excel_input: IResolvable | DatabrewDatasetFormatOptionsExcel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a>

---

##### `json_input`<sup>Optional</sup> <a name="json_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.jsonInput"></a>

```python
json_input: IResolvable | DatabrewDatasetFormatOptionsJson
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetFormatOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a>

---


### DatabrewDatasetInputDatabaseInputDefinitionOutputReference <a name="DatabrewDatasetInputDatabaseInputDefinitionOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.putTempDirectory">put_temp_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetDatabaseTableName">reset_database_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetGlueConnectionName">reset_glue_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetQueryString">reset_query_string</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetTempDirectory">reset_temp_directory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_temp_directory` <a name="put_temp_directory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.putTempDirectory"></a>

```python
def put_temp_directory(
  bucket: str = None,
  bucket_owner: str = None,
  key: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.putTempDirectory.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}.

---

###### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.putTempDirectory.parameter.bucketOwner"></a>

- *Type:* str

Bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket_owner DatabrewDataset#bucket_owner}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.putTempDirectory.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

##### `reset_database_table_name` <a name="reset_database_table_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetDatabaseTableName"></a>

```python
def reset_database_table_name() -> None
```

##### `reset_glue_connection_name` <a name="reset_glue_connection_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetGlueConnectionName"></a>

```python
def reset_glue_connection_name() -> None
```

##### `reset_query_string` <a name="reset_query_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetQueryString"></a>

```python
def reset_query_string() -> None
```

##### `reset_temp_directory` <a name="reset_temp_directory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetTempDirectory"></a>

```python
def reset_temp_directory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.tempDirectory">temp_directory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference">DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.databaseTableNameInput">database_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.glueConnectionNameInput">glue_connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.queryStringInput">query_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.tempDirectoryInput">temp_directory_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.databaseTableName">database_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.glueConnectionName">glue_connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.queryString">query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `temp_directory`<sup>Required</sup> <a name="temp_directory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.tempDirectory"></a>

```python
temp_directory: DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference">DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference</a>

---

##### `database_table_name_input`<sup>Optional</sup> <a name="database_table_name_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.databaseTableNameInput"></a>

```python
database_table_name_input: str
```

- *Type:* str

---

##### `glue_connection_name_input`<sup>Optional</sup> <a name="glue_connection_name_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.glueConnectionNameInput"></a>

```python
glue_connection_name_input: str
```

- *Type:* str

---

##### `query_string_input`<sup>Optional</sup> <a name="query_string_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.queryStringInput"></a>

```python
query_string_input: str
```

- *Type:* str

---

##### `temp_directory_input`<sup>Optional</sup> <a name="temp_directory_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.tempDirectoryInput"></a>

```python
temp_directory_input: IResolvable | DatabrewDatasetInputDatabaseInputDefinitionTempDirectory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a>

---

##### `database_table_name`<sup>Required</sup> <a name="database_table_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.databaseTableName"></a>

```python
database_table_name: str
```

- *Type:* str

---

##### `glue_connection_name`<sup>Required</sup> <a name="glue_connection_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.glueConnectionName"></a>

```python
glue_connection_name: str
```

- *Type:* str

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetInputDatabaseInputDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a>

---


### DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference <a name="DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetBucketOwner">reset_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_bucket_owner` <a name="reset_bucket_owner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetBucketOwner"></a>

```python
def reset_bucket_owner() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketOwnerInput">bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `bucket_owner_input`<sup>Optional</sup> <a name="bucket_owner_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketOwnerInput"></a>

```python
bucket_owner_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_owner`<sup>Required</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetInputDatabaseInputDefinitionTempDirectory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a>

---


### DatabrewDatasetInputDataCatalogInputDefinitionOutputReference <a name="DatabrewDatasetInputDataCatalogInputDefinitionOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.putTempDirectory">put_temp_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetTempDirectory">reset_temp_directory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_temp_directory` <a name="put_temp_directory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.putTempDirectory"></a>

```python
def put_temp_directory(
  bucket: str = None,
  bucket_owner: str = None,
  key: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.putTempDirectory.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}.

---

###### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.putTempDirectory.parameter.bucketOwner"></a>

- *Type:* str

Bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket_owner DatabrewDataset#bucket_owner}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.putTempDirectory.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```

##### `reset_temp_directory` <a name="reset_temp_directory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetTempDirectory"></a>

```python
def reset_temp_directory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tempDirectory">temp_directory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tempDirectoryInput">temp_directory_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `temp_directory`<sup>Required</sup> <a name="temp_directory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tempDirectory"></a>

```python
temp_directory: DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `temp_directory_input`<sup>Optional</sup> <a name="temp_directory_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tempDirectoryInput"></a>

```python
temp_directory_input: IResolvable | DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a>

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetInputDataCatalogInputDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a>

---


### DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference <a name="DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetBucketOwner">reset_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_bucket_owner` <a name="reset_bucket_owner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetBucketOwner"></a>

```python
def reset_bucket_owner() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketOwnerInput">bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `bucket_owner_input`<sup>Optional</sup> <a name="bucket_owner_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketOwnerInput"></a>

```python
bucket_owner_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_owner`<sup>Required</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a>

---


### DatabrewDatasetInputMetadataOutputReference <a name="DatabrewDatasetInputMetadataOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetInputMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resetSourceArn">reset_source_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_arn` <a name="reset_source_arn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resetSourceArn"></a>

```python
def reset_source_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.sourceArnInput">source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.sourceArn">source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_arn_input`<sup>Optional</sup> <a name="source_arn_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.sourceArnInput"></a>

```python
source_arn_input: str
```

- *Type:* str

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetInputMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a>

---


### DatabrewDatasetInputOutputReference <a name="DatabrewDatasetInputOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDatabaseInputDefinition">put_database_input_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDataCatalogInputDefinition">put_data_catalog_input_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putS3InputDefinition">put_s3_input_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetDatabaseInputDefinition">reset_database_input_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetDataCatalogInputDefinition">reset_data_catalog_input_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetS3InputDefinition">reset_s3_input_definition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_database_input_definition` <a name="put_database_input_definition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDatabaseInputDefinition"></a>

```python
def put_database_input_definition(
  database_table_name: str = None,
  glue_connection_name: str = None,
  query_string: str = None,
  temp_directory: DatabrewDatasetInputDatabaseInputDefinitionTempDirectory = None
) -> None
```

###### `database_table_name`<sup>Optional</sup> <a name="database_table_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDatabaseInputDefinition.parameter.databaseTableName"></a>

- *Type:* str

Database table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#database_table_name DatabrewDataset#database_table_name}

---

###### `glue_connection_name`<sup>Optional</sup> <a name="glue_connection_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDatabaseInputDefinition.parameter.glueConnectionName"></a>

- *Type:* str

Glue connection name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#glue_connection_name DatabrewDataset#glue_connection_name}

---

###### `query_string`<sup>Optional</sup> <a name="query_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDatabaseInputDefinition.parameter.queryString"></a>

- *Type:* str

Custom SQL to run against the provided AWS Glue connection.

This SQL will be used as the input for DataBrew projects and jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#query_string DatabrewDataset#query_string}

---

###### `temp_directory`<sup>Optional</sup> <a name="temp_directory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDatabaseInputDefinition.parameter.tempDirectory"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a>

Input location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#temp_directory DatabrewDataset#temp_directory}

---

##### `put_data_catalog_input_definition` <a name="put_data_catalog_input_definition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDataCatalogInputDefinition"></a>

```python
def put_data_catalog_input_definition(
  catalog_id: str = None,
  database_name: str = None,
  table_name: str = None,
  temp_directory: DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory = None
) -> None
```

###### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDataCatalogInputDefinition.parameter.catalogId"></a>

- *Type:* str

Catalog id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#catalog_id DatabrewDataset#catalog_id}

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDataCatalogInputDefinition.parameter.databaseName"></a>

- *Type:* str

Database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#database_name DatabrewDataset#database_name}

---

###### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDataCatalogInputDefinition.parameter.tableName"></a>

- *Type:* str

Table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#table_name DatabrewDataset#table_name}

---

###### `temp_directory`<sup>Optional</sup> <a name="temp_directory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDataCatalogInputDefinition.parameter.tempDirectory"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a>

Input location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#temp_directory DatabrewDataset#temp_directory}

---

##### `put_metadata` <a name="put_metadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putMetadata"></a>

```python
def put_metadata(
  source_arn: str = None
) -> None
```

###### `source_arn`<sup>Optional</sup> <a name="source_arn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putMetadata.parameter.sourceArn"></a>

- *Type:* str

Arn of the source of the dataset. For e.g.: AppFlow Flow ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#source_arn DatabrewDataset#source_arn}

---

##### `put_s3_input_definition` <a name="put_s3_input_definition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putS3InputDefinition"></a>

```python
def put_s3_input_definition(
  bucket: str = None,
  bucket_owner: str = None,
  key: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putS3InputDefinition.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}.

---

###### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putS3InputDefinition.parameter.bucketOwner"></a>

- *Type:* str

Bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#bucket_owner DatabrewDataset#bucket_owner}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putS3InputDefinition.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

##### `reset_database_input_definition` <a name="reset_database_input_definition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetDatabaseInputDefinition"></a>

```python
def reset_database_input_definition() -> None
```

##### `reset_data_catalog_input_definition` <a name="reset_data_catalog_input_definition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetDataCatalogInputDefinition"></a>

```python
def reset_data_catalog_input_definition() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_s3_input_definition` <a name="reset_s3_input_definition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetS3InputDefinition"></a>

```python
def reset_s3_input_definition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.databaseInputDefinition">database_input_definition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference">DatabrewDatasetInputDatabaseInputDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.dataCatalogInputDefinition">data_catalog_input_definition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference">DatabrewDatasetInputDataCatalogInputDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference">DatabrewDatasetInputMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.s3InputDefinition">s3_input_definition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference">DatabrewDatasetInputS3InputDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.databaseInputDefinitionInput">database_input_definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.dataCatalogInputDefinitionInput">data_catalog_input_definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.metadataInput">metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.s3InputDefinitionInput">s3_input_definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input_definition`<sup>Required</sup> <a name="database_input_definition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.databaseInputDefinition"></a>

```python
database_input_definition: DatabrewDatasetInputDatabaseInputDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference">DatabrewDatasetInputDatabaseInputDefinitionOutputReference</a>

---

##### `data_catalog_input_definition`<sup>Required</sup> <a name="data_catalog_input_definition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.dataCatalogInputDefinition"></a>

```python
data_catalog_input_definition: DatabrewDatasetInputDataCatalogInputDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference">DatabrewDatasetInputDataCatalogInputDefinitionOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.metadata"></a>

```python
metadata: DatabrewDatasetInputMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference">DatabrewDatasetInputMetadataOutputReference</a>

---

##### `s3_input_definition`<sup>Required</sup> <a name="s3_input_definition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.s3InputDefinition"></a>

```python
s3_input_definition: DatabrewDatasetInputS3InputDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference">DatabrewDatasetInputS3InputDefinitionOutputReference</a>

---

##### `database_input_definition_input`<sup>Optional</sup> <a name="database_input_definition_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.databaseInputDefinitionInput"></a>

```python
database_input_definition_input: IResolvable | DatabrewDatasetInputDatabaseInputDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a>

---

##### `data_catalog_input_definition_input`<sup>Optional</sup> <a name="data_catalog_input_definition_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.dataCatalogInputDefinitionInput"></a>

```python
data_catalog_input_definition_input: IResolvable | DatabrewDatasetInputDataCatalogInputDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a>

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.metadataInput"></a>

```python
metadata_input: IResolvable | DatabrewDatasetInputMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a>

---

##### `s3_input_definition_input`<sup>Optional</sup> <a name="s3_input_definition_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.s3InputDefinitionInput"></a>

```python
s3_input_definition_input: IResolvable | DatabrewDatasetInputS3InputDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a>

---


### DatabrewDatasetInputS3InputDefinitionOutputReference <a name="DatabrewDatasetInputS3InputDefinitionOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetBucketOwner">reset_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_bucket_owner` <a name="reset_bucket_owner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetBucketOwner"></a>

```python
def reset_bucket_owner() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketOwnerInput">bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `bucket_owner_input`<sup>Optional</sup> <a name="bucket_owner_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketOwnerInput"></a>

```python
bucket_owner_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_owner`<sup>Required</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetInputS3InputDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a>

---


### DatabrewDatasetPathOptionsFilesLimitOutputReference <a name="DatabrewDatasetPathOptionsFilesLimitOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetMaxFiles">reset_max_files</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetOrderedBy">reset_ordered_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_files` <a name="reset_max_files" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetMaxFiles"></a>

```python
def reset_max_files() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_ordered_by` <a name="reset_ordered_by" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetOrderedBy"></a>

```python
def reset_ordered_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.maxFilesInput">max_files_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderedByInput">ordered_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.maxFiles">max_files</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderedBy">ordered_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_files_input`<sup>Optional</sup> <a name="max_files_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.maxFilesInput"></a>

```python
max_files_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ordered_by_input`<sup>Optional</sup> <a name="ordered_by_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderedByInput"></a>

```python
ordered_by_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `max_files`<sup>Required</sup> <a name="max_files" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.maxFiles"></a>

```python
max_files: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `ordered_by`<sup>Required</sup> <a name="ordered_by" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderedBy"></a>

```python
ordered_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetPathOptionsFilesLimit
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a>

---


### DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference <a name="DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.putValuesMap">put_values_map</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resetValuesMap">reset_values_map</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_values_map` <a name="put_values_map" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.putValuesMap"></a>

```python
def put_values_map(
  value: IResolvable | typing.List[DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.putValuesMap.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>]

---

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_values_map` <a name="reset_values_map" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resetValuesMap"></a>

```python
def reset_values_map() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.valuesMap">values_map</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.valuesMapInput">values_map_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_map`<sup>Required</sup> <a name="values_map" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.valuesMap"></a>

```python
values_map: DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList</a>

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `values_map_input`<sup>Optional</sup> <a name="values_map_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.valuesMapInput"></a>

```python
values_map_input: IResolvable | typing.List[DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetPathOptionsLastModifiedDateCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a>

---


### DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList <a name="DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>]

---


### DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference <a name="DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resetValueReference">reset_value_reference</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_value_reference` <a name="reset_value_reference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resetValueReference"></a>

```python
def reset_value_reference() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueReferenceInput">value_reference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueReference">value_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value_reference_input`<sup>Optional</sup> <a name="value_reference_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueReferenceInput"></a>

```python
value_reference_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `value_reference`<sup>Required</sup> <a name="value_reference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueReference"></a>

```python
value_reference: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>

---


### DatabrewDatasetPathOptionsOutputReference <a name="DatabrewDatasetPathOptionsOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putFilesLimit">put_files_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putLastModifiedDateCondition">put_last_modified_date_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetFilesLimit">reset_files_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetLastModifiedDateCondition">reset_last_modified_date_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_files_limit` <a name="put_files_limit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putFilesLimit"></a>

```python
def put_files_limit(
  max_files: typing.Union[int, float] = None,
  order: str = None,
  ordered_by: str = None
) -> None
```

###### `max_files`<sup>Optional</sup> <a name="max_files" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putFilesLimit.parameter.maxFiles"></a>

- *Type:* typing.Union[int, float]

Maximum number of files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#max_files DatabrewDataset#max_files}

---

###### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putFilesLimit.parameter.order"></a>

- *Type:* str

Order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#order DatabrewDataset#order}

---

###### `ordered_by`<sup>Optional</sup> <a name="ordered_by" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putFilesLimit.parameter.orderedBy"></a>

- *Type:* str

Ordered by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#ordered_by DatabrewDataset#ordered_by}

---

##### `put_last_modified_date_condition` <a name="put_last_modified_date_condition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putLastModifiedDateCondition"></a>

```python
def put_last_modified_date_condition(
  expression: str = None,
  values_map: IResolvable | typing.List[DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap] = None
) -> None
```

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putLastModifiedDateCondition.parameter.expression"></a>

- *Type:* str

Filtering expression for a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#expression DatabrewDataset#expression}

---

###### `values_map`<sup>Optional</sup> <a name="values_map" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putLastModifiedDateCondition.parameter.valuesMap"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}.

---

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[DatabrewDatasetPathOptionsParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>]

---

##### `reset_files_limit` <a name="reset_files_limit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetFilesLimit"></a>

```python
def reset_files_limit() -> None
```

##### `reset_last_modified_date_condition` <a name="reset_last_modified_date_condition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetLastModifiedDateCondition"></a>

```python
def reset_last_modified_date_condition() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.filesLimit">files_limit</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference">DatabrewDatasetPathOptionsFilesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.lastModifiedDateCondition">last_modified_date_condition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference">DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList">DatabrewDatasetPathOptionsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.filesLimitInput">files_limit_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.lastModifiedDateConditionInput">last_modified_date_condition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `files_limit`<sup>Required</sup> <a name="files_limit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.filesLimit"></a>

```python
files_limit: DatabrewDatasetPathOptionsFilesLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference">DatabrewDatasetPathOptionsFilesLimitOutputReference</a>

---

##### `last_modified_date_condition`<sup>Required</sup> <a name="last_modified_date_condition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.lastModifiedDateCondition"></a>

```python
last_modified_date_condition: DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference">DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.parameters"></a>

```python
parameters: DatabrewDatasetPathOptionsParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList">DatabrewDatasetPathOptionsParametersList</a>

---

##### `files_limit_input`<sup>Optional</sup> <a name="files_limit_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.filesLimitInput"></a>

```python
files_limit_input: IResolvable | DatabrewDatasetPathOptionsFilesLimit
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a>

---

##### `last_modified_date_condition_input`<sup>Optional</sup> <a name="last_modified_date_condition_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.lastModifiedDateConditionInput"></a>

```python
last_modified_date_condition_input: IResolvable | DatabrewDatasetPathOptionsLastModifiedDateCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a>

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[DatabrewDatasetPathOptionsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetPathOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a>

---


### DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference <a name="DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetLocaleCode">reset_locale_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetTimezoneOffset">reset_timezone_offset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_format` <a name="reset_format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_locale_code` <a name="reset_locale_code" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetLocaleCode"></a>

```python
def reset_locale_code() -> None
```

##### `reset_timezone_offset` <a name="reset_timezone_offset" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetTimezoneOffset"></a>

```python
def reset_timezone_offset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.localeCodeInput">locale_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.timezoneOffsetInput">timezone_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.localeCode">locale_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.timezoneOffset">timezone_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `locale_code_input`<sup>Optional</sup> <a name="locale_code_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.localeCodeInput"></a>

```python
locale_code_input: str
```

- *Type:* str

---

##### `timezone_offset_input`<sup>Optional</sup> <a name="timezone_offset_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.timezoneOffsetInput"></a>

```python
timezone_offset_input: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `locale_code`<sup>Required</sup> <a name="locale_code" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.localeCode"></a>

```python
locale_code: str
```

- *Type:* str

---

##### `timezone_offset`<sup>Required</sup> <a name="timezone_offset" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.timezoneOffset"></a>

```python
timezone_offset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a>

---


### DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.putValuesMap">put_values_map</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resetValuesMap">reset_values_map</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_values_map` <a name="put_values_map" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.putValuesMap"></a>

```python
def put_values_map(
  value: IResolvable | typing.List[DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.putValuesMap.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>]

---

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_values_map` <a name="reset_values_map" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resetValuesMap"></a>

```python
def reset_values_map() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.valuesMap">values_map</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.valuesMapInput">values_map_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_map`<sup>Required</sup> <a name="values_map" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.valuesMap"></a>

```python
values_map: DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList</a>

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `values_map_input`<sup>Optional</sup> <a name="values_map_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.valuesMapInput"></a>

```python
values_map_input: IResolvable | typing.List[DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetPathOptionsParametersDatasetParameterFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a>

---


### DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>]

---


### DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resetValueReference">reset_value_reference</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_value_reference` <a name="reset_value_reference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resetValueReference"></a>

```python
def reset_value_reference() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueReferenceInput">value_reference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueReference">value_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value_reference_input`<sup>Optional</sup> <a name="value_reference_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueReferenceInput"></a>

```python
value_reference_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `value_reference`<sup>Required</sup> <a name="value_reference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueReference"></a>

```python
value_reference: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>

---


### DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference <a name="DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putDatetimeOptions">put_datetime_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetCreateColumn">reset_create_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetDatetimeOptions">reset_datetime_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_datetime_options` <a name="put_datetime_options" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putDatetimeOptions"></a>

```python
def put_datetime_options(
  format: str = None,
  locale_code: str = None,
  timezone_offset: str = None
) -> None
```

###### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putDatetimeOptions.parameter.format"></a>

- *Type:* str

Date/time format of a date parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#format DatabrewDataset#format}

---

###### `locale_code`<sup>Optional</sup> <a name="locale_code" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putDatetimeOptions.parameter.localeCode"></a>

- *Type:* str

Locale code for a date parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#locale_code DatabrewDataset#locale_code}

---

###### `timezone_offset`<sup>Optional</sup> <a name="timezone_offset" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putDatetimeOptions.parameter.timezoneOffset"></a>

- *Type:* str

Timezone offset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#timezone_offset DatabrewDataset#timezone_offset}

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putFilter"></a>

```python
def put_filter(
  expression: str = None,
  values_map: IResolvable | typing.List[DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap] = None
) -> None
```

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putFilter.parameter.expression"></a>

- *Type:* str

Filtering expression for a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#expression DatabrewDataset#expression}

---

###### `values_map`<sup>Optional</sup> <a name="values_map" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putFilter.parameter.valuesMap"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}.

---

##### `reset_create_column` <a name="reset_create_column" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetCreateColumn"></a>

```python
def reset_create_column() -> None
```

##### `reset_datetime_options` <a name="reset_datetime_options" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetDatetimeOptions"></a>

```python
def reset_datetime_options() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.datetimeOptions">datetime_options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.createColumnInput">create_column_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.datetimeOptionsInput">datetime_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.createColumn">create_column</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datetime_options`<sup>Required</sup> <a name="datetime_options" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.datetimeOptions"></a>

```python
datetime_options: DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.filter"></a>

```python
filter: DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference</a>

---

##### `create_column_input`<sup>Optional</sup> <a name="create_column_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.createColumnInput"></a>

```python
create_column_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `datetime_options_input`<sup>Optional</sup> <a name="datetime_options_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.datetimeOptionsInput"></a>

```python
datetime_options_input: IResolvable | DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.filterInput"></a>

```python
filter_input: IResolvable | DatabrewDatasetPathOptionsParametersDatasetParameterFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `create_column`<sup>Required</sup> <a name="create_column" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.createColumn"></a>

```python
create_column: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetPathOptionsParametersDatasetParameter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a>

---


### DatabrewDatasetPathOptionsParametersList <a name="DatabrewDatasetPathOptionsParametersList" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabrewDatasetPathOptionsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatabrewDatasetPathOptionsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>]

---


### DatabrewDatasetPathOptionsParametersOutputReference <a name="DatabrewDatasetPathOptionsParametersOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.putDatasetParameter">put_dataset_parameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resetDatasetParameter">reset_dataset_parameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resetPathParameterName">reset_path_parameter_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dataset_parameter` <a name="put_dataset_parameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.putDatasetParameter"></a>

```python
def put_dataset_parameter(
  create_column: bool | IResolvable = None,
  datetime_options: DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions = None,
  filter: DatabrewDatasetPathOptionsParametersDatasetParameterFilter = None,
  name: str = None,
  type: str = None
) -> None
```

###### `create_column`<sup>Optional</sup> <a name="create_column" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.putDatasetParameter.parameter.createColumn"></a>

- *Type:* bool | cdktn.IResolvable

Add the value of this parameter as a column in a dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#create_column DatabrewDataset#create_column}

---

###### `datetime_options`<sup>Optional</sup> <a name="datetime_options" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.putDatasetParameter.parameter.datetimeOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#datetime_options DatabrewDataset#datetime_options}.

---

###### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.putDatasetParameter.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#filter DatabrewDataset#filter}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.putDatasetParameter.parameter.name"></a>

- *Type:* str

Parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#name DatabrewDataset#name}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.putDatasetParameter.parameter.type"></a>

- *Type:* str

Parameter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_dataset#type DatabrewDataset#type}

---

##### `reset_dataset_parameter` <a name="reset_dataset_parameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resetDatasetParameter"></a>

```python
def reset_dataset_parameter() -> None
```

##### `reset_path_parameter_name` <a name="reset_path_parameter_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resetPathParameterName"></a>

```python
def reset_path_parameter_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.datasetParameter">dataset_parameter</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.datasetParameterInput">dataset_parameter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.pathParameterNameInput">path_parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.pathParameterName">path_parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_parameter`<sup>Required</sup> <a name="dataset_parameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.datasetParameter"></a>

```python
dataset_parameter: DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference</a>

---

##### `dataset_parameter_input`<sup>Optional</sup> <a name="dataset_parameter_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.datasetParameterInput"></a>

```python
dataset_parameter_input: IResolvable | DatabrewDatasetPathOptionsParametersDatasetParameter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a>

---

##### `path_parameter_name_input`<sup>Optional</sup> <a name="path_parameter_name_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.pathParameterNameInput"></a>

```python
path_parameter_name_input: str
```

- *Type:* str

---

##### `path_parameter_name`<sup>Required</sup> <a name="path_parameter_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.pathParameterName"></a>

```python
path_parameter_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetPathOptionsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>

---


### DatabrewDatasetTagsList <a name="DatabrewDatasetTagsList" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabrewDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatabrewDatasetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>]

---


### DatabrewDatasetTagsOutputReference <a name="DatabrewDatasetTagsOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import databrew_dataset

databrewDataset.DatabrewDatasetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabrewDatasetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>

---



